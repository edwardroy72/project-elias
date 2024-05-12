import { TextField, Button, Box, Paper } from "@mui/material";
import React from "react";
import { apiCallPost } from "../../helpers";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../objects/ui/ErrorMessage";
import PasswordInput from "../objects/ui/PasswordInput";
import LoginButton from "../objects/ui/LoginButton";

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

  const login = async () => {
    const data = await apiCallPost(
      "user/auth/login",
      {
        email: email,
        password: password,
      },
      null
    );

    if (data.error) {
      setError({
        errorFound: true,
        errorMsg: data.error,
      });
    } else {
      localStorage.setItem("token", data.token);
      props.setToken(data.token);
      localStorage.setItem("userEmail", email);
      props.setUserEmail(email);
      navigate("/hostedlistings");
    }
  };

  const inputStyle = { width: "50%", mb: "16px" };

  return (
    <Paper sx={{ height: "100%" }} elevation={2}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="50dvh"
        flexDirection="column"
        gap={1}
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
            width: "24%",
            height: "40px",
            bgcolor: "#40a162",
            paddingTop: "10px",
          }}
        >
          Create Account
        </Button>
      </Box>
    </Paper>
  );
};

export default LoginPage;
