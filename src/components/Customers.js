import { useNavigate } from "react-router-dom";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
  Link,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { useEffect, useState } from "react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.05),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(0),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  color: theme.palette.text.primary,
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.text.primary,
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "50ch",
    },
  },
}));

const CustomerAccountsActionsBar = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  margin: theme.spacing(2, 0),
}));

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    async function getCustomers() {
      const response = await fetch("/customer");

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const customers = await response.json();
      setCustomers(customers);
    }

    getCustomers();
    return;
  }, [customers.length]);

  const handleSearchChange = () => {};

  let navigate = useNavigate();
  const handleCustomerClick = (event, id) => {
    navigate(`/customers/${id}`);
  };

  return (
    <Box sx={{ px: 5, py: 3 }}>
      <Typography variant="h4" component="h1">
        Customer Accounts
      </Typography>
      <CustomerAccountsActionsBar>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            onChange={handleSearchChange}
            placeholder="Search for Customer or Contact..."
            inputProps={{ "aria-label": "search for customer" }}
          />
        </Search>
        <Button variant="contained" startIcon={<AddIcon />}>
          Create Account
        </Button>
      </CustomerAccountsActionsBar>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Account</TableCell>
              <TableCell>DBA</TableCell>
              <TableCell>DOT#</TableCell>
              <TableCell>MC#</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Primary Contact</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((customer, index) => (
              <TableRow
                key={customer._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="customer">
                  <Link
                    underline="none"
                    onClick={(event) =>
                      handleCustomerClick(event, customer._id)
                    }
                    sx={{
                      "&:hover": {
                        cursor: "pointer",
                      },
                    }}
                  >
                    {customer.name}
                  </Link>
                </TableCell>
                <TableCell>{customer.dba}</TableCell>
                <TableCell>{customer.dot}</TableCell>
                <TableCell>{customer.mc}</TableCell>
                <TableCell>{customer.phone}</TableCell>
                <TableCell>{customer.primaryContact.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Customers;
