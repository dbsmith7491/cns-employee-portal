import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const DashboardWidgetStyled = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
}));

const DashboardWidget = ({ children }) => {
  return <DashboardWidgetStyled>{children}</DashboardWidgetStyled>;
};

export default DashboardWidget;
