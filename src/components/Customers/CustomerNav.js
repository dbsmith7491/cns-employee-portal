import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

const menuListItems = [
  {
    title: "Information",
    link: "",
  },
  {
    title: "Cases",
    link: "cases",
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

const CustomerNav = () => {
  const [currentNav, setCurrentNav] = useState(0);

  let navigate = useNavigate();

  const handleNavClick = (event, index) => {
    navigate(menuListItems[index].link);
    setCurrentNav(index);
  };

  return (
    <Box sx={{ width: "200px", flexShrink: 0 }}>
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
    </Box>
  );
};

export default CustomerNav;
