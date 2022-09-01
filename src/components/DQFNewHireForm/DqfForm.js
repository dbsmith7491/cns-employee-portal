import {
  Box,
  Button,
  Container,
  Typography,
  Paper,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";

import DqfPersonalInfo from "./DqfPersonalInfo";
import DqfLicensingInfo from "./DqfLicensingInfo";
import DqfReview from "./DqfReview";
import { useState, useRef } from "react";
import { useParams } from "react-router";

const steps = ["Licensing Info", "Contact info", "Review your info"];
const blankForm = {
  driversLicenseFile: null,
  medicalCardFile: null,
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  ssn: "",
  phone: "",
  email: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  driversLicenseNumber: "",
  driversLicenseState: "",
  driversLicenseType: "",
  driversLicenseExpirationDate: "",
  licenseDenied: "No",
  endorsements: {
    none: false,
    t: false,
    p: false,
    n: false,
    h: false,
    x: false,
    s: false,
  },
  restrictions: {
    none: false,
    l: false,
    z: false,
    e: false,
    o: false,
    m: false,
    n: false,
    v: false,
  },
};

const DqfForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [form, setForm] = useState(blankForm);
  let { customerID } = useParams();
  const saveButtonHidden = useRef();

  const endorsementsLabels = {
    none: "None",
    t: "T - Double/Triple Trailers",
    p: "P - Passenger",
    n: "N - Tank Vehicle",
    h: "H - Hazardous Materials",
    x: "X - Combination Tank/HazMat",
    s: "S - School Bus",
  };

  const restrictionsLabels = {
    none: "None",
    l: "L - No Air Brakes",
    z: "Z - No Air Brakes (air over system)",
    e: "E - Automatic Only",
    o: "O - No 5th Wheel",
    m: "M - Class B/C Passenger",
    n: "N - Class C Passenger",
    v: "V - Medical Variance Issued",
  };

  const licenseType = [
    {
      value: "Class A CDL Driver",
      label: "Class A CDL Driver",
    },
    {
      value: "Class B CDL Driver",
      label: "Class B CDL Driver",
    },
    {
      value: "Class C CDL Driver",
      label: "Class C CDL Driver",
    },
    {
      value: "Non-CDL Driver",
      label: "Non-CDL Driver",
    },
  ];

  const handleLicenseDataChangeFront = (data) => {
    setForm({
      ...form,
      firstName: data.firstName,
      lastName: data.lastName,
      dateOfBirth: data.dateOfBirth,
      driversLicenseNumber: data.licenseNumber,
      driversLicenseState: data.state,
      driversLicenseType: data.licenseType,
      driversLicenseExpirationDate: data.expirationDate,
    });
  };

  const handleLicenseDataChangeBack = (data) => {
    setForm({
      ...form,
      address: data.address,
      city: data.city,
      state: data.state,
      zip: data.zip,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleDateChange = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleCheckGroupChange = (e, groupName) => {
    const { name, checked } = e.target;
    let tempObj = structuredClone(form[groupName]);
    tempObj[name] = checked;
    setForm({
      ...form,
      [groupName]: tempObj,
    });
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    if (activeStep === steps.length - 1) {
      saveButtonHidden.current.click();
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  async function onSubmit(e) {
    e.preventDefault();
    const newDriver = { ...form };
    await fetch(`/driver/add/${customerID.toString()}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDriver),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm(blankForm);
    //navigate("/");
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <DqfLicensingInfo
            handleInputChange={handleInputChange}
            handleDateChange={handleDateChange}
            handleCheckGroupChange={handleCheckGroupChange}
            handleLicenseDataChangeFront={handleLicenseDataChangeFront}
            handleLicenseDataChangeBack={handleLicenseDataChangeBack}
            endorsementsLabels={endorsementsLabels}
            restrictionsLabels={restrictionsLabels}
            licenseType={licenseType}
            form={form}
          />
        );
      case 1:
        return (
          <DqfPersonalInfo
            handleInputChange={handleInputChange}
            handleDateChange={handleDateChange}
            form={form}
          />
        );
      case 2:
        return (
          <DqfReview
            form={form}
            endorsementsLabels={endorsementsLabels}
            restrictionsLabels={restrictionsLabels}
          />
        );
      default:
        throw new Error("Unknown step");
    }
  }

  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Typography component="h1" variant="h4" align="center">
          Create a Driver Profile
        </Typography>
        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <form onSubmit={onSubmit}>
          {activeStep === steps.length ? (
            <>
              <Typography variant="h5" gutterBottom>
                Driver Profile Created.
              </Typography>
              <Typography variant="subtitle1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>
            </>
          ) : (
            <>
              {getStepContent(activeStep)}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                  type="button"
                >
                  {activeStep === steps.length - 1 ? "Submit" : "Next"}
                </Button>
              </Box>
            </>
          )}
          <Button type="submit" ref={saveButtonHidden}></Button>
        </form>
      </Paper>
    </Container>
  );
};

export default DqfForm;
