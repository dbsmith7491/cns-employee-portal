import { List, IconButton, ListItem, InputLabel, Select, ListItemText, Divider, FormControl, Grid, Typography, Button, Box, MenuItem } from "@mui/material";
import FormModal from "../FormModal";
import { useState } from "react";
import { Edit, Delete } from "@mui/icons-material";


const blankDrivingExperience = {
  equipmentClass: "",
  type: "",
  years: "",
}

const equipmentClassLabels = {
  "Tractor_And_Semi_Trailer": "Tractor And Semi Trailer",
  "Straight_Truck": "Straight Truck",
  "Passenger_Bus": "Passenger Bus",
  "Non-Commercial_Vehicle": "Non-Commercial Vehicle"
}
const typeLabels = {
  "No_Trailer": "No Trailer",
  "Non-CMV": "Non-CMV",
  "Full_Trailer": "Full Trailer",
  "Pole_Trailer": "Pole Trailer",
  "Tank_Trailer": "Tank Trailer",
  "Double_Trailer": "Double Trailer",
  "Triple_Trailer": "Triple Trailer",
  "School_Bus": "School Bus",
  "Coach_Bus": "Coach Bus",
  "Straight_Truck_(Tanker)": "Straight Truck (Tanker)",
  "HazMat": "HazMat",
}
const yearsLabels = {
"None": "No Driving Experience",
"Less_Than_1_Year": "Less Than 1 Year",
"1_to_3_Years": "1-3 Years",
"3_to_5_Years": "3-5 Years",
"6_to_10_Years": "6-10 Years",
"11+_Years": "11+ Years",
}



const DqfDrivingExperiences = ({ values, handleRemoveFromNestedArray, handleAddToNestedArray, handleUpdateNestedArray }) => {
  const [currDrivingExperienceIndex, setCurrDrivingExperienceIndex] = useState(0);
  const [editDrivingExperienceMode, setEditDrivingExperienceMode] = useState(false);
  const [drivingExperienceModalOpen, setDrivingExperienceModalOpen] = useState(false);
  const [drivingExperienceRecordTemp, setDrivingExperienceRecordTemp] = useState(blankDrivingExperience);



  const handleSaveDrivingExperience = () => {
    if (editDrivingExperienceMode) {
      handleUpdateNestedArray('drivingExperiences', drivingExperienceRecordTemp, currDrivingExperienceIndex);
    } else {
      handleAddToNestedArray('drivingExperiences', drivingExperienceRecordTemp);
    }

    setDrivingExperienceModalOpen(false);
  }

  const hanldeCloseDrivingExperienceModal = () => {
    setDrivingExperienceModalOpen(false);
  }

  const handleOpenEditDrivingExperienceModal = (index) => {
    setDrivingExperienceRecordTemp(values.drivingExperiences[index]);
    setEditDrivingExperienceMode(true);
    setCurrDrivingExperienceIndex(index);
    setDrivingExperienceModalOpen(true);
  }

  const handleOpenAddDrivingExperienceModal = () => {
    setDrivingExperienceRecordTemp(blankDrivingExperience);
    setEditDrivingExperienceMode(false);
    setCurrDrivingExperienceIndex(values.drivingExperiences.length);
    setDrivingExperienceModalOpen(true);
  }

  const handleChangeNewDrivingExperience = e => {
    let copyObj = { ...drivingExperienceRecordTemp };
    copyObj[e.target.name] = e.target.value;
    setDrivingExperienceRecordTemp(copyObj);
  }


  return (
    <>
      <Typography variant="h5" sx={{ textAlign: "left", mb: 2 }}>Tell us about your driving experience.</Typography>
      <Box sx={{ mt: 2, mb: 3 }}>
        <Button variant="outlined" onClick={handleOpenAddDrivingExperienceModal}>Add Driving Experience</Button>

        {values.drivingExperiences.length > 0 ? (
          <List sx={{ border: "1px solid ", borderColor: "divider", mt: 2 }}>
            {values.drivingExperiences.map((record, index) => (
              <div key={"experience-" + index}>
                <ListItem
                  secondaryAction={
                    <>
                      <IconButton aria-label="edit" onClick={() => { handleOpenEditDrivingExperienceModal(index) }}>
                        <Edit />
                      </IconButton>
                      <IconButton edge="end" aria-label="edit" onClick={() => { handleRemoveFromNestedArray("drivingExperiences", index) }}>
                        <Delete />
                      </IconButton>
                    </>
                  }
                ><ListItemText primary={equipmentClassLabels[record.equipmentClass] + " | " + typeLabels[record.type]} secondary={yearsLabels[record.years]}></ListItemText></ListItem>
                {
                  index !== values.drivingExperiences.length - 1 ? (<Divider variant="middle" />) : null
                }
              </div>
            ))}
          </List>) : null}
        <FormModal
          fullWidth
          maxWidth="sm"
          openButtonLabel={"Add Driving Experience"}
          title={editDrivingExperienceMode ? "Edit Driving Experience" : "Add Driving Experience"}
          open={drivingExperienceModalOpen}
          dialogActions={
            <>
              <Button onClick={handleSaveDrivingExperience}>Save</Button>
              <Button onClick={hanldeCloseDrivingExperienceModal}>Cancel</Button>
            </>
          }
        >

          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControl variant="standard" fullWidth>
                <InputLabel id="equipment-class-select-label">Class of Equipment</InputLabel>
                <Select
                  labelId="equipment-class-select-label"
                  name="equipmentClass"
                  value={drivingExperienceRecordTemp.equipmentClass}
                  label="Class of Equipment"
                  onChange={handleChangeNewDrivingExperience}
                >
                  <MenuItem value="Tractor_And_Semi_Trailer">Tractor And Semi Trailer</MenuItem>
                  <MenuItem value="Straight_Truck">Straight Truck</MenuItem>
                  <MenuItem value="Passenger_Bus">Passenger Bus</MenuItem>
                  <MenuItem value="Non-Commercial_Vehicle">Non-Commercial Vehicle</MenuItem>

                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="standard" fullWidth>
                <InputLabel id="type-select-label">Type</InputLabel>
                <Select
                  labelId="type-select-label"
                  name="type"
                  value={drivingExperienceRecordTemp.type}
                  label="Type"
                  onChange={handleChangeNewDrivingExperience}
                >
                  <MenuItem value="No_Trailer">No Trailer</MenuItem>
                  <MenuItem value="Non-CMV">Non-CMV</MenuItem>
                  <MenuItem value="Full_Trailer">Full Trailer</MenuItem>
                  <MenuItem value="Pole_Trailer">Pole Trailer</MenuItem>
                  <MenuItem value="Tank_Trailer">Tank Trailer</MenuItem>
                  <MenuItem value="Double_Trailer">Double Trailer</MenuItem>
                  <MenuItem value="Triple_Trailer">Triple Trailer</MenuItem>
                  <MenuItem value="School_Bus">School Bus</MenuItem>
                  <MenuItem value="Coach_Bus">Coach Bus</MenuItem>
                  <MenuItem value="Straight_Truck_(Tanker)">Straight Truck (Tanker)</MenuItem>
                  <MenuItem value="HazMat">HazMat</MenuItem>

                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="standard" fullWidth>
                <InputLabel id="years-select-label">Years of Experience</InputLabel>
                <Select
                  labelId="equipment-class-select-label"
                  name="years"
                  value={drivingExperienceRecordTemp.years}
                  label="Years of Experience"
                  onChange={handleChangeNewDrivingExperience}
                >
                  <MenuItem value="None">No Driving Experience</MenuItem>
                  <MenuItem value="Less_Than_1_Year">Less Than 1 Year</MenuItem>
                  <MenuItem value="1_to_3_Years">1-3 Years</MenuItem>
                  <MenuItem value="3_to_5_Years">3-5 Years</MenuItem>
                  <MenuItem value="6_to_10_Years">6-10 Years</MenuItem>
                  <MenuItem value="11+_Years">11+ Years</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </FormModal>
      </Box>
    </>
  );
};

export default DqfDrivingExperiences;
