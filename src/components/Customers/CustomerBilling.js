import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Grid,
} from "@mui/material";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const servicesListData = [
  {
    service: "Tom Smith",
    startDate: "12/31/2019",
    clientContact: "Johnny Appleseed",
    accountOwner: "John Smith",
  },
  {
    service: "Tom Smith",
    startDate: "12/31/2019",
    clientContact: "Johnny Appleseed",
    accountOwner: "John Smith",
  },
  {
    service: "Tom Smith",
    startDate: "12/31/2019",
    clientContact: "Johnny Appleseed",
    accountOwner: "John Smith",
  },
];

export const data = {
  labels: ["Red", "Yellow", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3],
      backgroundColor: [
        "rgba(255, 99, 132)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: "#FFFFFF",
      borderWidth: 1,
    },
  ],
};

const CustomerBilling = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography type="h2" variant="h5" sx={{ mb: 1 }}>
            Services
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Service</TableCell>
                  <TableCell>Start Date</TableCell>
                  <TableCell>Client Contact</TableCell>
                  <TableCell>Account Owner</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {servicesListData.map((service) => (
                  <TableRow
                    key={service.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="service">
                      {service.service}
                    </TableCell>
                    <TableCell>{service.startDate}</TableCell>
                    <TableCell>{service.clientContact}</TableCell>
                    <TableCell>{service.accountOwner}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
};

export default CustomerBilling;
