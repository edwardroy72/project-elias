import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "./LoginPage";
import React from "react";
import DashboardPage from "./DashboardPage";
import Button from "@mui/material/Button";

const AppPages = () => {
  const navigate = useNavigate();
  const [token, setToken] = React.useState("");
  const [userEmail, setUserEmail] = React.useState("");
  const [selectedPage, setSelectedPage] = useState("/");

  React.useEffect(() => {
    const foundToken = localStorage.getItem("token");
    if (foundToken) {
      setToken(foundToken);
    }
    const foundEmail = localStorage.getItem("userEmail");
    if (foundEmail) {
      setUserEmail(foundEmail);
    }
  }, []);

  return (
    <>
      <Routes>
        <Route index element={<DashboardPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route
          path="/login"
          element={
            <LoginPage
              token={token}
              setToken={setToken}
              userEmail={userEmail}
              setUserEmail={setUserEmail}
            />
          }
        />
      </Routes>
      <Button
        onClick={() => {
          navigate("/login");
          setSelectedPage(selectedPage);
        }}
      >
        Login
      </Button>
    </>
  );
};

export default AppPages;
