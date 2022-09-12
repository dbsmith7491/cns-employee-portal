import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import DashboardLayout from "./components/DashboardLayout";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CustomerSearch from "./components/Customers/CustomerSearch";
import CustomerLayout from "./components/Customers/CustomerLayout";
import CustomerOverview from "./components/Customers/CustomerOverview";
import CustomerCases from "./components/Customers/CustomerCases";
import CustomerBilling from "./components/Customers/CustomerBilling";
import CustomerVehicles from "./components/Customers/CustomerVehicles";
import CustomerDocuments from "./components/Customers/CustomerDocuments";
import CustomerDrivers from "./components/Customers/CustomerDrivers";
import CustomerCompliance from "./components/Customers/CustomerCompliance";
import CustomerCase from "./components/Customers/CustomerCase";
import CreateCustomer from "./components/Customers/CreateCustomer";
import CustomerApplicants from "./components/Customers/CustomerApplicants";
import SendApplicationForm from "./components/Customers/SendApplicationForm";
import Tests from "./components/Tests";
import Reports from "./components/Reports";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import {Amplify, API, graphqlOperation} from "aws-amplify";
import config from './aws-exports';
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";


Amplify.configure(config);

function App({signOut}) {
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
        default: grey[50],
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



  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider theme={light ? themeLight : themeDark}>
        <View className="App">
          <DashboardLayout
            selectedCustomer={selectedCustomer}
            setSelectedCustomer={setSelectedCustomer}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="customers" element={<CustomerSearch />} />
              <Route path="/customers/createcustomer" element={<CreateCustomer />} />
              <Route path="/customers/:customerID" element={<CustomerLayout />}>
              <Route index element={<CustomerOverview />} />
                <Route path="applicants" element={<CustomerApplicants />}>
                  <Route path="emailapplication" element={<SendApplicationForm />} />
                </Route>
                <Route path="applicants" element={<CustomerApplicants />} />
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
              
              <Route path="tests" element={<Tests />} />
              <Route path="reports" element={<Reports />} />
            </Routes>
          </DashboardLayout>
        </View>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default withAuthenticator(App);
