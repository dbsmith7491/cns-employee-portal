import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Link,
  Button,
  Typography,
  Divider,
  Box,
  Grid,
  TextField
} from "@mui/material";

import { useState, useEffect } from "react";
import { useNavigate, useParams, Outlet } from "react-router";
import { format, parseISO } from "date-fns";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from '../../graphql/queries';
import FormModal from "../FormModal";
import SendApplicationForm from "./SendApplicationForm";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const CustomerApplicants = () => {
  let { customerID } = useParams();
  const [customerApplicants, setCustomerApplicants] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    async function getCustomerApplicants() {
      const applicants = await API.graphql(
        graphqlOperation(queries.getCustomer, { id: customerID })
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
        <Box sx={{ display: "flex", justifyContent: "space-between", m: 2, mt: 3 }}>
          <Typography variant="h5" sx={{flexGrow: 1}}>Applicants</Typography>
          <SendApplicationForm customerID={customerID}/>
        </Box>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Applicant Name</TableCell>
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
