import React from "react";
import PageTemplate from "../objects/ui/PageTemplate";
import { Paper } from "@mui/material";
import Copyright from "../objects/ui/Copyright";

const TreePage = () => {
  const sectionStyle = {
    mx: "5%",
    mt: "3%",
    mb: "20px",
    display: "flex",
    flexDirection: "column",
    height: "85vh",
    gridColumn: "1 / span 12",
  };

  return (
    <PageTemplate>
      <Paper sx={sectionStyle}></Paper>
      <Copyright sx={{ gridColumn: "1 / span 12" }} />
    </PageTemplate>
  );
};

export default TreePage;
