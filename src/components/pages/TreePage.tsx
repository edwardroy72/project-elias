import React from "react";
import PageTemplate from "../objects/ui/PageTemplate";
import { Paper } from "@mui/material";
import Copyright from "../objects/ui/Copyright";

const TreePage = () => {
  const sectionStyle = {
    mx: "60px",
    my: "40px",
    display: "flex",
    flexDirection: "column",
    height: "85vh",
    gridColumn: "1 / span 12",
  };
  return (
    <PageTemplate>
      <Paper sx={sectionStyle}></Paper>
      <Copyright sx={{gridColumn: "1 / span 12"}}/>
    </PageTemplate>
  );
};

export default TreePage;
