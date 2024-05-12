import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import AppPages from "./components/pages/AppPages";
import { ThemeProvider } from "@mui/material";
import ThemeOptions from "./styles/ThemeOptions";
import Dashboard from "./components/objects/navigation/Dashboard";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={ThemeOptions(darkMode)}>
      <Dashboard handleDarkModeChange={setDarkMode} />
      <Router>
        <AppPages />
      </Router>
    </ThemeProvider>
  );
}

export default App;
