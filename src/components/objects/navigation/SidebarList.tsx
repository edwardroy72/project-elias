import { List, Divider, Typography } from "@mui/material";
import React from "react";

interface SidebarListProps {
  open: boolean;
  heading: string;
  children?: React.ReactNode;
}

const SidebarList = (props: SidebarListProps) => {
  return (
    <List>
      <Divider
        sx={{ mx: props.open ? "20px" : "10px", bgcolor: "white", my: "5px" }}
      />
      <Typography
        sx={{ textAlign: "center", fontWeight: "bold", pt: "4px" }}
        display={props.open ? "block" : "none"}
      >
        {props.heading}
      </Typography>
    </List>
  );
};

export default SidebarList;
