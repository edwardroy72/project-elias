import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import React from "react";

interface ErrorMessageProps {
  setError: (errorInfo: { errorFound: boolean; errorMsg: string }) => void;
  error: Record<string, any>;
}

const ErrorMessage = (props: ErrorMessageProps) => {
  const [state, setState] = React.useState({
    open: true,
    vertical: "top" as const,
    horizontal: "center" as const,
  });
  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
    props.setError({
      errorFound: false,
      errorMsg: "",
    });
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      onClose={handleClose}
      key={vertical + horizontal}
    >
      <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
        {props.error.errorMsg}
      </Alert>
    </Snackbar>
  );
};

export default ErrorMessage;
