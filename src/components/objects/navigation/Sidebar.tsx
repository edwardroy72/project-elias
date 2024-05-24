import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ListItemText from "@mui/material/ListItemText";
import PinIcon from "../../../assets/pin-icon.svg";
import Switch from "@mui/material/Switch";
import { CSSObject, styled, Theme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import { DrawerProps, SidebarProps } from "../../../types";
import { NavigationContext } from "../../App";

const openedMixin = (theme: Theme, drawerWidth: number): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
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
  shouldForwardProp: (prop) => prop !== "open" && prop !== "drawerWidth",
})<DrawerProps>(({ theme, drawerWidth, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme, drawerWidth),
    "& .MuiDrawer-paper": openedMixin(theme, drawerWidth),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const displaySettings = (open: boolean) => {
  return open ? "block" : "none";
};

const buttonStyle = { color: "white" };

const pinnedTreesHeadingStyle = {
  textAlign: "center",
  fontWeight: "bold",
};

export default function Sidebar(props: SidebarProps) {
  const { drawerWidth, open, setOpen } = React.useContext(NavigationContext);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Drawer
      variant="permanent"
      PaperProps={{
        sx: {
          backgroundColor: "#282828",
          color: "white",
        },
      }}
      open={open}
      drawerWidth={drawerWidth}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        {open && <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>}
      </Toolbar>
      <List>
        {["Tree View", "Actions"].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 36,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                py: 0,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {index % 2 === 0 ? (
                  <InboxIcon style={buttonStyle} />
                ) : (
                  <MailIcon style={buttonStyle} />
                )}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider
        sx={{ mx: open ? "20px" : "10px", bgcolor: "white", my: "5px" }}
      />
      <Typography sx={pinnedTreesHeadingStyle} display={displaySettings(open)}>
        <img
          src={PinIcon}
          alt="Pin Icon"
          style={{ width: "24px", height: "24px", filter: "invert(10 0%)" }}
        />
        Pinned Trees
      </Typography>
      <List>
        {["Life", "University", "Social"].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 36,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                py: 0,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {index % 2 === 0 ? (
                  <InboxIcon style={buttonStyle} />
                ) : (
                  <MailIcon style={buttonStyle} />
                )}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider
        sx={{ mx: open ? "20px" : "10px", bgcolor: "white", my: "5px" }}
      />
      <Typography sx={pinnedTreesHeadingStyle} display={displaySettings(open)}>
        Recent Trees
      </Typography>
      <List>
        {["Life", "University", "Social"].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 36,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                py: 0,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {index % 2 === 0 ? (
                  <InboxIcon style={buttonStyle} />
                ) : (
                  <MailIcon style={buttonStyle} />
                )}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider
        sx={{ mx: open ? "20px" : "10px", bgcolor: "white", my: "5px" }}
      />
      <Box id="dark-mode-selection" sx={{ mx: "auto", mt: "10px" }}>
        <Typography display={displaySettings(open)}>Night Mode</Typography>
        <Switch
          aria-label="Toggle Dark Mode"
          defaultChecked
          color="default"
          sx={{ mx: open ? "5px" : "0px" }}
          onChange={(_e, checked) => {
            props.setDarkMode(checked);
            console.log(`Dark Mode ${checked}`);
          }}
        />
      </Box>
    </Drawer>
  );
}
