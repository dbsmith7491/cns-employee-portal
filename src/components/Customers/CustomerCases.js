import {
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Link,
} from "@mui/material";

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { format, parseISO } from "date-fns";

const CustomerCases = () => {
  let { customerID } = useParams();
  const [customerCases, setCustomerCases] = useState([]);

  useEffect(() => {
    async function getCustomerCases() {
      const response = await fetch(`/customer/${customerID.toString()}/cases`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const caseList = await response.json();
      setCustomerCases(caseList);
    }

    getCustomerCases();
    return;
  }, [customerCases.length]);

  let navigate = useNavigate();

  const handleCaseClick = (event, id) => {
    navigate(`/cases/${customerID.toString()}/${id.toString()}`);
  };

  return (
    <Grid item xs={12}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Driver Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Case ID</TableCell>
              <TableCell>Creation Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customerCases.map((customerCase) => (
              <TableRow
                key={customerCase._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="case">
                  <Link
                    underline="none"
                    onClick={(event) =>
                      handleCaseClick(event, customerCase._id)
                    }
                    sx={{
                      "&:hover": {
                        cursor: "pointer",
                      },
                    }}
                  >
                    {customerCase.driverName}
                  </Link>
                </TableCell>
                <TableCell>{customerCase.type}</TableCell>
                <TableCell>{customerCase.status}</TableCell>
                <TableCell>{customerCase._id}</TableCell>
                <TableCell>
                  {format(new Date(customerCase.creation_date), "MM/dd/yyyy")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default CustomerCases;
