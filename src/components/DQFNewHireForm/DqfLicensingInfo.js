import {
  TextField,
  Grid,
  Button,
  Typography,
  Box,
  Checkbox,
  FormGroup,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  MenuItem,
  Select,
  InputLabel,
  List,
  ListItem,
  IconButton,
  Divider,
  ListItemText,
} from "@mui/material";
import SingleFileUpload from "../SingleFileUpload";
import LicenseUpload from "../LicenseUpload";
import BasicDatePicker from "../BasicDatePicker";
import { Edit, Delete } from "@mui/icons-material";
import { useEffect, useState, useRef } from "react";
import FormModal from "../FormModal";


const endorsementsLabels = {
  "endorsementT": "T - Double/Triple Trailers",
  "endorsementP": "P - Passenger",
  "endorsementN": "N - Tank Vehicle",
  "endorsementH": "H - Hazardous Materials",
  "endorsementX": "X - Combination Tank/HazMat",
  "endorsementS": "S - School Bus",
};

const restrictionsLabels = {
  "restrictionL": "L - No Air Brakes",
  "restrictionZ": "Z - No Air Brakes (air over system)",
  "restrictionE": "E - Automatic Only",
  "restrictionO": "O - No 5th Wheel",
  "restrictionM": "M - Class B/C Passenger",
  "restrictionN": "N - Class C Passenger",
  "restrictionV": "V - Medical Variance Issued",
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

const blankQualificationRecord = {
  qualificationState: "",
  qualificationLicenseType: "",
  qualificationExpirationDate: "",
  endorsementNone: false,
  endorsementT: false,
  endorsementP: false,
  endorsementN: false,
  endorsementH: false,
  endorsementX: false,
  endorsementS: false,
  restrictionNonfalse: false,
  restrictionL: false,
  restrictionZ: false,
  restrictionE: false,
  restrictionO: false,
  restrictionM: false,
  restrictionN: false,
  restrictionV: false,
}


const DqfLicensingInfo = ({ handleNext, previousStep, hasOtherLicense, setHasOtherLicense, values, handleChange, setDriversLicenseDataBack, setDriversLicenseDataFront, setMedCardData, handleRemoveFromNestedArray, handleAddToNestedArray, handleUpdateNestedArray }) => {

  const [currQualificationIndex, setCurrQualificationIndex] = useState(0);
  const [editQualificationMode, setEditQualificationMode] = useState(false);
  const [qualificationModalOpen, setQualificationModalOpen] = useState(false);
  const [qualificationRecordTemp, setQualificationRecordTemp] = useState(blankQualificationRecord);

  const handleSaveQualification = () => {
    if (editQualificationMode) {
      handleUpdateNestedArray('qualifications', qualificationRecordTemp, currQualificationIndex);
    } else {
      handleAddToNestedArray('qualifications', qualificationRecordTemp);
    }

    setQualificationModalOpen(false);
  }

  const hanldeCloseQualificationModal = () => {
    setQualificationModalOpen(false);
  }

  const handleOpenEditQualificationModal = (index) => {
    setQualificationRecordTemp(values.qualifications[index]);
    setEditQualificationMode(true);
    setCurrQualificationIndex(index);
    setQualificationModalOpen(true);
  }

  const handleOpenAddQualificationModal = () => {
    setQualificationRecordTemp(blankQualificationRecord);
    setEditQualificationMode(false);
    setCurrQualificationIndex(values.qualifications.length);
    setQualificationModalOpen(true);
  }

  const handleChangeNewQualification = e => {
    let copyObj = { ...qualificationRecordTemp };
    copyObj[e.target.name] = e.target.value;
    setQualificationRecordTemp(copyObj);
  }


  return (
    <>
      <Typography variant="h5" sx={{ textAlign: "left", mb: 3 }}>First, let's get your licensing information.</Typography>
      <Typography variant="body" sx={{ mb: 2, display: "block" }}>We might be able to save you some time by pre-populating part of this application from the image of your driver's license.</Typography>
      <SingleFileUpload
        uploadButtonLabel={"Choose Image"}
        uploadedSubtitle={"Front of License"}
        fieldLabel={"Front of License"}
        handleFileUpload={setDriversLicenseDataFront}
      />
      <SingleFileUpload
        uploadButtonLabel={"Choose Image"}
        uploadedSubtitle={"Back of License"}
        fieldLabel={"Back of License"}
        handleFileUpload={setDriversLicenseDataBack}
      />
      <SingleFileUpload
        uploadButtonLabel={"Choose Image"}
        uploadedSubtitle={"Medical Card"}
        fieldLabel={"Medical Card"}
        handleFileUpload={setMedCardData}
      />
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Licensing Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="firstName"
            label="First Name"
            name="firstName"
            variant="standard"
            value={values.firstName}
            onChange={handleChange('firstName')}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="lastName"
            label="Last Name"
            name="lastName"
            variant="standard"
            value={values.lastName}
            onChange={handleChange('lastName')}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="date"
            label="Date of Birth"
            name="birthDate"
            variant="standard"
            value={values.birthDate}
            onChange={handleChange('birthDate')}
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="driversLicenseNumber"
            label="Driver's License Number"
            variant="standard"
            name="driversLicenseNumber"
            value={values.driversLicenseNumber}
            onChange={handleChange('driversLicenseNumber')}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="driversLicenseState"
            label="Driver's License State"
            variant="standard"
            name="driversLicenseState"
            value={values.driversLicenseState}
            onChange={handleChange('driversLicenseState')}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant="standard">
            <InputLabel id="currentLicenseTypeLabel">
              Current License Type
            </InputLabel>
            <Select
              labelId="currentLicenseTypeLabel"
              id="currentLicenseType"
              label="Current License Type"
              name="currentLicenseType"
              value={values.currentLicenseType}
              onChange={handleChange('currentLicenseType')}
            >
              <MenuItem value="Class_A_CDL_Driver">Class A CDL Driver</MenuItem>
              <MenuItem value="Class_B_CDL_Driver">Class B CDL Driver</MenuItem>
              <MenuItem value="Class_C_CDL_Driver">Class C CDL Driver</MenuItem>
              <MenuItem value="Non-CDL_Driver">Non-CDL Driver</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} >
          <TextField
            type="date"
            label="Expiration Date"
            name="licenseExpiration"
            variant="standard"
            value={values.licenseExpiration}
            onChange={handleChange('licenseExpiration')}
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl>
            <FormLabel component="legend">
              Endorsements (check all that apply)
            </FormLabel>
            <FormGroup id="endorsements">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={values.endorsementNone}
                    name="endorsementNone"
                    onChange={
                      handleChange("endorsementNone")
                    }

                  />
                }
                label="None"
              />
              {
                [...Object.keys(endorsementsLabels)].map((el, index) => (
                  <FormControlLabel
                    key={"endorsement-" + index}
                    control={
                      <Checkbox
                        checked={values[el]}
                        name={el}
                        onChange={
                          handleChange(el)
                        }
                      />
                    }
                    label={endorsementsLabels[el]}
                  />


                ))
              }
            </FormGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl>
            <FormLabel component="legend">
              Restrictions (check all that apply)
            </FormLabel>
            <FormGroup id="restrictions">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={values.restrictionNone}
                    name="restrictionNone"
                    onChange={
                      handleChange("restrictionNone")
                    }
                  />
                }
                label="None"
              />
              {
                [...Object.keys(restrictionsLabels)].map((el, index) => (
                  <FormControlLabel
                    key={"restriction-" + index}
                    control={
                      <Checkbox
                        checked={values[el]}
                        name={el}
                        onChange={
                          handleChange(el)
                        }
                      />
                    }
                    label={restrictionsLabels[el]}
                  />
                ))
              }
            </FormGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <FormLabel id="license-denied-label">
              Have you been denied a license, prviledge, or permit to operate a
              motor vehicle or had a license, privledge or permit suspended or
              revoked?
            </FormLabel>
            <RadioGroup
              id="licenseDenied"
              aria-labelledby="license-denied-label"
              defaultValue="No"
              name="licenseDenied"
              value={values.licenseDenied}
              onChange={handleChange}
              row
            >
              <FormControlLabel value="No" control={<Radio />} label="No" />
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <FormLabel id="has-other-license-label">
              Have you held any other licenses or permits in the past 3 years?
            </FormLabel>
            <RadioGroup
              id="hasOtherLicense"
              aria-labelledby="has-other-license-label"
              name="licenseDenied"
              value={hasOtherLicense}
              onChange={(e) => { setHasOtherLicense(e.target.value) }}
              row
            >
              <FormControlLabel value="no" control={<Radio />} label="No" />
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
      {
        hasOtherLicense == "yes" ?
          (
            <Box sx={{ my: 3 }}>
              <Typography variant="h6" sx={{ mb: 1 }}>Additional Licenses/Permits</Typography>
              <Typography variant="p1" sx={{ pb: 2, display: "block" }}>All applicants must disclose any licenses/permits they have held within the past three years.</Typography>
              <Button variant="outlined" onClick={handleOpenAddQualificationModal}>Add License/Permit</Button>
              {values.qualifications.length > 0 ? (
                <List sx={{ border: "1px solid ", borderColor: "divider", mt: 2 }}>
                  {values.qualifications.map((record, index) => (
                    <div key={"qualification-" + index}>
                      <ListItem
                        secondaryAction={
                          <>
                            <IconButton aria-label="edit" onClick={() => { handleOpenEditQualificationModal(index) }}>
                              <Edit />
                            </IconButton>
                            <IconButton edge="end" aria-label="edit" onClick={() => { handleRemoveFromNestedArray("qualifications", index) }}>
                              <Delete />
                            </IconButton>
                          </>
                        }
                      ><ListItemText primary={record.qualificationLicenseType.replaceAll("_", " ")} secondary={record.qualificationState + " | Expires: " + record.qualificationExpirationDate}></ListItemText></ListItem>
                      {
                        index !== values.qualifications.length - 1 ? (<Divider variant="middle" />) : null
                      }
                    </div>
                  ))}
                </List>) : null}
              <FormModal
                openButtonLabel={"Add License/Permit"}
                title={editQualificationMode ? "Edit License/Permit" : "Add License/Permit"}
                open={qualificationModalOpen}
                dialogActions={
                  <>
                    <Button onClick={handleSaveQualification}>Save</Button>
                    <Button onClick={hanldeCloseQualificationModal}>Cancel</Button>
                  </>
                }
              >
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="driversLicenseState"
                      label="License State"
                      variant="standard"
                      name="qualificationState"
                      value={qualificationRecordTemp.qualificationState}
                      onChange={handleChangeNewQualification}
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth variant="standard">
                      <InputLabel id="licenseTypeLabel">
                        License Type
                      </InputLabel>
                      <Select
                        labelId="currentLicenseTypeLabel"
                        id="currentLicenseType"
                        label="License Type"
                        name="qualificationLicenseType"
                        value={qualificationRecordTemp.qualificationLicenseType}
                        onChange={handleChangeNewQualification}
                      >
                        <MenuItem value="Class_A_CDL_Driver">Class A CDL Driver</MenuItem>
                        <MenuItem value="Class_B_CDL_Driver">Class B CDL Driver</MenuItem>
                        <MenuItem value="Class_C_CDL_Driver">Class C CDL Driver</MenuItem>
                        <MenuItem value="Non-CDL_Driver">Non-CDL Driver</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} >
                    <TextField
                      type="date"
                      label="Expiration Date"
                      name="qualificationExpirationDate"
                      variant="standard"
                      value={qualificationRecordTemp.qualificationExpirationDate}
                      onChange={handleChangeNewQualification}
                      sx={{ width: 220 }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl>
                      <FormLabel component="legend">
                        Endorsements (check all that apply)
                      </FormLabel>
                      <FormGroup id="endorsements">
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={qualificationRecordTemp.endorsementNone}
                              name="endorsementNone"
                              onChange={
                                handleChangeNewQualification
                              }

                            />
                          }
                          label="None"
                        />
                        {
                          [...Object.keys(endorsementsLabels)].map((el, index) => (
                            <FormControlLabel
                              key={"endorsement-" + index}
                              control={
                                <Checkbox
                                  checked={qualificationRecordTemp[el]}
                                  name={el}
                                  onChange={
                                    handleChangeNewQualification
                                  }
                                />
                              }
                              label={endorsementsLabels[el]}
                            />


                          ))
                        }
                      </FormGroup>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl>
                      <FormLabel component="legend">
                        Restrictions (check all that apply)
                      </FormLabel>
                      <FormGroup id="restrictions">
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={qualificationRecordTemp.restrictionNone}
                              name="restrictionNone"
                              onChange={
                                handleChangeNewQualification
                              }
                            />
                          }
                          label="None"
                        />
                        {
                          [...Object.keys(restrictionsLabels)].map((el, index) => (
                            <FormControlLabel
                              key={"restriction-" + index}
                              control={
                                <Checkbox
                                  checked={qualificationRecordTemp[el]}
                                  name={el}
                                  onChange={
                                    handleChangeNewQualification
                                  }
                                />
                              }
                              label={restrictionsLabels[el]}
                            />
                          ))
                        }
                      </FormGroup>
                    </FormControl>
                  </Grid>
                </Grid>
              </FormModal>
            </Box>
          ) :
          (null)
      }
    </>
  )
}

export default DqfLicensingInfo;
