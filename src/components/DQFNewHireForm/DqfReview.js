import { Typography, List, ListItem, ListItemText, Grid, Button, Box } from "@mui/material";
import ReviewCard from "../ReviewCard";
import { format, parseISO } from "date-fns";

const DqfReview = ({ submitForm, values, handleBack, setStep}) => {
  const addWhitespace = (str) => {
    str = str.replaceAll("_", " ")
    return str
  };
  const contactInformation = [
    {
      label: "Phone",
      value: values.phone,
    },
    {
      label: "email",
      value: values.email,
    },
    {
      label: "Address",
      value: `${values.address}, \n ${values.city}, ${values.state} ${values.zip}`,
    },
  ];

  const licensingInformation = [
    {
      label: "Name",
      value: values.firstName + " " + values.lastName,
    },
    {
      label: "Date of Birth",
      value: values.birthDate ? format(new Date(values.birthDate), "MM/dd/yyyy") : "",
    },
    {
      label: "Driver's License",
      value: <>
        <div><small>Num: </small>{values.driversLicenseNumber}</div>
        <div><small>Type: </small>{addWhitespace(values.currentLicenseType)}, {values.driversLicenseState}</div>
        <div><small>Exp: </small>{values.licenseExpiration ? (format(new Date(values.licenseExpiration), "MM/dd/yyyy")) : ("")}</div>
        <div><small>Edorsements: </small>{[
                    values.endorsementNone ? "None" : "",
                    values.endorsementT ? "T" : "",
                    values.endorsementP ? "P" : "",
                    values.endorsementN ? "N" : "",
                    values.endorsementH ? "H" : "",
                    values.endorsementX ? "X" : "",
                    values.endorsementS ? "S" : ""
                ]
                    .filter((el) => el !== "")
                    .join(" , ")}
        </div>
        <div><small>Restrictions: </small>{[
                    values.restrictionNone ? "None" : "",
                    values.restrictionL ? "L" : "",
                    values.restrictionZ ? "Z" : "",
                    values.restrictionE ? "E" : "",
                    values.restrictionO ? "O" : "",
                    values.restrictionM ? "M" : "",
                    values.restrictionN ? "N" : "",
                    values.restrictionV ? "V" : ""
                ]
                    .filter((el) => el !== "")
                    .join(" , ")}
        </div>
        </>,
        
    },
    {
      label: "Additional Licenses/Permits",
      value: values.qualifications.length > 0 ? ("Show stuff"):("None"),
    },
    {
      label:
        "Have you been denied a license, prviledge, or permit to operate a motor vehicle or had a license, privledge or permit suspended or revoked?",
      value: values.licenseRevocation,
    },
  ];

  const getLabeledArr = (obj, labelObj) => {
    const filteredArr = [
      ...Object.keys(obj).filter((el) => obj[el] === true),
    ].map((el) => {
      return labelObj[el];
    });

    return filteredArr;
  }



  return (
    <>
      <Typography variant="h5" gutterBottom>
        Last step! Does everything look okay?
      </Typography>
      <Typography>

      </Typography>
      <ReviewCard title="Licensing" handleEditClick={(e)=>{setStep(0)}}>
        {licensingInformation.map((data, index) => (
          <Grid key={""} container sx={{ pb: 2, px: 0 }} columnSpacing={3}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" sx={{ fontWeight: "500" }}>{data.label}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={{ textAlign: "left" }}>
                {data.value}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </ReviewCard>
      {
        /*
        <ListItem sx={{ py: 1, px: 0 }}>
          <Grid container sx={{ py: 1, px: 0 }}>
            <Grid item xs={12} sm={7}>
              <ListItemText primary={"Endorsements"} />
            </Grid>
            <Grid item xs={12} sm={5}>
              {getLabeledArr(values.endorsements, endorsementsLabels).map(
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
              {getLabeledArr(values.restrictions, restrictionsLabels).map(
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

        ))}*/}




    </>
  );
};

export default DqfReview;
