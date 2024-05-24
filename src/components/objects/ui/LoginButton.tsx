import React from "react";
import { Button } from "@mui/material";

interface LoginButtonProps {
  onClick: () => void;
}

const LoginButton: React.FC<LoginButtonProps> = ({ onClick }) => {
  return (
    <Button
      variant="contained"
      sx={{ width: "40%", height: "40px", mt: "30px" }}
      onClick={onClick}
    >
      Login
    </Button>
  );
};

export default LoginButton;
