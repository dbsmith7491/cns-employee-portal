import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Paper,
  Typography,
  Button
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const menuListItems = [
  
  {
    title: "Overview",
    link: "",
  },
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
  const [currentNav, setCurrentNav] = useState(window.sessionStorage.getItem("currentNav") ? window.sessionStorage.getItem("currentNav") : 0);

  let navigate = useNavigate();

  const handleNavClick = (event, index) => {
    navigate(menuListItems[index].link);
    setCurrentNav(index);
  };

  useEffect(() => {
    setCurrentNav(JSON.parse(window.sessionStorage.getItem("currentNav")));
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem("currentNav", currentNav);
  }, [currentNav]);



  return (
    <>
    <Paper variant="outlined">
      <Typography sx={{m: 2, fontSize: 18,}}>{accountName}</Typography>
      <Divider />
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
    </>

  );
};

export default CustomerNav;
