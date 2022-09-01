import { TextField, Grid, Typography } from "@mui/material";

import BasicDatePicker from "../BasicDatePicker";

const DqfPersonalInfo = ({ handleInputChange, handleDateChange, form }) => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Contact Information
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="phone"
            label="Phone"
            name="phone"
            variant="standard"
            value={form.phone}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="email"
            label="Email"
            name="email"
            variant="standard"
            value={form.email}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="address"
            label="Address"
            name="address"
            variant="standard"
            value={form.address}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="city"
            label="City"
            name="city"
            variant="standard"
            value={form.city}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            label="State"
            name="state"
            variant="standard"
            value={form.state}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="zip"
            label="Zip / Postal Code"
            name="zip"
            variant="standard"
            value={form.zip}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
      </Grid>
    </>
  );
};

export default DqfPersonalInfo;
