import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Link,
  Button
} from "@mui/material";

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { format, parseISO } from "date-fns";
import{ API, graphqlOperation} from "aws-amplify";
import * as queries from '../../graphql/queries';
import SendApplicationForm from "./SendApplicationForm";

const CustomerApplicants = () => {
  let { customerID } = useParams();
  const [customerApplicants, setCustomerApplicants] = useState([]);

  useEffect(() => {
    async function getCustomerApplicants() {
      const applicants = await API.graphql(
        graphqlOperation(queries.getCustomerApplicants, { id: customerID })
      );
      console.log(applicants.data.getCustomer.Applicants.items);
      setCustomerApplicants(applicants.data.getCustomer.Applicants.items);
    }

    getCustomerApplicants();
    return;
  }, [customerApplicants.length]);

  let navigate = useNavigate();

  const handleCaseClick = (event, id) => {
    navigate(`/applicant/${customerID.toString()}/${id.toString()}`);
  };

  return (
    <>
    
    <TableContainer component={Paper} variant="outlined">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Applicant Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Status</TableCell>
             {/* <TableCell>ID</TableCell> */}
              <TableCell>Creation Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customerApplicants.map((customerApplicant) => (
              <TableRow
                key={customerApplicant.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="case">
                  <Link
                    underline="none"
                    onClick={(event) =>
                      handleCaseClick(event, customerApplicant.id)
                    }
                    sx={{
                      "&:hover": {
                        cursor: "pointer",
                      },
                    }}
                  >
                    {customerApplicant.firstName + " " + customerApplicant.lastName}
                  </Link>
                </TableCell>
                <TableCell>{customerApplicant.type ? customerApplicant.type: "-"}</TableCell>
                <TableCell>{customerApplicant.status ? customerApplicant.status : "-"}</TableCell>
                {/*<TableCell>{customerApplicant.id}</TableCell>*/}
                <TableCell>
                  {format(new Date(customerApplicant.createdAt), "MM/dd/yyyy")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
      
  );
};

export default CustomerApplicants;
