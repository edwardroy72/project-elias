import React from "react";
import { Button } from "@mui/material";

const LoginButton = ({ onClick }) => {
  return (
    <Button
      variant="contained"
      sx={{ width: "25%", height: "40px" }}
      onClick={onClick}
    >
      Login
    </Button>
  );
};

export default LoginButton;

