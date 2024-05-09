import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import AppPages from "./components/pages/AppPages";
import { Container } from "@mui/material";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const style = {
    backgroundColor: darkMode ? "#333333" : "black",
    height: "100vh",
    width: "100vw",
    padding: 0,
    margin: 0
  };

  return (
    <Container maxWidth={false} key="app" sx={style}>
      <Router>
        <AppPages />
      </Router>
    </Container>
  );
}

export default App;
