import { List, Divider, Typography } from "@mui/material";
import React from "react";
import SidebarListButton from "./SidebarListButton";
import { NavigationContext } from "../../App";

interface SidebarListProps {
  heading: string;
  children?: React.ReactNode;
}

const SidebarList = (props: SidebarListProps) => {
  const { open } = React.useContext(NavigationContext);

  return (
    <List>
      <Divider
        sx={{ mx: open ? "20px" : "10px", bgcolor: "#403e3e", my: "10px" }}
      />
      <Typography
        sx={{ textAlign: "center", fontWeight: "bold", py: "4px" }}
        display={open ? "block" : "none"}
      >
        {props.heading}
      </Typography>
      <SidebarListButton title="Dashboard" url="/dashboard"></SidebarListButton>
      <SidebarListButton
        title="About Page"
        url="/about-page"
      ></SidebarListButton>
    </List>
  );
};

export default SidebarList;
