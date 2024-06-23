import Box from "@mui/material/Box";
import React from "react";

interface PageTemplateProps {
  children?: React.ReactNode;
}

const PageTemplate = ({ children }: PageTemplateProps) => {
  return (
    <Box
      component="main"
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        gap: "5px",
        height: "100vh",
        width: "100dvw",
        overflow: "hidden",
        py: "10px",
        pr: "80px",
        mt: "70px",
      }}
    >
      {children}
    </Box>
  );
};

export default PageTemplate;
