import { React } from "react";
import { Box, Toolbar, CssBaseline } from "@mui/material";

import MainNav from "./MainNav";
import CustomAppBar from "./CustomAppBar";

const DashboardLayout = ({
  customerList,
  selectedCustomer,
  setSelectedCustomer,
  children,
}) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <CustomAppBar
        customerList={customerList}
        selectedCustomer={selectedCustomer}
        setSelectedCustomer={setSelectedCustomer}
      />
      <MainNav selectedCustomer={selectedCustomer} />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 0, ml: 7 }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default DashboardLayout;
