import { TextField, List, IconButton, ListItem, ListItemText, Container, Divider, Chip, Checkbox, FormGroup, FormControl, FormControlLabel, RadioGroup, FormLabel, Radio, Grid, Typography, Button, Box } from "@mui/material";
import { styled, useTheme } from '@mui/material/styles';
import FormModal from "../FormModal";
import { useState, useEffect } from "react";
import { Edit, Delete } from "@mui/icons-material";


const blankAccidentRecord = {
  accidentDate: "",
  accidentType: "",
  fatalities: "",
  injuries: "",
  hazMatSpill: "",
}

const blankViolationRecord = {
 violationCity: "",
 violationState: "",
 violationDate: "",
 violation: "",
 violationVehicleType: "",
}

const DqfaccidentRecordsViolations = ({ values, handleChange, hasAccidents, setHasAccidents, hasViolations, setHasViolations, handleRemoveFromNestedArray,  handleAddToNestedArray, handleUpdateNestedArray }) => {
  const [currAccidentIndex, setCurrAccidentIndex] = useState(0);
  const [editAccidentMode, setEditAccidentMode] = useState(false);
  const [accidentModalOpen, setAccidentModalOpen] = useState(false);
  const [accidentRecordTemp, setAccidentRecordTemp] = useState(blankAccidentRecord);

  const [currViolationIndex, setCurrViolationIndex] = useState(0);
  const [editViolationMode, setEditViolationMode] = useState(false);
  const [violationModalOpen, setViolationModalOpen] = useState(false);
  const [violationRecordTemp, setViolationRecordTemp] = useState(blankViolationRecord);

  const handleSaveAccident = () => {
    if (editAccidentMode) {
      handleUpdateNestedArray('accidentRecords', accidentRecordTemp, currAccidentIndex);
    } else {
      handleAddToNestedArray('accidentRecords', accidentRecordTemp);
    }

    setAccidentModalOpen(false);
  }

  const hanldeCloseAccidentModal = () => {
    setAccidentModalOpen(false);
  }

  const handleOpenEditAccidentModal = (index) => {
    setAccidentRecordTemp(values.accidentRecords[index]);
    setEditAccidentMode(true);
    setCurrAccidentIndex(index);
    setAccidentModalOpen(true);
  }

  const handleOpenAddAccidentModal = () => {
    setAccidentRecordTemp(blankAccidentRecord);
    setEditAccidentMode(false);
    setCurrAccidentIndex(values.accidentRecords.length);
    setAccidentModalOpen(true);
  }

  const handleChangeNewAccident = e => {
    let copyObj = { ...accidentRecordTemp };
    copyObj[e.target.name] = e.target.value;
    setAccidentRecordTemp(copyObj);
  }


  const handleSaveViolation = () => {
    if (editViolationMode) {
      handleUpdateNestedArray('violationRecords', violationRecordTemp, currViolationIndex);
    } else {
      handleAddToNestedArray('violationRecords', violationRecordTemp);
    }

    setViolationModalOpen(false);
  }

  const hanldeCloseViolationModal = () => {
    setViolationModalOpen(false);
  }

  const handleOpenEditViolationModal = (index) => {
    setViolationRecordTemp(values.violationRecords[index]);
    setEditViolationMode(true);
    setCurrViolationIndex(index);
    setViolationModalOpen(true);
  }

  const handleOpenAddViolationModal = () => {
    setViolationRecordTemp(blankViolationRecord);
    setEditViolationMode(false);
    setCurrViolationIndex(values.violationRecords.length);
    setViolationModalOpen(true);
  }

  const handleChangeNewViolation = e => {
    let copyObj = { ...violationRecordTemp };
    copyObj[e.target.name] = e.target.value;
    setViolationRecordTemp(copyObj);
  }

  return (
    <>
      <Typography variant="h5" sx={{ textAlign: "left", mb: 3 }}>Next, let's talk about any recent accidents or violations.</Typography>
      <Box sx={{ mb: 3 }}>
        <FormControl>
          <FormLabel id="had-accidents-label">Have you had any accidents in the past 3 years?</FormLabel>
          <RadioGroup
            row
            aria-labelledby="had-accidents-label"
            name="noAccidents3Year"
            value={hasAccidents}
            onChange={(e)=>{setHasAccidents(e.target.value)}}
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        {
          hasAccidents == "yes" ?
            (
              <>
                <Box sx={{ mt: 3, mb: 5 }}>
                  <Typography variant="h6" sx={{ mb: 1 }}>Accidents</Typography>
                  <Typography variant="p1" sx={{ pb: 2, display: "block" }}>All applicant's must disclose any accidents that they were involved in within the past three years.</Typography>
                  <Button variant="outlined" onClick={handleOpenAddAccidentModal}>Add Accident</Button>

                  {values.accidentRecords.length > 0 ? (
                    <List sx={{ border: "1px solid ", borderColor: "divider", mt: 2 }}>
                      {values.accidentRecords.map((record, index) => (
                        <div key={"accident-" + index}>
                          <ListItem
                            secondaryAction={
                              <>
                                <IconButton aria-label="edit" onClick={() => { handleOpenEditAccidentModal(index) }}>
                                  <Edit />
                                </IconButton>
                                <IconButton edge="end" aria-label="edit" onClick={() => { handleRemoveFromNestedArray("accidentRecords", index) }}>
                                  <Delete />
                                </IconButton>
                              </>
                            }
                          ><ListItemText primary={record.accidentType} secondary={record.accidentDate}></ListItemText></ListItem>
                          {
                            index !== values.accidentRecords.length - 1 ? (<Divider variant="middle" />) : null
                          }
                        </div>
                      ))}
                    </List>
                  ) : null}

                  <FormModal
                    openButtonLabel={"Add Accident"}
                    title={editAccidentMode ? "Edit Accident" : "Add Accident"}
                    open={accidentModalOpen}
                    dialogActions={
                      <>
                        <Button onClick={handleSaveAccident}>Save</Button>
                        <Button onClick={hanldeCloseAccidentModal}>Cancel</Button>
                      </>
                    }
                  >
                    <Grid container>
                      <Grid item xs={12} sm={6} mb={3}>
                        <TextField
                          type="date"
                          label="Date of Accident"
                          name="accidentDate"
                          variant="standard"
                          value={accidentRecordTemp.accidentDate}
                          onChange={handleChangeNewAccident}
                          sx={{ width: 220 }}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />

                      </Grid>
                      <Grid item xs={12} mb={3}>
                        <TextField
                          label="Accident Type"
                          name="accidentType"
                          variant="standard"
                          value={accidentRecordTemp.accidentType}
                          onChange={handleChangeNewAccident}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} mb={1} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <Typography id="falities-label">Were there fatalities?</Typography>
                        <RadioGroup
                          aria-labelledby="fatalities-label"
                          name="fatalities"
                          variant="standard"
                          value={accidentRecordTemp.fatalities}
                          onChange={handleChangeNewAccident}
                          fullWidth
                          row
                        >
                          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                          <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                      </Grid>
                      <Grid item xs={12} mb={1} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <Typography id="injuries-label">Were there injuries?</Typography>
                        <RadioGroup
                          aria-labelledby="injuries-label"
                          name="injuries"
                          variant="standard"
                          value={accidentRecordTemp.injuries}
                          onChange={handleChangeNewAccident}
                          fullWidth
                          row
                        >
                          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                          <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                      </Grid>
                      <Grid item xs={12} mb={1} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <Typography id="hazmat-label">Were there hazmat spills?</Typography>
                        <RadioGroup
                          aria-labelledby="hazmat-label"
                          name="hazMatSpill"
                          variant="standard"
                          value={accidentRecordTemp.hazMatSpill}
                          onChange={handleChangeNewAccident}
                          fullWidth
                          row
                        >
                          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                          <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                      </Grid>
                    </Grid>
                  </FormModal>
                </Box>

              </>
            ) :
            (null)


        }
      </Box>


      <Box >
        <FormControl>
          <FormLabel id="had-violations-label">Have you had any violations in the past 3 years?</FormLabel>
          <RadioGroup
            row
            aria-labelledby="had-violations-label"
            name="hasViolations"
            value={hasViolations}
            onChange={(e)=>{setHasViolations(e.target.value)}}
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        {
          hasViolations == "yes" ?
            (
              <Box sx={{ my: 3 }}>
                <Typography variant="h6" sx={{ mb: 1 }}>Violations</Typography>
                <Typography variant="p1" sx={{ pb: 2, display: "block" }}>All applicants must disclose any violations that they received within the past three years.</Typography>
                <Button variant="outlined" onClick={handleOpenAddViolationModal}>Add Violation</Button>
                {values.violationRecords.length > 0 ? (
                <List sx={{ border: "1px solid ", borderColor: "divider", mt: 2 }}>
                  {values.violationRecords.map((record, index) => (
                    <div key={"accident-" + index}>
                      <ListItem
                        secondaryAction={
                          <>
                            <IconButton aria-label="edit" onClick={() => { handleOpenEditViolationModal(index) }}>
                              <Edit />
                            </IconButton>
                            <IconButton edge="end" aria-label="edit" onClick={() => { handleRemoveFromNestedArray("violationRecords", index) }}>
                              <Delete />
                            </IconButton>
                          </>
                        }
                      ><ListItemText primary={record.violation} secondary={record.violationCity + ", " + record.violationState + " | " + record.violationVehicleType}></ListItemText></ListItem>
                      {
                        index !== values.violationRecords.length - 1 ? (<Divider variant="middle" />) : null
                      }
                    </div>
                  ))}
                </List>): null}
                <FormModal
                  openButtonLabel={"Add Violation"}
                  title={editViolationMode ? "Edit Violation" : "Add Violation"}
                  open={violationModalOpen}
                  dialogActions={
                    <>
                      <Button onClick={handleSaveViolation}>Save</Button>
                      <Button onClick={hanldeCloseViolationModal}>Cancel</Button>
                    </>
                  }
                >
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        type="date"
                        label="Violation Date"
                        name="violationDate"
                        variant="standard"
                        value={violationRecordTemp.violationDate}
                        onChange={handleChangeNewViolation}
                        sx={{ width: 220 }}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />

                    </Grid>
                    <Grid item xs={12} sm={8}>
                      <TextField
                        label="Violation City"
                        name="violationCity"
                        variant="standard"
                        value={violationRecordTemp.violationCity}
                        onChange={handleChangeNewViolation}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        label="Violation State"
                        name="violationState"
                        variant="standard"
                        value={violationRecordTemp.violationState}
                        onChange={handleChangeNewViolation}

                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Vehicle Type"
                        name="violationVehicleType"
                        variant="standard"
                        value={violationRecordTemp.violationVehicleType}
                        onChange={handleChangeNewViolation}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Violation"
                        name="violation"
                        variant="outlined"
                        value={violationRecordTemp.violation}
                        onChange={handleChangeNewViolation}
                        multiline
                        rows={3}
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                </FormModal>
              </Box>
            ) :
            (null)
        }
      </Box>
    </>
  );
};

export default DqfaccidentRecordsViolations;
