import { Typography, List, ListItem, ListItemText, Grid } from "@mui/material";
import { format, parseISO } from "date-fns";

const DqfReview = ({ form, endorsementsLabels, restrictionsLabels }) => {
  const contactInformation = [
    {
      label: "Phone",
      value: form.phone,
    },
    {
      label: "Email",
      value: form.email,
    },
    {
      label: "Address",
      value: `${form.address}, \n ${form.city}, ${form.state} ${form.zip}`,
    },
  ];

  const licensingInformation = [
    {
      label: "First Name",
      value: form.firstName,
    },
    {
      label: "Last Name",
      value: form.lastName,
    },
    {
      label: "Date of Birth",
      value: format(new Date(form.dateOfBirth), "MM/dd/yyyy"),
    },
    {
      label: "SSN",
      value: form.ssn,
    },
    {
      label: "Driver's License Number",
      value: form.driversLicenseNumber,
    },
    {
      label: "Driver's License State",
      value: form.driversLicenseState,
    },
    {
      label: "Driver's License Type",
      value: form.driversLicenseType,
    },
    {
      label: "Expiration Date",
      value: format(new Date(form.driversLicenseExpirationDate), "MM/dd/yyyy"),
    },
    {
      label:
        "Have you been denied a license, prviledge, or permit to operate a motor vehicle or had a license, privledge or permit suspended or revoked?",
      value: form.licenseDenied,
    },
  ];

  const getLabeledArr = (obj, labelObj) => {
    const filteredArr = [
      ...Object.keys(obj).filter((el) => obj[el] === true),
    ].map((el) => {
      return labelObj[el];
    });

    return filteredArr;
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Licensing Information
      </Typography>
      <List disablePadding>
        {licensingInformation.map((data) => (
          <ListItem key={data.label} sx={{ py: 1, px: 0 }}>
            <Grid container sx={{ py: 1, px: 0 }}>
              <Grid item xs={12} sm={7}>
                <ListItemText primary={data.label} />
              </Grid>
              <Grid item xs={12} sm={5}>
                <Typography variant="body2" sx={{ textAlign: "right" }}>
                  {data.value}
                </Typography>
              </Grid>
            </Grid>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <Grid container sx={{ py: 1, px: 0 }}>
            <Grid item xs={12} sm={7}>
              <ListItemText primary={"Endorsements"} />
            </Grid>
            <Grid item xs={12} sm={5}>
              {getLabeledArr(form.endorsements, endorsementsLabels).map(
                (el) => (
                  <Typography
                    key={el}
                    variant="body2"
                    sx={{ textAlign: "right", mb: 1 }}
                  >
                    {el}
                  </Typography>
                )
              )}
            </Grid>
          </Grid>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <Grid container sx={{ py: 1, px: 0 }}>
            <Grid item xs={12} sm={7}>
              <ListItemText primary={"Restrictions"} />
            </Grid>
            <Grid item xs={12} sm={5}>
              {getLabeledArr(form.restrictions, restrictionsLabels).map(
                (el) => (
                  <Typography
                    key={el}
                    variant="body2"
                    sx={{ textAlign: "right", mb: 1 }}
                  >
                    {el}
                  </Typography>
                )
              )}
            </Grid>
          </Grid>
        </ListItem>
      </List>
      <Typography variant="h6" gutterBottom>
        Contact Information
      </Typography>
      <List disablePadding>
        {contactInformation.map((data) => (
          <ListItem key={data.label} sx={{ py: 1, px: 0 }}>
            <Grid container sx={{ py: 1, px: 0 }}>
              <Grid item xs={12} sm={7}>
                <ListItemText primary={data.label} />
              </Grid>
              <Grid item xs={12} sm={5}>
                <Typography variant="body2" sx={{ textAlign: "right" }}>
                  {data.value}
                </Typography>
              </Grid>
            </Grid>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default DqfReview;
