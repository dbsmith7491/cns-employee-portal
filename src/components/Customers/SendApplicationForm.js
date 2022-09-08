import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Paper,

} from "@mui/material";

import { useState } from "react";
import { API } from "aws-amplify";
import * as mutations from "../../graphql/mutations";


const SendApplicationForm = ({ customerID }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [form, setForm] = useState({
    customerID: customerID,
    firstName: null,
    lastName: null,
    email: null,
    status: "Awaiting Application Submission",
  });

  //handle field changes
  const handleChange = input => e => {
    let newForm = { ...form };
    newForm[input] = e.target.value;
    setForm(newForm);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  }

  return (
    <>
      <Typography variant="h5" sx={{ textAlign: "left", mb: 3 }}>We need a bit more information about you.</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              id="firstName"
              label="First Name"
              name="firstName"
              variant="standard"
              value={form.firstName}
              onChange={handleChange('firstName')}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="lastName"
              label="Last Name"
              name="lastName"
              variant="standard"
              value={form.lastName}
              onChange={handleChange('lastName')}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="email"
              label="Email"
              name="email"
              variant="standard"
              value={form.email}
              onChange={handleChange("email")}
              fullWidth
              required
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
        >Send</Button>
      </form>


    </>
  )
};

export default SendApplicationForm;
