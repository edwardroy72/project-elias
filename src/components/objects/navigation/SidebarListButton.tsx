import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import { useNavigate } from "react-router-dom";
import { NavigationContext } from "../../App";
import React from "react";

interface SidebarListButtonProps {
  url: string;
  title: string;
}

const SidebarListButton = (props: SidebarListButtonProps) => {
  const navigate = useNavigate();
  const { open } = React.useContext(NavigationContext);
  const [isSelected, setIsSelected] = React.useState(false);

  React.useEffect(() => {
    window.location.pathname === props.url
      ? setIsSelected(true)
      : setIsSelected(false);
    if (isSelected) console.log(props.url);
  }, [window.location.pathname]);

  const buttonStyle = {
    pl: open ? "10px" : "4px",
    pr: open ? "10px" : "4px",
  };

  return (
    <ListItem sx={buttonStyle} key={props.title} disablePadding>
      <ListItemButton
        sx={{
          borderRadius: open ? "8px" : "16px",
          py: "0px",
          mb: '4px',
          backgroundColor: isSelected ? "primary.light" : "none",
        }}
        onClick={() => navigate(props.url)}
      >
        <ListItemIcon>{<MailIcon />}</ListItemIcon>
        <ListItemText primary={props.title} />
      </ListItemButton>
    </ListItem>
  );
};

export default SidebarListButton;
