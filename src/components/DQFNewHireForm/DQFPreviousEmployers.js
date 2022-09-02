import { TextField, List, IconButton, ListItem, ListItemText, Container, Divider, Chip, Checkbox, FormGroup, FormControl, FormControlLabel, RadioGroup, FormLabel, Radio, Grid, Typography, Button, Box } from "@mui/material";
import { styled, useTheme } from '@mui/material/styles';
import FormModal from "../FormModal";
import { useState, useEffect } from "react";
import { Edit, Delete } from "@mui/icons-material";


const blankEmployerRecord = {
  previousEmployerName: "",
  previousEmployerDOT: "",
  previousEmployerAddress: "",
  previousEmployerCity: "",
  previousEmployerState: "",
  previousEmployerZip: "",
  previousEmployerContact: "",
  previousEmployerPhone: "",
  previousEmployerEmail: "",
  previousDateFrom: "",
  previousDateTo: "",
  previousPosition: "",
  previousSalary: "",
  previousFMCSRSubject: "",
  previousPart40DA: "",
  previousReasonForLeaving: "",
}


const DqfpreviousEmployers = ({values, handleRemoveFromNestedArray, handleAddToNestedArray, handleUpdateNestedArray }) => {
  const [currEmployerIndex, setCurrEmployerIndex] = useState(0);
  const [editEmployerMode, setEditEmployerMode] = useState(false);
  const [employerModalOpen, setEmployerModalOpen] = useState(false);
  const [employerRecordTemp, setEmployerRecordTemp] = useState(blankEmployerRecord);



  const handleSaveEmployer = () => {
    if (editEmployerMode) {
      handleUpdateNestedArray('previousEmployers', employerRecordTemp, currEmployerIndex);
    } else {
      handleAddToNestedArray('previousEmployers', employerRecordTemp);
    }

    setEmployerModalOpen(false);
  }

  const hanldeCloseEmployerModal = () => {
    setEmployerModalOpen(false);
  }

  const handleOpenEditEmployerModal = (index) => {
    setEmployerRecordTemp(values.previousEmployers[index]);
    setEditEmployerMode(true);
    setCurrEmployerIndex(index);
    setEmployerModalOpen(true);
  }

  const handleOpenAddEmployerModal = () => {
    setEmployerRecordTemp(blankEmployerRecord);
    setEditEmployerMode(false);
    setCurrEmployerIndex(values.previousEmployers.length);
    setEmployerModalOpen(true);
  }

  const handleChangeNewEmployer = e => {
    let copyObj = { ...employerRecordTemp };
    copyObj[e.target.name] = e.target.value;
    setEmployerRecordTemp(copyObj);
  }


  return (
      <>
        <Typography variant="h5" sx={{ textAlign: "left", mb: 2 }}>Let's get your previous employment information.</Typography>
        <Box sx={{ mt: 2, mb: 3 }}>
          <Typography variant="body" sx={{ pb: 2, mb: 2, display: "block" }}>All applicants wishing to drive in interstate commerce must provide employment information for the last three years. You must
            also provide information for any employer for whom you drove a commercial vehicle within the past ten years.</Typography>
          <Button variant="outlined" onClick={handleOpenAddEmployerModal}>Add Employer</Button>

          {values.previousEmployers.length > 0 ? (
            <List sx={{ border: "1px solid ", borderColor:"divider", mt: 2 }}>
              {values.previousEmployers.map((record, index) => (
                <div key={"employers-" + index}>
                  <ListItem
                    secondaryAction={
                      <>
                        <IconButton aria-label="edit" onClick={() => { handleOpenEditEmployerModal(index) }}>
                          <Edit />
                        </IconButton>
                        <IconButton edge="end" aria-label="edit" onClick={() => { handleRemoveFromNestedArray("previousEmployers", index) }}>
                          <Delete />
                        </IconButton>
                      </>
                    }
                  ><ListItemText primary={record.previousEmployerName} secondary={record.PreviousDateFrom}></ListItemText></ListItem>
                  {
                    index !== values.previousEmployers.length-1 ? ( <Divider variant="middle" />):null
                  }
                 </div>
              ))}
            </List>) : null}
          <FormModal
            openButtonLabel={"Add Employer"}
            title={editEmployerMode ? "Edit Employer" : "Add Employer"}
            open={employerModalOpen}
            dialogActions={
              <>
                <Button onClick={handleSaveEmployer}>Save</Button>
                <Button onClick={hanldeCloseEmployerModal}>Cancel</Button>
              </>
            }
          >
            <Grid container spacing={3} >
              <Grid item xs={12}>
                <TextField
                  label="Employer Name"
                  name="previousEmployerName"
                  variant="standard"
                  value={employerRecordTemp.previousEmployerName}
                  onChange={handleChangeNewEmployer}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Employer DOT#"
                  name="previousEmployerDOT"
                  variant="standard"
                  value={employerRecordTemp.previousEmployerDOT}
                  onChange={handleChangeNewEmployer}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  label="Job Title"
                  name="previousPosition"
                  variant="standard"
                  value={employerRecordTemp.previousPosition}
                  onChange={handleChangeNewEmployer}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  type="date"
                  label="Start Date"
                  name="previousDateFrom"
                  variant="standard"
                  value={employerRecordTemp.previousDateFrom}
                  onChange={handleChangeNewEmployer}
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
                  name="previousDateTo"
                  variant="standard"
                  value={employerRecordTemp.previousDateTo}
                  onChange={handleChangeNewEmployer}
                  sx={{ width: 220 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              {/* 
              <Grid item xs={12} >
                <TextField
                  label="Address"
                  name="PreviousEmployerAddress"
                  variant="standard"
                  value={employerRecordTemp.PreviousEmployerAddress}
                  onChange={handleChangeNewEmployer}
                  fullWidth
                />
              
              </Grid>*/}
              <Grid item xs={12} sm={6}>
                <TextField
                  label="City"
                  name="previousEmployerCity"
                  variant="standard"
                  value={employerRecordTemp.previousEmployerCity}
                  onChange={handleChangeNewEmployer}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField
                  label="State"
                  name="previousEmployerState"
                  variant="standard"
                  value={employerRecordTemp.previousEmployerState}
                  onChange={handleChangeNewEmployer}
                  fullWidth
                />
              </Grid>
              {/* 
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Zip"
                  name="PreviousEmployerZip"
                  variant="standard"
                  value={employerRecordTemp.PreviousEmployerZip}
                  onChange={handleChangeNewEmployer}
                  fullWidth
                />
              </Grid>*/}

              <Grid item xs={12}>
                <FormControl>
                  <FormLabel id="fmscr-label" sx={{ display: "block" }}>Were you subject to the FMCSR while employed?</FormLabel>
                  <RadioGroup
                    aria-labelledby="fmscr-label"
                    name="previousFMCSRSubject"
                    variant="standard"
                    value={employerRecordTemp.previousFMCSRSubject}
                    onChange={handleChangeNewEmployer}
                    fullWidth
                    row
                  >
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
                </FormControl>

              </Grid>
              <Grid item xs={12}>
                <FormControl>
                  <FormLabel id="part-40-label" sx={{ display: "block" }}>Was your position safety sensitive requiring part 40 drug and alcohol testing?</FormLabel>
                  <RadioGroup
                    aria-labelledby="part-40-label"
                    name="previousPart40DA"
                    variant="standard"
                    value={employerRecordTemp.previousPart40DA}
                    onChange={handleChangeNewEmployer}
                    fullWidth
                    row
                  >
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6">Employer Contact</Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Contact Name"
                  name="previousEmployerContact"
                  variant="standard"
                  value={employerRecordTemp.previousEmployerContact}
                  onChange={handleChangeNewEmployer}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Contact Phone"
                  name="previousEmployerPhone"
                  variant="standard"
                  value={employerRecordTemp.previousEmployerPhone}
                  onChange={handleChangeNewEmployer}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Contact email"
                  name="previousEmployerEmail"
                  variant="standard"
                  value={employerRecordTemp.previousEmployerEmail}
                  onChange={handleChangeNewEmployer}
                  fullWidth
                />
              </Grid>
            </Grid>
          </FormModal>
        </Box>
      </>
  );
};

export default DqfpreviousEmployers;
