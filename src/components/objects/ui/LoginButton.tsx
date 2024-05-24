import React from "react";
import { Button } from "@mui/material";

const LoginButton = ({ onClick }) => {
  return (
    <Button
      variant="contained"
      sx={{ width: "40%", height: "40px", mt: '30px' }}
      onClick={onClick}
    >
      Login
    </Button>
  );
};

export default LoginButton;

