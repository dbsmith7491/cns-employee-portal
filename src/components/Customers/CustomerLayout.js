import { Grid, Typography, Button, Container } from "@mui/material";
import CustomerNav from "./CustomerNav";
import { Outlet, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { getCustomer } from '../../graphql/queries';

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
    async function getCustomerData() {
      const c = await API.graphql(graphqlOperation(getCustomer, { id: customerID }));
      setCustomer(c.data.getCustomer);
    }

    getCustomerData();

    return;
  }, [customerID]);

  return (
    <>
      {customer ? (     
        <Container maxWidth="lg" sx={{ mt: 3 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <CustomerNav accountName={customer.accountName} />
            </Grid>
            <Grid item xs={12} md={9}>
              
              <Outlet context={[customer, setCustomer]} />
            </Grid>
          </Grid>
        </Container>
      ) : (
        ""
      )}
    </>
  );
};

export default CustomerLayout;
