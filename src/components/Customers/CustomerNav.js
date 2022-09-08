import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Paper,
  Typography
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

const menuListItems = [
  /*
  {
    title: "Information",
    link: "",
  },*/
  {
    title: "Applicants",
    link: "applicants",
  },
  
  {
    title: "Drivers",
    link: "drivers",
  },
  {
    title: "Vehicles",
    link: "vehicles",
  },

  {
    title: "Documents",
    link: "documents",
  },
  {
    title: "Billing",
    link: "billing",
  },
  {
    title: "Compliance",
    link: "compliance",
  },
];

const CustomerNav = ({accountName}) => {
  const [currentNav, setCurrentNav] = useState(0);

  let navigate = useNavigate();

  const handleNavClick = (event, index) => {
    navigate(menuListItems[index].link);
    setCurrentNav(index);
  };

  return (

    <Paper variant="outlined">
      <Typography sx={{mx: 2, mt: 2, mb: 1, fontSize: 18, fontWeight: "medium"}}>{accountName}</Typography>
      <List dense>
        {menuListItems.map((data, index) => (
          <ListItem key={data.title} disablePadding>
            <ListItemButton
              selected={currentNav === index}
              onClick={(event) => handleNavClick(event, index)}
            >
              <ListItemText primary={data.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Paper>

  );
};

export default CustomerNav;
