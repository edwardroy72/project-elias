import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import MiniDrawer from "../objects/navigation/MiniDrawer";
import LoginPage from './LoginPage';
import React from "react";

const AppPages = () => {
  const navigate = useNavigate();
  const [token, setToken] = React.useState('');
  const [userEmail, setUserEmail] = React.useState('');
  const [selectedPage, setSelectedPage] = useState("/");

  React.useEffect(() => {
    const foundToken = localStorage.getItem('token');
    if (foundToken) {
      setToken(foundToken);
    }
    const foundEmail = localStorage.getItem('userEmail');
    if (foundEmail) {
      setUserEmail(foundEmail);
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<div />} />
        <Route path="/login" element={<LoginPage token={token} setToken={setToken} userEmail={userEmail} setUserEmail={setUserEmail} />} />
      </Routes>      
    </>
  );
};

export default AppPages;
