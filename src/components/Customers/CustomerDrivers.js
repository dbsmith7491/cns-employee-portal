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
  Divider,
} from "@mui/material";
import DashboardWidget from "../DashboardWidget";
import KpiWidget from "../KpiWidget";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const driversListData = [
  {
    name: "Tom Smith",
    documentNeeded: "Medical Card",
    expirationDate: "12/31/2019",
    qualificationStatus: "Not Qualified",
    driverStatus: "Current",
  },
  {
    name: "Tom Smith",
    documentNeeded: "Medical Card",
    expirationDate: "12/31/2019",
    qualificationStatus: "Not Qualified",
    driverStatus: "Current",
  },
  {
    name: "Tom Smith",
    documentNeeded: "Medical Card",
    expirationDate: "12/31/2019",
    qualificationStatus: "Not Qualified",
    driverStatus: "Current",
  },
];

const dTestKpiList = [
  {
    label: "Collection Completed",
    value: 8,
  },
  {
    label: "Expired",
    value: 32,
  },
  {
    label: "Lab Test Complete",
    value: 50,
  },
  {
    label: "Refused to Test",
    value: 2,
  },
  {
    label: "Scheduled",
    value: 38,
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

const CustomerDrivers = () => {
  return (
    <div>
      <Typography type="h2" variant="h5" sx={{ mb: 3 }}>
        Out of Compliance Drivers
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <DashboardWidget>
            <Doughnut data={data} />
          </DashboardWidget>
        </Grid>
        <Grid item xs={12} md={6}>
          <DashboardWidget>
            <Doughnut data={data} />
          </DashboardWidget>
        </Grid>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Driver Name</TableCell>
                  <TableCell>Document Needed</TableCell>
                  <TableCell>Expiration Date</TableCell>
                  <TableCell>Qualification Status</TableCell>
                  <TableCell>Driver Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {driversListData.map((driver) => (
                  <TableRow
                    key={driver.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="driver">
                      {driver.name}
                    </TableCell>
                    <TableCell>{driver.documentNeeded}</TableCell>
                    <TableCell>{driver.expirationDate}</TableCell>
                    <TableCell>{driver.qualificationStatus}</TableCell>
                    <TableCell>{driver.driverStatus}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      <Divider sx={{ my: 3 }} />
      <Typography type="h2" variant="h5" sx={{ mb: 3 }}>
        Drug Tests and Orders
      </Typography>
      <Grid container spacing={2}>
        {dTestKpiList.map((kpi) => (
          <Grid item xs={12} sm={3} md={2}>
            <KpiWidget label={kpi.label} value={kpi.value} />
          </Grid>
        ))}

        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Driver Name</TableCell>
                  <TableCell>Document Needed</TableCell>
                  <TableCell>Expiration Date</TableCell>
                  <TableCell>Qualification Status</TableCell>
                  <TableCell>Driver Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {driversListData.map((driver) => (
                  <TableRow
                    key={driver.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="driver">
                      {driver.name}
                    </TableCell>
                    <TableCell>{driver.documentNeeded}</TableCell>
                    <TableCell>{driver.expirationDate}</TableCell>
                    <TableCell>{driver.qualificationStatus}</TableCell>
                    <TableCell>{driver.driverStatus}</TableCell>
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

export default CustomerDrivers;
