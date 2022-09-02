import {
  Box,
  Button,
  Container,
  Typography,
  Paper,
  Stepper,
  Step,
  StepLabel,
  MobileStepper
} from "@mui/material";
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react'
import DqfPersonalInfo from "./DqfPersonalInfo";
import DqfLicensingInfo from "./DqfLicensingInfo";
import DqfReview from "./DqfReview";
import DqfAccidentsViolations from "./DqfAccidentsViolations";
import DqfPreviousEmployers from "./DQFPreviousEmployers";
import DqfPreviousAddresses from "./DQFPreviousAddresses";
import DqfFormSubmitted from "./DqfFormSubmitted";
import DqfDrivingExperiences from "./DQFDrivingExperiences";
import DqfDisclosures from "./DqfDisclosures";
import { DataStore, Storage } from 'aws-amplify';
import { Applicant } from "../../models";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import generateDQF100DD from "../../scripts/dqf100dd";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const steps = ["Licensing", "Personal", "Addresses", "Employment", "Experience", "Accidents & Violations", "Disclosures", "Review"];

const DqfForm = () => {
  const [step, setStep] = useState(0);
  const [driversLicenseDataFront, setDriversLicenseDataFront] = useState();
  const [driversLicenseDataBack, setDriversLicenseDataBack] = useState();
  const [medCardData, setMedCardData] = useState();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [dqf100BlobUrl, setDqf100BlobUrl] = useState();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    otherName: "",
    birthDate: "",
    phone: "",
    ssnNumber: "",
    email: "",
    education: "",
    appliedFor: "",
    howDidYouHear: "",
    workedHereBefore: "no",
    workedFrom: "",
    workedTo: "",
    reasonForLeaving: "",
    jobPerformanceIssues: "",
    currentAddress: "",
    currentCity: "",
    currentState: "",
    currentZip: "",
    previousAddresses: [
    ],
    previousEmployers: [
    ],
    qualifications: [

    ],
    drivingExperiences: [],
    noAccidents3Year: "",
    accidentRecords: [],
    noViolations3Year: "",
    violationRecords: [],
    driversLicenseNumber: "",
    driversLicenseState: "",
    currentLicenseType: "",
    licenseExpiration: "",
    licenseRevocation: "",
    endorsementNone: false,
    endorsementT: false,
    endorsementP: false,
    endorsementN: false,
    endorsementH: false,
    endorsementX: false,
    endorsementS: false,
    restrictionNone: false,
    restrictionL: false,
    restrictionZ: false,
    restrictionE: false,
    restrictionO: false,
    restrictionM: false,
    restrictionN: false,
    restrictionV: false,
  });
  const [hasPreviousAddress, setHasPreviousAddress] = useState("no");
  const [hasAccidents, setHasAccidents] = useState("no");
  const [hasViolations, setHasViolations] = useState("no");
  const [hasOtherLicense, setHasOtherLicense] = useState("no");


  const theme = useTheme();

  //Proceed to next step
  const handleNext = () => {
    setStep(step + 1);
  };

  //Proceed to previous step
  const handleBack = () => {
    setStep(step - 1);
  };

  //handle field changes
  const handleChange = input => e => {
    let newForm = { ...form };
    newForm[input] = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm(newForm);
  }

  //handle change of fields nested accident array
  const handleChangeNestedArray = (arrName, index, nameProvided, valueProvided) => e => {
    const updateArr = form[arrName];
    const name = nameProvided ? nameProvided : e.target.name;
    const value = valueProvided ? valueProvided : e.target.value;

    updateArr[index][name] = value;
    setForm({ [arrName]: updateArr })
  }

  const handleRemoveFromNestedArray = (arrName, index) => {
    const updateArr = form[arrName];
    let filteredArr = updateArr.filter((record, i) => {
      return index !== i;
    })
    setForm({ [arrName]: filteredArr });
  }


  const handleAddToNestedArray = (arrName, newObj) => {
    let newForm = { ...form };
    newForm[arrName] = [...newForm[arrName], newObj]
    setForm(newForm)
  }

  const handleUpdateNestedArray = (arrName, newObj, index) => {
    const updateArr = form[arrName];
    updateArr[index] = newObj;
    setForm({
      [arrName]: updateArr
    })
  }

  const handleLicenseDataChangeFront = (data) => {
    setForm({
      ...form,
      firstName: data.firstName,
      lastName: data.lastName,
      birthDate: data.dateOfBirth,
      driversLicenseNumber: data.licenseNumber,
      driversLicenseState: data.state,
      DurrentLicenseType: data.licenseType,
      licenseExpiration: data.expirationDate,
    });
  };

  const handleLicenseDataChangeBack = (data) => {
    setForm({
      ...form,
      currentAddress: data.address,
      currentCity: data.city,
      currentState: data.state,
      currentZip: data.zip,
    });
  };


  const createApplicant = async () => {
    const argKeyArr = Object.keys(form);
    const argObj = argKeyArr.reduce((accumulator, value) => {
      return { ...accumulator, [value]: form[value] }
    }, {});

    const jsonElements = ["previousAddresses", "previousEmployers", "qualifications", "accidentRecords", "violationRecords", "drivingExperiences"];

    jsonElements.forEach(el => {
      argObj[el] = JSON.stringify(form[el]);
    })

    const result = await DataStore.save(
      new Applicant(argObj)
    )

    //Update to handle error state
    if (result) {
      setFormSubmitted(true);
      const dd100 = generateDQF100DD(form);
      const pdfDocGenerator = pdfMake.createPdf(dd100);
      pdfDocGenerator.getBlob((blob) => {
        setDqf100BlobUrl(URL.createObjectURL(blob));
        Storage.put(form.firstName + "-" + form.lastName + "/dqf100.pdf", blob, { contentType: "application/pdf" });
      });

    }
  }


  const handleFileUpload = async (fileData) => {
    console.log(fileData);
    
    const result = await Storage.put(form.firstName + "-" + form.lastName + "/" + fileData.name, fileData, { contentType: fileData.type });
    console.log(result);
  }




  const getStepContent = (step, values) => {
    switch (step) {
      case 0:
        return (
          <DqfLicensingInfo
            handleChange={handleChange}
            handleNext={handleNext}
            setDriversLicenseDataBack={setDriversLicenseDataBack}
            setDriversLicenseDataFront={setDriversLicenseDataFront}
            setMedCardData={setMedCardData}
            handleAddToNestedArray={handleAddToNestedArray}
            handleChangeNestedArray={handleChangeNestedArray}
            handleRemoveFromNestedArray={handleRemoveFromNestedArray}
            handleUpdateNestedArray={handleUpdateNestedArray}
            values={values}
            hasOtherLicense={hasOtherLicense}
            setHasOtherLicense={setHasOtherLicense}
          />
        );
      case 1:
        return (
          <DqfPersonalInfo
            handleChange={handleChange}
            handleNext={handleNext}
            handleBack={handleBack}
            values={values}

          />
        );
      case 2:
        return (
          <DqfPreviousAddresses
            handleChange={handleChange}
            handleNext={handleNext}
            handleBack={handleBack}
            handleAddToNestedArray={handleAddToNestedArray}
            handleChangeNestedArray={handleChangeNestedArray}
            handleRemoveFromNestedArray={handleRemoveFromNestedArray}
            handleUpdateNestedArray={handleUpdateNestedArray}
            values={values}
            hasPreviousAddress={hasPreviousAddress}
            setHasPreviousAddress={setHasPreviousAddress}
          />
        );
      case 3:
        return (
          <DqfPreviousEmployers
            handleChange={handleChange}
            handleNext={handleNext}
            handleBack={handleBack}
            handleAddToNestedArray={handleAddToNestedArray}
            handleChangeNestedArray={handleChangeNestedArray}
            handleRemoveFromNestedArray={handleRemoveFromNestedArray}
            handleUpdateNestedArray={handleUpdateNestedArray}
            values={values}

          />
        );
      case 4:
        return (
          <DqfDrivingExperiences
            handleChange={handleChange}
            handleNext={handleNext}
            handleBack={handleBack}
            handleAddToNestedArray={handleAddToNestedArray}
            handleChangeNestedArray={handleChangeNestedArray}
            handleRemoveFromNestedArray={handleRemoveFromNestedArray}
            handleUpdateNestedArray={handleUpdateNestedArray}
            values={values}

          />
        );
      case 5:
        return (
          <DqfAccidentsViolations
            handleChange={handleChange}
            handleNext={handleNext}
            handleBack={handleBack}
            handleAddToNestedArray={handleAddToNestedArray}
            handleChangeNestedArray={handleChangeNestedArray}
            handleRemoveFromNestedArray={handleRemoveFromNestedArray}
            handleUpdateNestedArray={handleUpdateNestedArray}
            hasViolations={hasViolations}
            hasAccidents={hasAccidents}
            setHasViolations={setHasViolations}
            setHasAccidents={setHasAccidents}
            values={values}

          />
        );
      case 6:
        return (
          <DqfDisclosures
            values={values}
            
          />
        );
      case 7:
        return (
          <DqfReview
            values={values}
            submitForm={createApplicant}
            handleBack={handleBack}
            setStep={setStep}
          />
        );
      default:
        throw new Error("Unknown step");
    }
  }

  const values = form;


  return (
    <>
      {formSubmitted ? (
        <DqfFormSubmitted dqf100BlobUrl={dqf100BlobUrl}/>
      ) : (
        <>
          <Stepper activeStep={step} sx={{ pt: 3, pb: 5, display: { xs: "none", sm: "flex" } }} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Container maxWidth="sm" sx={{ px: { xs: 1 } }}>
            <form onSubmit={createApplicant}>
              {getStepContent(step, values)}
            </form>

            <Box sx={{ mt: 7, py: 2, display: { xs: "none", sm: "flex" }, justifyContent: "flex-end", borderTop: "1px solid", borderColor: "divider" }}>
              {
                step !== 0 ? (
                  <Button
                    variant="contained"
                    onClick={handleBack}
                    sx={{ ml: 2 }}
                    type="button"
                  >
                    Back
                  </Button>
                ) : null
              }
              {
                step !== steps.length - 1 ? (
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ ml: 2 }}
                    type="button"
                  >
                    Next
                  </Button>
                ) : null
              }
              {
                step === steps.length - 1 ? (
                  <Button
                    variant="contained"
                    onClick={createApplicant}
                    sx={{ ml: 2 }}
                    type="button"
                  >
                    Submit Application
                  </Button>
                ) : null
              }

            </Box>
            <MobileStepper
              variant="progress"
              steps={steps.length}
              activeStep={step}
              sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" }, borderTop: "1px solid", borderColor: "divider" }}
              nextButton={
                step === steps.length - 1 ? (
                  <Button size="small" onClick={createApplicant}>
                    Submit
                  </Button>)
                  : (
                    <Button size="small" onClick={handleNext} disabled={step === steps.length - 1}>
                      Next
                      {theme.direction === 'rtl' ? (
                        <KeyboardArrowLeft />
                      ) : (
                        <KeyboardArrowRight />
                      )}
                    </Button>)
              }
              backButton={
                <Button size="small" onClick={handleBack} disabled={step === 0}>
                  {theme.direction === 'rtl' ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
          </Container>
        </>
      )}
    </>
  )
};

export default DqfForm;
