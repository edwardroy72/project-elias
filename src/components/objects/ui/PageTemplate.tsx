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
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
        py: "10px",
        px: "1.5%",
      }}
    >
      {children}
    </Box>
  );
};

export default PageTemplate;
