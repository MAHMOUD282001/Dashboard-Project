import React from "react";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import MuiDrawer from "@mui/material/Drawer";
import { Avatar, Tooltip, Typography, styled } from "@mui/material";
import { useTheme } from "@emotion/react";
import {
  BarChartOutlined,
  CalendarTodayOutlined,
  ContactsOutlined,
  HelpOutline,
  HomeOutlined,
  MapOutlined,
  PeopleOutline,
  PersonOutlined,
  PieChartOutline,
  ProductionQuantityLimits,
  ReceiptOutlined,
  TimelineOutlined,
} from "@mui/icons-material";

import avatar from "../imgs/avatar.png";
import { useLocation, useNavigate } from "react-router-dom";

import { grey } from "@mui/material/colors";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

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
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": {
      ...openedMixin(theme),
      right: 0, // Add this line to position the sidebar on the right
      left: "auto", // Add this line to position the sidebar on the right
    },
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": {
      ...closedMixin(theme),
      right: 0, // Add this line to position the sidebar on the right
      left: "auto", // Add this line to position the sidebar on the right
    },
  }),
}));

let firstArray = [
  {
    text: "الصفحه الرئيسيه",
    icon: <HomeOutlined />,
    path: "/",
  },

  {
    text: "الفواتير",
    icon: <ReceiptOutlined />,
    path: "/invoices",
  },

  {
    text: "المنتجات",
    icon: <ProductionQuantityLimits />,
    path: "/products",
  },
];

let secondArray = [
  {
    text: "Profile Form",
    icon: <PersonOutlined />,
    path: "/form",
  },
  {
    text: "Calender",
    icon: <CalendarTodayOutlined />,
    path: "/calender",
  },
  {
    text: "Faq Page",
    icon: <HelpOutline />,
    path: "/faq",
  },
];

let lastArray = [
  {
    text: "Bar Chart",
    icon: <BarChartOutlined />,
    path: "/bar",
  },
  {
    text: "Pie Chart",
    icon: <PieChartOutline />,
    path: "/pie",
  },
  {
    text: "Line Chart",
    icon: <TimelineOutlined />,
    path: "/line",
  },
  {
    text: "Geography Chart",
    icon: <MapOutlined />,
    path: "/geography",
  },
];

function Sidebar({ open, handleDrawerClose }) {
  const theme = useTheme();

  let navigate = useNavigate();

  let location = useLocation();

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>

      <Divider />

      <Avatar
        sx={{
          mx: "auto",
          my: 1,
          width: open ? 70 : 30,
          height: open ? 70 : 30,
          border: "2px solid gray",
          transition: ".3s",
        }}
        src={avatar}
        alt="Avatar"
      />

      <Typography
        align="center"
        sx={{ fontSize: open ? 20 : 0, transition: ".3s" }}
      >
        Mahmoud
      </Typography>

      <Typography
        align="center"
        sx={{
          fontSize: open ? 15 : 0,
          mb: 1,
          transition: ".3s",
          color: theme.palette.info.main,
        }}
      >
        Admin
      </Typography>

      <Divider />
      <List>
        {firstArray.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
            <Tooltip title={open ? "" : item.text} placement="left">
              <ListItemButton
                onClick={() => navigate(item.path)}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  bgcolor:
                    location.pathname === item.path
                      ? theme.palette.mode === "dark"
                        ? grey[700]
                        : grey[200]
                      : "",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {secondArray.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
            <Tooltip title={open ? "" : item.text} placement="left">
              <ListItemButton
                onClick={() => navigate(item.path)}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  bgcolor:
                    location.pathname === item.path
                      ? theme.palette.mode === "dark"
                        ? grey[700]
                        : grey[200]
                      : "",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {lastArray.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
            <Tooltip title={open ? "" : item.text} placement="left">
              <ListItemButton
                onClick={() => navigate(item.path)}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  bgcolor:
                    location.pathname === item.path
                      ? theme.palette.mode === "dark"
                        ? grey[700]
                        : grey[200]
                      : "",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;
