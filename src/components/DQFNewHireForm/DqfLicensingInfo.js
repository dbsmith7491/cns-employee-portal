import {
  TextField,
  Grid,
  Button,
  Typography,
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
} from "@mui/material";
import LicenseUpload from "../LicenseUpload";
import BasicDatePicker from "../BasicDatePicker";
import { useEffect, useState, useRef } from "react";

const DqfLicensingInfo = ({
  handleInputChange,
  handleDateChange,
  handleLicenseDataChangeFront,
  handleLicenseDataChangeBack,
  handleCheckGroupChange,
  endorsementsLabels,
  restrictionsLabels,
  licenseType,
  form,
}) => {
  function updateLicenseDataFront(data) {
    handleLicenseDataChangeFront(data);
  }

  function updateLicenseDataBack(data) {
    handleLicenseDataChangeBack(data);
  }

  return (
    <>
      <LicenseUpload
        updateLicenseDataFront={updateLicenseDataFront}
        updateLicenseDataBack={updateLicenseDataBack}
      />
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Licensing Information
      </Typography>
      <Grid container spacing={3}>
        {/*
        <Grid item xs={12}>
          <Button variant="contained" component="label">
            Upload Medical Card
            <input hidden accept="image/*" type="file" />
          </Button>
  </Grid>*/}
        <Grid item xs={12} sm={6}>
          <TextField
            id="firstName"
            label="First Name"
            name="firstName"
            variant="standard"
            value={form.firstName}
            onChange={handleInputChange}
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
            value={form.lastName}
            onChange={handleInputChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <BasicDatePicker
            label="Date of Birth"
            required
            value={form.dateOfBirth}
            onChangeDate={(e) => {
              handleDateChange("dateOfBirth", e);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="driversLicenseNumber"
            label="Driver's License Number"
            variant="standard"
            name="driversLicenseNumber"
            value={form.driversLicenseNumber}
            onChange={handleInputChange}
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
            value={form.driversLicenseState}
            onChange={handleInputChange}
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
              id="driversLicenseType"
              label="Current License Type"
              name="driversLicenseType"
              value={form.driversLicenseType}
              onChange={handleInputChange}
            >
              {licenseType.map((item) => (
                <MenuItem key={item.value} value={item.value}>
                  {item.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <BasicDatePicker
            label="Expiration Date"
            required
            value={form.driversLicenseExpirationDate}
            onChangeDate={(e) => {
              handleDateChange("driversLicenseExpirationDate", e);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="ssn"
            label="SSN"
            name="ssn"
            variant="standard"
            value={form.ssn}
            onChange={handleInputChange}
            fullWidth
            required
          />
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
              value={form.licenseDenied}
              onChange={handleInputChange}
              row
            >
              <FormControlLabel value="No" control={<Radio />} label="No" />
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <FormLabel component="legend">
              Endorsements (check all that apply)
            </FormLabel>
            <FormGroup id="endorsements">
              {[...Object.entries(endorsementsLabels)].map((item, index) => (
                <FormControlLabel
                  key={"endorsement-" + item[0]}
                  control={
                    <Checkbox
                      checked={form.endorsements[item[0]]}
                      name={item[0]}
                      onChange={(e) => {
                        handleCheckGroupChange(e, "endorsements");
                      }}
                    />
                  }
                  label={item[1]}
                />
              ))}
            </FormGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <FormLabel component="legend">
              Restrictions (check all that apply)
            </FormLabel>
            <FormGroup id="restrictions">
              {[...Object.entries(restrictionsLabels)].map((item, index) => (
                <FormControlLabel
                  key={"restriction-" + item[0]}
                  control={
                    <Checkbox
                      checked={form.restrictions[item[0]]}
                      name={item[0]}
                      onChange={(e) => {
                        handleCheckGroupChange(e, "restrictions");
                      }}
                    />
                  }
                  label={item[1]}
                />
              ))}
            </FormGroup>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};

export default DqfLicensingInfo;
