import {
  TextField,
  Grid,
  Button,
  Typography,
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
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  CircularProgress,
} from "@mui/material";
import UploadedFile from "./UploadedFile";
import FileUploadIcon from "@mui/icons-material/FileUpload";

import { useEffect, useState, useRef } from "react";
import { data } from "./Customers/CustomerBilling";

const LicenseUpload = ({
  bothSides = true,
  updateLicenseDataFront,
  updateLicenseDataBack,
}) => {
  const licenseInputFront = useRef();
  const licenseInputBack = useRef();
  const [currentlyParsing, setCurrentlyParsing] = useState(false);
  const [frontUploaded, setFrontUploaded] = useState(false);
  const [backUploaded, setBackUploaded] = useState(false);
  const [frontFieldParse, setFrontFieldParse] = useState();
  const [backFieldParse, setBackFieldParse] = useState();
  const [uploadedFileNameBack, setUploadedFileNameBack] = useState();
  const [uploadedFileNameFront, setUploadedFileNameFront] = useState();

  async function licenseUploadFront() {
    const file = licenseInputFront.current.files[0];
    setUploadedFileNameFront(file.name);
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setCurrentlyParsing(true);
      var raw = JSON.stringify({ image: reader.result });
      var requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "ApiKey dbsmith7491@gmail.com:5891ebb3-d6dc-44dc-a314-561252e5365c",
        },
        body: raw,
        redirect: "follow",
      };
      fetch("https://base64.ai/api/scan", requestOptions)
        .then((response) => response.text())
        .then((result) => {
          setFrontFieldParse(result);
          setCurrentlyParsing(false);
          setFrontUploaded(true);
        })
        .catch((error) => console.log("error", error));
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  }

  function licenseUploadBack() {
    const file = licenseInputBack.current.files[0];
    setUploadedFileNameBack(file.name);
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setCurrentlyParsing(true);
      var raw = JSON.stringify({ image: reader.result });
      var requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "ApiKey dbsmith7491@gmail.com:5891ebb3-d6dc-44dc-a314-561252e5365c",
        },
        body: raw,
        redirect: "follow",
      };
      fetch("https://base64.ai/api/scan", requestOptions)
        .then((response) => response.text())
        .then((result) => {
          setBackFieldParse(result);
          setCurrentlyParsing(false);
          setBackUploaded(true);
        })
        .catch((error) => console.log("error", error));
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  }

  useEffect(() => {
    console.log(currentlyParsing);
    if (frontFieldParse) {
      const dataExtracted = JSON.parse(frontFieldParse)[0].fields;

      updateLicenseDataFront({
        firstName: dataExtracted.givenName.value.split(" ")[0],
        lastName: dataExtracted.familyName.value,
        licenseNumber: dataExtracted.licenseNumber.value,
        state: dataExtracted.stateCode.value,
        dateOfBirth: new Date(dataExtracted.dateOfBirth.value),
        licenseType:
          dataExtracted.driverLicenseType.value === "Standard"
            ? "Non-CDL Driver"
            : "",
        expirationDate: new Date(dataExtracted.expirationDate.value),
      });
    }

    if (backFieldParse) {
      const dataExtracted = JSON.parse(backFieldParse)[0].fields;
      console.log(dataExtracted);
      updateLicenseDataBack({
        endorsements: dataExtracted.givenName.value,
        restrictions: dataExtracted.endorsements.value,
        address: dataExtracted.streetAddress.value,
        zip: dataExtracted.zipCode.value.split("-")[0],
        city: dataExtracted.city.value,
        state: dataExtracted.stateCode.value,
      });
    }
  }, [currentlyParsing, frontFieldParse]);

  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="h6" sx={{ mb: 1 }}>
        Upload Driver's License
      </Typography>
      <Grid container>
        <Grid item xs={12} sx={{ my: frontUploaded ? 0 : 1 }}>
          {frontUploaded ? (
            <UploadedFile
              name={uploadedFileNameFront}
              subtitle={"Front of License"}
              borderBottom={backUploaded ? 0 : 1}
            />
          ) : (
            <Button
              variant="contained"
              component="label"
              startIcon={<FileUploadIcon />}
            >
              Upload Front
              <input
                hidden
                accept="image/*"
                type="file"
                onChange={(e) => {
                  licenseUploadFront();
                }}
                ref={licenseInputFront}
              />
            </Button>
          )}
        </Grid>
        <Grid item xs={12} sx={{ my: backUploaded ? 0 : 1 }}>
          {backUploaded ? (
            <UploadedFile
              name={uploadedFileNameBack}
              subtitle={"Back of License"}
              borderBottom={1}
            />
          ) : (
            <Button
              variant="contained"
              component="label"
              startIcon={<FileUploadIcon />}
            >
              Upload Back
              <input
                hidden
                accept="image/*"
                type="file"
                onChange={(e) => {
                  licenseUploadBack();
                }}
                ref={licenseInputBack}
              />
            </Button>
          )}
        </Grid>
      </Grid>

      <Dialog open={currentlyParsing}>
        <DialogTitle>Extracting Driver's License Data...</DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress size={60} thickness={3.8} />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default LicenseUpload;
