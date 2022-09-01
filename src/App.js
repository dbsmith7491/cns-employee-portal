import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import DashboardLayout from "./components/DashboardLayout";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Customers from "./components/Customers";
import CustomerLayout from "./components/Customers/CustomerLayout";
import CustomerOverview from "./components/Customers/CustomerOverview";
import CustomerCases from "./components/Customers/CustomerCases";
import CustomerBilling from "./components/Customers/CustomerBilling";
import CustomerVehicles from "./components/Customers/CustomerVehicles";
import CustomerDocuments from "./components/Customers/CustomerDocuments";
import CustomerDrivers from "./components/Customers/CustomerDrivers";
import CustomerCompliance from "./components/Customers/CustomerCompliance";
import CustomerCase from "./components/Customers/CustomerCase";

import Tests from "./components/Tests";
import Reports from "./components/Reports";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import DqfForm from "./components/DQFNewHireForm/DqfForm";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

function App() {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [light, setLight] = useState(true);

  const theme = useTheme();

  const themeLight = createTheme({
    palette: {
      primary: {
        main: "#005a7b",
      },
      secondary: {
        main: "#F47A20",
      },
      background: {
        default: "#fafafa",
      },
    },
  });

  const themeDark = createTheme({
    palette: {
      background: {
        default: grey[50],
      },
      text: {
        primary: "#ffffff",
      },
    },
  });

  const customerListData = [
    {
      id: 0,
      dot: 12342,
      mc: 123456,
      name: "Really Great Trucking LLC",
      phone: "999-111-2222",
      primaryContact: "Devon Ropp",
    },
    {
      id: 1,
      dot: 43232,
      name: "Truckers Inc.",
      primaryContact: "James Mandrake",
    },
    {
      id: 2,
      dot: 52311,
      name: "Fed Ex",
      phone: "888-111-2222",
      primaryContact: "Harvey Cruise",
    },
    {
      id: 3,
      dot: 92311,
      mc: 123456,
      name: "Amazon",
      primaryContact: "Len Smith",
    },
    {
      id: 4,
      dot: 92311,
      name: "Truckers LLC",
      primaryContact: "Shray Vispanu",
    },
    {
      id: 5,
      dot: 92319,
      mc: 123456,
      name: "Truck Nation",
      primaryContact: "Scram Richards",
    },
    {
      id: 6,
      dot: 90011,
      mc: 123456,
      name: "DeliveryTech",
      primaryContact: "Randall Bearsman",
    },
    { id: 7, dot: 14319, name: "Uhaul", primaryContact: "Steve Wentworth" },
    {
      id: 8,
      dot: 87309,
      name: "United Delivery",
      primaryContact: "Phil Rothschild",
    },
    { id: 9, dot: 92323, name: "USPS", primaryContact: "Michael Apostopulus" },
  ];

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider theme={light ? themeLight : themeDark}>
        <div className="App">
          <DashboardLayout
            selectedCustomer={selectedCustomer}
            setSelectedCustomer={setSelectedCustomer}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="customers" element={<Customers />} />
              <Route path="/customers/:customerID" element={<CustomerLayout />}>
                <Route index element={<CustomerOverview />} />
                <Route path="cases" element={<CustomerCases />} />
                <Route path="drivers" element={<CustomerDrivers />} />
                <Route path="vehicles" element={<CustomerVehicles />} />
                <Route path="documents" element={<CustomerDocuments />} />
                <Route path="billing" element={<CustomerBilling />} />
                <Route path="compliance" element={<CustomerCompliance />} />
              </Route>
              <Route
                path="/cases/:customerID/:caseID"
                element={<CustomerCase />}
              />
              <Route path="/:customerID/dqfform" element={<DqfForm />} />
              <Route path="tests" element={<Tests />} />
              <Route path="reports" element={<Reports />} />
            </Routes>
          </DashboardLayout>
        </div>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
