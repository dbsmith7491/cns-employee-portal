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
  DialogContent,
  Alert

} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import { API } from "aws-amplify";
import * as mutations from "../../graphql/mutations";
import { EnvironmentCredentials } from "aws-sdk";


const SendApplicationForm = ({ customerID }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [form, setForm] = useState({
    customerID: customerID,
    firstName: "",
    lastName: "",
    email: "",
    status: "Not Submitted",
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
    async function postData() {
      const apiName = 'sendemailses';
      const path = '/createapplicant';
      const myInit = {
        body: {
          "customerID_string": customerID,
          "given_name": form.firstName,
          "family_name": form.lastName,
          "email": form.email
        },
      };

      return await API.post(apiName, path, myInit);
    }

    postData();

    /*
    try{
      async function postData() {
        const apiName = 'sendemailses';
        const path = `/send/${applicantID}`;
        const myInit = {
          body: {
            "toEmails":[
               `${form.email}`
            ],
            "templateName":"sendApplicationTemplate",
            "templateData": `{ \"name\":\"${form.firstName}\", \"applicationUrl\": \"${applicationUrl}\" }`
         },
        };
        return await API.post(apiName, path, myInit);
      }
      postData();
    }
    catch(error){
      console.log("error:" + error);
    }
    /*
    try {
      const result = await API.graphql({ query: mutations.createApplicant, variables: { input: form } });
      if (result) {
        setModalOpen(false);
        const applicantID = result.data.createApplicant.id;
        const applicationUrl =  `https://main.d2fc3d44pybhlw.amplifyapp.com/?id=${applicantID}`;
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
                "templateData": `{ \"name\":\"${form.firstName}\", \"applicationUrl\": \"${applicationUrl}\" }`
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
    }*/
  }

  return (
    <>
      <Button onClick={handleOpen} startIcon={<AddIcon />}>New Applicant</Button>

      <Dialog open={modalOpen} onClose={handleClose} scroll="paper" maxWidth="sm" >
        <DialogTitle sx={{ borderBottom: "1px solid", borderColor: "divider" }}>Create Applicant</DialogTitle>
        <DialogContent dividers>
          <Alert severity="info">Completing this step will trigger an email communication to the new applicant with a link and code to access the applicaiton.</Alert>
          <form id="send-email-form" onSubmit={handleSubmit}>
            <Grid container spacing={3} sx={{ mb: 3, mt: 1 }}>
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
          <Button type="submit" form="send-email-form">Create</Button>
        </DialogActions>
      </Dialog>

    </>
  )
};

export default SendApplicationForm;
