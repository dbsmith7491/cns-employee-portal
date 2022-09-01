import {
  Paper,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import { styled } from "@mui/material/styles";

const SearchResults = styled(Paper)(({ theme }) => ({
  position: "absolute",
  left: "0px",
  zIndex: 3000,
  marginTop: theme.spacing(1),
  padding: theme.spacing(0),
  width: "100%",
}));

const SearchResultsPopdown = ({
  customerList,
  searchParam,
  setSelectedCustomer,
}) => {
  const handleNavClick = (e, index) => {
    setSelectedCustomer(customerListFiltered[index]);
  };

  const customerListFiltered = customerList.filter((customer) =>
    customer.name.toLowerCase().includes(searchParam.toLowerCase())
  );

  return (
    <SearchResults>
      <List>
        {customerListFiltered.map((customer, index) => (
          <ListItem key={customer.id} disablePadding>
            <ListItemButton onClick={(event) => handleNavClick(event, index)}>
              <ListItemText primary={customer.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </SearchResults>
  );
};

export default SearchResultsPopdown;
