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
  Button,
} from "@mui/material";
import { useState, useRef } from "react";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import BasicDatePicker from "./BasicDatePicker";
import { format, parseISO } from "date-fns";

const removeWhitespace = (str) => {
  return str.replaceAll(" ", "-");
};

const EditableListCard = ({ title, fields, children, updateForm }) => {
  const [editMode, setEditMode] = useState(false);
  const [fieldState, setFieldState] = useState(fields);

  const saveButtonHidden = useRef();

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = (e) => {
    saveButtonHidden.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
          {title}
        </Typography>
        {editMode ? (
          <IconButton
            color="primary"
            aria-label="Save Section"
            sx={{ marginLeft: "auto" }}
            type="submit"
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
          <form onSubmit={handleSubmit}>
            {fieldState.map((item, index) => (
              <Grid key={item.label} container sx={{ py: 1, px: 0 }}>
                <Grid item xs={12} sm={6}>
                  <ListItemText
                    primary={item.label}
                    id={removeWhitespace(title) + "-label-" + index}
                  />
                </Grid>
                <Grid item xs={12} sm={6} sx={{}}>
                  {item.type === "text" ? (
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
                  ) : item.type === "date" ? (
                    <BasicDatePicker
                      id={index}
                      value={item.value}
                      onChange={(e) => {
                        handleChange(e, index);
                      }}
                      fullWidth
                      required
                    />
                  ) : item.type === "boolean" ? (
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
            ))}
            <Button ref={saveButtonHidden} type="submit"></Button>
          </form>
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
                  {item.value
                    ? item.type === "date"
                      ? format(new Date(item.value), "MM/dd/yyyy")
                      : item.value
                    : "---"}
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
