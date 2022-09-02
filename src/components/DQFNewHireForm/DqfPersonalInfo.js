import { TextField, Container, Grid, RadioGroup, FormControlLabel, Radio, FormLabel, Typography, Box, Button, MenuItem, FormControl, InputLabel, Select } from "@mui/material";

import BasicDatePicker from "../BasicDatePicker";

const DqfPersonalInfo = ({ handleNext, handleBack, values, handleChange }) => {
  return (
    <>
      <Typography variant="h5" sx={{ textAlign: "left", mb: 3 }}>We need a bit more information about you.</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormControl variant="standard" fullWidth>
            <InputLabel id="education-select-label">Highest Education Level</InputLabel>
            <Select
              labelId="education-select-label"
              id="education"
              name="education"
              value={values.education}
              label="Highest Education Level"
              onChange={handleChange('education')}
            >
              <MenuItem value="No_Diploma">No Diploma</MenuItem>
              <MenuItem value="GED">GED</MenuItem>
              <MenuItem value="Diploma">Diploma</MenuItem>
              <MenuItem value="Some_College">Some College</MenuItem>
              <MenuItem value="College_Degree">College Degree</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="ssn"
            label="SSN"
            name="ssn"
            variant="standard"
            value={values.ssnNumber}
            onChange={handleChange('ssnNumber')}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="phone"
            label="Phone"
            name="phone"
            variant="standard"
            value={values.phone}
            onChange={handleChange("phone")}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="email"
            label="Email"
            name="email"
            variant="standard"
            value={values.email}
            onChange={handleChange("email")}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant="standard">
            <InputLabel id="appliedForLabel">
              Applying For
            </InputLabel>
            <Select
              labelId="appliedForLabel"
              label="Applying For"
              name="appliedfor"
              value={values.appliedFor}
              onChange={handleChange('appliedFor')}
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
            id="howDidYouHear"
            label="How did you hear about this position?"
            name="showDidYouHear"
            variant="standard"
            value={values.howDidYouHear}
            onChange={handleChange('howDidYouHear')}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
                <TextField
                  label="Will you be able to perform all job functions? If not, explain if you wish:"
                  name="jobPerformanceIssues"
                  variant="standard"
                  value={values.jobPerformanceIssues}
                  onChange={handleChange('jobPerformanceIssues')}
                  fullWidth
                />
              </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth variant="standard">
            <FormLabel id="workedHereBeforeLabel">
              Have you worked for this company before?
            </FormLabel>
            <RadioGroup
              labelId="workedHereBeforeLabel"
              label="Have you worked for this company before?"
              name="workedHereBefore"
              value={values.workedHereBefore}
              onChange={handleChange('workedHereBefore')}
              row
            >
              <FormControlLabel value="no" control={<Radio />} label="No" />
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            </RadioGroup>
          </FormControl>
        </Grid>
        {
          values.workedHereBefore == "yes" ? (
            <>
              <Grid item xs={12}>
                <TextField
                  label="What was your reason for leaving?"
                  name="reasonForLeaving"
                  variant="standard"
                  value={values.reasonForLeaving}
                  onChange={handleChange('reasonForLeaving')}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  type="date"
                  label="Start Date"
                  name="workedFrom"
                  variant="standard"
                  value={values.workedFrom}
                  onChange={handleChange('workedFrom')}
                  sx={{ width: 220 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  type="date"
                  label="End Date"
                  name="workedTo"
                  variant="standard"
                  value={values.workedTo}
                  onChange={handleChange('workedTo')}
                  sx={{ width: 220 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid></>
          ) : (null)
        }
      </Grid>
    </>
  );
};

export default DqfPersonalInfo;
