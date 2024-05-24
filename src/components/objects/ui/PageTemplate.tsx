import Box from "@mui/material/Box";
import React from "react";

interface PageTemplateProps {
  children: React.ReactNode;
}

const PageTemplate = ({ children }: PageTemplateProps) => {
  return (
    <Box
      component="main"
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        gap: "10px",
        height: "100vh",
        overflow: "auto",
        py: "10px",
        px: "3%",
        mt: "70px",
        mx: 'auto'
      }}
    >
      {children}
    </Box>
  );
};

export default PageTemplate;
