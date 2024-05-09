import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import MiniDrawer from "../objects/MiniDrawer";

const AppPages = () => {
  const navigate = useNavigate();
  const [selectedPage, setSelectedPage] = useState("/");

  return (
    <>
      <Routes>
        <Route path="/" element={<div />} />
      </Routes>
			<MiniDrawer />
    </>
  );
};

export default AppPages;
