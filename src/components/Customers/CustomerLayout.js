import { Box, Typography, Button } from "@mui/material";
import CustomerNav from "./CustomerNav";
import { Outlet, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const CustomerLayout = () => {
  let { customerID } = useParams();
  const [customer, setCustomer] = useState();
  const navigate = useNavigate();

  //Navigate to DQF URL
  const handleDQFClick = () => {
    navigate(`/${customerID.toString()}/dqfform`);
  };

  //Fetch the customer Data
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/customer/${customerID.toString()}`);

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const customer = await response.json();
      if (!customer) {
        window.alert(`Record with id ${customerID} not found`);
        navigate("/");
        return;
      }

      setCustomer(customer);
    }

    fetchData();

    return;
  }, [customerID]);

  return (
    <>
      {customer ? (
        <>
          <Box
            sx={{
              pl: 2,
              pr: 5,
              pt: 2,
              pb: 1,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography type="h2" variant="h6">
              {customer.name}
            </Typography>
            <Button
              sx={{ marginLeft: "auto" }}
              variant="contained"
              onClick={handleDQFClick}
            >
              Start New Hire
            </Button>
          </Box>
          <Box sx={{ display: "flex" }}>
            <CustomerNav />
            <Box sx={{ px: 5, py: 3, flexGrow: 1 }}>
              <Outlet context={[customer, setCustomer]} />
            </Box>
          </Box>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default CustomerLayout;
