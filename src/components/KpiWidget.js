import { Typography, Box } from "@mui/material";
import DashboardWidget from "./DashboardWidget";

const KpiWidget = ({ value, label }) => {
  return (
    <DashboardWidget>
      <Box>
        <Typography type="label" variant="h2">
          {value}
        </Typography>
        <Typography type="label" variant="body2">
          {label}
        </Typography>
      </Box>
    </DashboardWidget>
  );
};

export default KpiWidget;
