import {
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  ListItemText,
  Paper,
  Box,
  IconButton,
  TextField,
  Grid,
  FormControl,
} from "@mui/material";
import { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import BasicDatePicker from "./BasicDatePicker";

const removeWhitespace = (str) => {
  return str.replaceAll(" ", "-");
};

const EditableListCard = ({ title, fields, children, updateForm }) => {
  const [editMode, setEditMode] = useState(false);
  const [fieldState, setFieldState] = useState(fields);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    setEditMode(false);
    updateForm(fieldState);
  };

  const handleChange = (e, index) => {
    let newFieldObj = structuredClone(fieldState);
    newFieldObj[index].value = e.target.value;
    setFieldState(newFieldObj);
  };

  return (
    <Paper sx={{ p: 3, my: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <Typography type="h2" variant="h5">
          Insurance Information
        </Typography>
        {editMode ? (
          <IconButton
            color="primary"
            aria-label="Save Section"
            sx={{ marginLeft: "auto" }}
            onClick={handleSaveClick}
          >
            <SaveIcon />
          </IconButton>
        ) : (
          <IconButton
            color="primary"
            aria-label="Edit Section"
            sx={{ marginLeft: "auto" }}
            onClick={handleEditClick}
          >
            <EditIcon />
          </IconButton>
        )}
      </Box>
      {editMode ? (
        <>
          {fieldState.map((item, index) => (
            <Form>
              <Grid key={item.label} container sx={{ py: 1, px: 0 }}>
                <Grid item xs={12} sm={6}>
                  <ListItemText
                    primary={item.label}
                    id={removeWhitespace(title) + "-label-" + index}
                  />
                </Grid>
                <Grid item xs={12} sm={6} sx={{}}>
                  {item.type == "text" ? (
                    <TextField
                      hiddenLabel
                      id={index}
                      onChange={(e) => {
                        handleChange(e, index);
                      }}
                      value={item.value}
                      sx={{ width: "100%" }}
                      variant="standard"
                    ></TextField>
                  ) : item.type == "date" ? (
                    <BasicDatePicker
                      id={index}
                      value={item.value}
                      onChange={(e) => {
                        handleChange(e, index);
                      }}
                      fullWidth
                      required
                    />
                  ) : item.type == "boolean" ? (
                    <FormControl>
                      <RadioGroup
                        aria-labelledby={
                          removeWhitespace(title) + "-label-" + index
                        }
                        name={
                          removeWhitespace(item.label) + "-radio-buttons-group"
                        }
                        onChange={(e) => {
                          handleChange(e, index);
                        }}
                        id={index}
                        value={item.value}
                        row
                      >
                        <FormControlLabel
                          value={true}
                          control={<Radio />}
                          label={item.options.true}
                        />
                        <FormControlLabel
                          value={false}
                          control={<Radio />}
                          label={item.options.false}
                        />
                      </RadioGroup>
                    </FormControl>
                  ) : (
                    <TextField
                      hiddenLabel
                      onChange={(e) => {
                        handleChange(e, index);
                      }}
                      value={item.value}
                      sx={{ width: "100%" }}
                      variant="standard"
                    ></TextField>
                  )}
                </Grid>
              </Grid>
            </Form>
          ))}
        </>
      ) : (
        <>
          {fieldState.map((item) => (
            <Grid key={item.label} container sx={{ py: 1, px: 0 }}>
              <Grid item xs={12} sm={6}>
                <ListItemText primary={item.label} />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                sx={{
                  textAlign: "right",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "end",
                }}
              >
                <Typography variant="body2">
                  {item.value ? item.value : "---"}
                </Typography>
              </Grid>
            </Grid>
          ))}
        </>
      )}
    </Paper>
  );
};

export default EditableListCard;
