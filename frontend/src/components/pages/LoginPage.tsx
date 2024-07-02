import { TextField, Button, Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../objects/ui/ErrorMessage";
import PasswordInput from "../objects/ui/PasswordInput";
import LoginButton from "../objects/ui/LoginButton";
import PageTemplate from "../objects/ui/PageTemplate";

interface LoginProps {
  token: string;
  setToken: (value: string) => void;
  userEmail: string;
  setUserEmail: (value: string) => void;
}

const LoginPage = (props: LoginProps) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState({
    errorFound: false,
    errorMsg: "",
  });
  const navigate = useNavigate();

  React.useEffect(() => {
    if (props.token) {
      navigate("/hostedlistings");
    }

    if (props.userEmail) {
      setEmail(props.userEmail);
    }
  }, [props.token, props.userEmail]);

  const login = () => {
    return { response: "Logged in!" };
  };

  const inputStyle = { width: "88%", mb: "16px" };

  return (
    <PageTemplate>
      <Box
        sx={{
          gridColumn: "span 12",
          display: "flex",
          alignItems: "center",
          alignContent: "center",
          flexDirection: "column",
          width: "30vw",
          height: "60vh",
          mt: "10%",
          outline: "solid #333333 2px",
          borderRadius: "16px",
          backgroundColor: "#333333",
        }}
      >
        {error.errorFound && <ErrorMessage error={error} setError={setError} />}
        <h1>Login Page</h1>
        <TextField
          id="register-email"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={inputStyle}
        />
        <PasswordInput
          sx={inputStyle}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
        />
        <LoginButton onClick={login} />
        <h2 style={{ fontSize: "12px", marginTop: "60px" }}>
          Not registered yet?
        </h2>
        <Button
          variant="contained"
          onClick={() => navigate("/register")}
          sx={{
            width: "40%",
            height: "40px",
            bgcolor: "#40a162",
            paddingTop: "8px",
            fontSize: "12px",
          }}
        >
          Create Account
        </Button>
      </Box>
    </PageTemplate>
  );
};

export default LoginPage;
