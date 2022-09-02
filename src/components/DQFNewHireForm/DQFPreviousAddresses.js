import { TextField, List, IconButton, ListItem, ListItemText, Container, Divider, Chip, Checkbox, FormGroup, FormControl, FormControlLabel, RadioGroup, FormLabel, Radio, Grid, Typography, Button, Box } from "@mui/material";
import { styled, useTheme } from '@mui/material/styles';
import FormModal from "../FormModal";
import { useState, useEffect } from "react";
import { Edit, Delete } from "@mui/icons-material";


const blankPreviousAddress = {
  previousAddress: "",
  previousCity: "",
  previousState: "",
  previousZip: "",
  previousLength: "",
}

const DqfpreviousAddresses = ({ handleNext, handleBack, values, handleChange, hasPreviousAddress, setHasPreviousAddress, handleAddAccidentRecord, handleRemoveFromNestedArray, handleChangeNestedArray, handleAddToNestedArray, handleUpdateNestedArray }) => {
  const [currAddressIndex, setCurrAddressIndex] = useState(0);
  const [editAddressMode, setEditAddressMode] = useState(false);
  const [addressModalOpen, setAddressModalOpen] = useState(false);
  const [addressRecordTemp, setAddressRecordTemp] = useState(blankPreviousAddress);



  const handleSaveAddress = () => {
    if (editAddressMode) {
      handleUpdateNestedArray('previousAddresses', addressRecordTemp, currAddressIndex);
    } else {
      handleAddToNestedArray('previousAddresses', addressRecordTemp);
    }

    setAddressModalOpen(false);
  }

  const hanldeCloseAddressModal = () => {
    setAddressModalOpen(false);
  }

  const handleOpenEditAddressModal = (index) => {
    setAddressRecordTemp(values.previousAddresses[index]);
    setEditAddressMode(true);
    setCurrAddressIndex(index);
    setAddressModalOpen(true);
  }

  const handleOpenAddAddressModal = () => {
    setAddressRecordTemp(blankPreviousAddress);
    setEditAddressMode(false);
    setCurrAddressIndex(values.previousAddresses.length);
    setAddressModalOpen(true);
  }

  const handleChangeNewAddress = e => { 
    let copyObj = { ...addressRecordTemp };
    copyObj[e.target.name] = e.target.value;
    setAddressRecordTemp(copyObj);
  }


  return (
      <>
        <Typography variant="h5" sx={{ textAlign: "left", mb: 2 }}>Next, Let's get your address information.</Typography>
        <Box sx={{ mt: 2, mb: 3 }}>

          <Typography variant="h6" sx={{ mb: 2 }}>Current Address</Typography>
          <Grid container spacing={3} sx={{ mb: 2 }}>
            <Grid item xs={12} >
              <TextField
                label="Address"
                name="currentAddress"
                variant="standard"
                value={values.currentAddress}
                onChange={handleChange("currentAddress")}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="City"
                name="currentCity"
                variant="standard"
                value={values.currentCity}
                onChange={handleChange("currentCity")}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextField
                label="State"
                name="previousAddressestate"
                variant="standard"
                value={values.currentState}
                onChange={handleChange("currentState")}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                label="Zip"
                name="currentZip"
                variant="standard"
                value={values.currentZip}
                onChange={handleChange("currentZip")}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <FormControl>
                <FormLabel id="three-years-label">Have you lived at this address for less than 3 years?</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="three-years-label"
                  name="hasPreviousAddress"
                  value={hasPreviousAddress}
                  onChange={(e) => {
                    setHasPreviousAddress(e.target.value)
                  }}
                >
                  <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
          {
            hasPreviousAddress === "yes" ? (
              <>
                <Typography variant="h6" sx={{ mt: 3, mb:1}}>Previous Addresses</Typography>
                <Typography variant="body" sx={{ mb: 2, display: "block" }}>All applicants must provide the addresses they lived at for the previous three years.</Typography>
                <Button variant="outlined" onClick={handleOpenAddAddressModal}>Add Address</Button></>
            ) : null
          }

          {values.previousAddresses.length > 0 && hasPreviousAddress==="yes" ? (
            <List sx={{border: "1px solid ", borderColor:"divider", mt: 2 }}>
              {values.previousAddresses.map((record, index) => (
                <div key={"previous-address-" + index}>
                  <ListItem
                    secondaryAction={
                      <>
                        <IconButton aria-label="edit" onClick={() => { handleOpenEditAddressModal(index) }}>
                          <Edit />
                        </IconButton>
                        <IconButton edge="end" aria-label="edit" onClick={() => { handleRemoveFromNestedArray("previousAddresses", index) }}>
                          <Delete />
                        </IconButton>
                      </>
                    }
                  ><ListItemText primary={<><Typography variant='body1'>{record.previousAddress}</Typography><Typography variant='body1'>{record.previousCity}, {record.previousState} {record.previousZip}</Typography></>}></ListItemText></ListItem>
                  {
                    index !== values.previousAddresses.length - 1 ? (<Divider variant="middle" />) : null
                  }
                </div>
              ))}
            </List>) : null}
          <FormModal
            openButtonLabel={"Add Previous Address"}
            title={editAddressMode ? "Edit Address" : "Add Address"}
            open={addressModalOpen}
            dialogActions={
              <>
                <Button onClick={handleSaveAddress}>Save</Button>
                <Button onClick={hanldeCloseAddressModal}>Cancel</Button>
              </>
            }
          >
            <Grid container spacing={3} sx={{ mb: 2 }}>
              <Grid item xs={12} >
                <TextField
                  label="Address"
                  name="previousAddress"
                  variant="standard"
                  value={addressRecordTemp.previousAddress}
                  onChange={handleChangeNewAddress}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="City"
                  name="previousCity"
                  variant="standard"
                  value={addressRecordTemp.previousCity}
                  onChange={handleChangeNewAddress}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField
                  label="State"
                  name="previousState"
                  variant="standard"
                  value={addressRecordTemp.previousState}
                  onChange={handleChangeNewAddress}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  label="Zip"
                  name="previousZip"
                  variant="standard"
                  value={addressRecordTemp.previousZip}
                  onChange={handleChangeNewAddress}
                  fullWidth
                />
              </Grid>
            </Grid>
          </FormModal>
        </Box>
      </>
  );
};

export default DqfpreviousAddresses;
