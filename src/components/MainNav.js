import { Home, PeopleAlt, Assessment, Biotech } from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: grey[50],
  overflowX: "hidden",
  width: `calc(${theme.spacing(6)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(7)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  position: "absolute",
  left: 0,
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const menuListItems = [
  {
    title: "Home",
    icon: <Home />,
    link: "/",
    main: true,
  },
  {
    title: "Customers",
    icon: <PeopleAlt />,
    link: "/customers",
    main: true,
  },
  {
    title: "Tests & Orders",
    icon: <Biotech />,
    link: "/tests",
    main: true,
  },
  {
    title: "Reports",
    icon: <Assessment />,
    link: "/reports",
    main: true,
  },
];

const MainNavList = ({ selectedCustomer }) => {
  const [currentNav, setCurrentNav] = useState(0);
  const [open, setOpen] = useState(false);

  let navigate = useNavigate();

  const handleNavClick = (event, index) => {
    navigate(menuListItems[index].link);
    setCurrentNav(index);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
      onMouseEnter={handleDrawerOpen}
      onMouseLeave={handleDrawerClose}
      open={open}
    >
      <Toolbar />
      <List>
        {menuListItems.map((data, index) => (
          <ListItem key={data.title} disablePadding>
            <ListItemButton
              selected={currentNav === index}
              onClick={(event) => handleNavClick(event, index)}
            >
              <ListItemIcon>{data.icon}</ListItemIcon>
              <ListItemText primary={data.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default MainNavList;
