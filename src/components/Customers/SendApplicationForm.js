import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Paper,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent

} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import FormModal from "../FormModal";
import { useState } from "react";
import { API } from "aws-amplify";
import * as mutations from "../../graphql/mutations";


const SendApplicationForm = ({ customerID }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [form, setForm] = useState({
    customerID: customerID,
    firstName: "",
    lastName: "",
    email: "",
    status: "Awaiting Application Submission",
  });

  //handle field changes
  const handleChange = (e) => {
    let newForm = { ...form };
    newForm[e.target.name] = e.target.value;
    setForm(newForm);
  }

  const handleOpen = () => {
    setModalOpen(true);

  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await API.graphql({ query: mutations.createApplicant, variables: { input: form } });
      if (result) {
        setModalOpen(false);
        const applicantID = result.data.createApplicant.id;
        try {
          async function postData() {
            const apiName = 'sendemailses';
            const path = `/send/${applicantID}`;
            const myInit = {
              body: {
                "toEmails":[
                   `${form.email}`
                ],
                "templateName":"sendApplicationTemplate",
                "templateData": `{ \"name\":\"${form.firstName}\", \"applicationUrl\": \"https://www.google.com\" }`
             },
            };
            return await API.post(apiName, path, myInit);
          }

          postData();
        }
        catch (error) {
          console.log("error: " + error)
        }

      }
    }
    catch (error) {
      console.log("error: " + error.errors[0].message);
    }
  }

  return (
    <>
      <Button onClick={handleOpen} endIcon={<SendIcon />}>Send Application</Button>

      <Dialog open={modalOpen} onClose={handleClose} scroll="paper" maxWidth="sm" >
        <DialogTitle sx={{ borderBottom: "1px solid", borderColor: "divider" }}>Send Application Email</DialogTitle>
        <DialogContent dividers>
          <form id="send-email-form" onSubmit={handleSubmit}>
            <Grid container spacing={3} sx={{ mb: 3 }}>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  variant="standard"
                  value={form.firstName}
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" form="send-email-form">Send</Button>
        </DialogActions>
      </Dialog>

    </>
  )
};

export default SendApplicationForm;
