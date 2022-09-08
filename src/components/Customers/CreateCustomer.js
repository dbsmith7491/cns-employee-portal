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
  
  

  
  const blankCustomerRecord = {
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
  
  
  const CreateCustomer = () => {
    const [customer, setCustomer] = useState(blankCustomerRecord);
    
    const handleChange = () =>{
        console.log("he")
    }

    return (
      <>
        <Typography variant="h5" sx={{ textAlign: "left", mb: 3 }}>Create a New Customer</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="firstName"
              label="First Name"
              name="firstName"
              variant="standard"
            
              onChange={handleChange('firstName')}
              fullWidth
              required
            />
          </Grid>
          </Grid> 
      </>
    )
  }
  
  export default CreateCustomer;
  