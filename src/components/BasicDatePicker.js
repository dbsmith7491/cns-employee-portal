import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useEffect, useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

export default function BasicDatePicker({
  onChangeDate,
  value,
  label,
  variant = "standard",
  fullWidth = true,
  required = false,
}) {
  const [selectedDate, setSelectedDate] = useState(value);

  const handleDateChange = (value) => {
    setSelectedDate(value);
  };

  useEffect(() => {
    if (onChangeDate) {
      onChangeDate(selectedDate);
    }
  }, [selectedDate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        dateFormat="MM-DD-YYYY"
        label={label}
        value={value}
        onChange={(newValue) => {
          handleDateChange(newValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant={variant}
            fullWidth={fullWidth}
            value={selectedDate}
            required={required}
          />
        )}
      />
    </LocalizationProvider>
  );
}
