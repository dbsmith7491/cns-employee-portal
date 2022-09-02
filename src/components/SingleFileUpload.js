import {
  Grid,
  Button,
  Box,
  FormGroup,
  FormLabel,
} from "@mui/material";
import UploadedFile from "./UploadedFile";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import Amplify, {API, graphqlOperation, Storage} from "aws-amplify";

import { useEffect, useState, useRef } from "react";

const SingleFileUpload = ({
  uploadButtonLabel,
  uploadedSubtitle,
  fieldLabel,
  handleFileUpload
}) => {
  const fileInput = useRef();
  const [fileUploaded, setFileUploaded] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState();
  const [fileData, setFileData] = useState({});

  const addFile = () => {
    const file = fileInput.current.files[0];
    setFileData(file);
    setUploadedFileName(file.name);
    setFileUploaded(true);
    handleFileUpload(file);
  }

  const removeFile = () => {
    fileInput.value = "";
    setFileUploaded(false);
  }

  return (
    <Box sx={{ mb: 2, my: fileUploaded ? 0 : 2 }}>
      {fileUploaded ? (
        <UploadedFile
          name={uploadedFileName}
          subtitle={uploadedSubtitle}
          handleRemove={removeFile}
        />
      ) : (
        <FormGroup>
          {fieldLabel ? (<FormLabel sx={{ mb: 1 }}>{fieldLabel}</FormLabel>) : null}
          <Button
            variant="contained"
            component="label"
            startIcon={<FileUploadIcon />}
            sx={{mb:2, width: "fit-content"}}
          >
            {uploadButtonLabel}
            <input
              hidden
              accept="image/*"
              type="file"
              onChange={(e) => {
                addFile(e);
              }}
              ref={fileInput}
            />
          </Button>
        </FormGroup>

      )}
    </Box>
  );
};

export default SingleFileUpload;
