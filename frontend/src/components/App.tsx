import { BrowserRouter } from "react-router-dom";
import React from "react";
import AppPages from "./pages/AppPages";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import ThemeOptions from "../styles/ThemeOptions";
import Navbar from "./objects/navigation/Navbar";
import Sidebar from "./objects/navigation/Sidebar";
import { NavigationSettings } from "../../types";
import "../styles/App.scss";

export const NavigationContext = React.createContext<NavigationSettings>({
  drawerWidth: 240,
  open: false,
  setOpen: () => {},
});

export default function App() {
  const [darkMode, setDarkMode] = React.useState(true);
  const [open, setOpen] = React.useState(false);

  const drawerWidth = 240;

  return (
    <ThemeProvider theme={ThemeOptions(darkMode)}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <BrowserRouter>
          <NavigationContext.Provider value={{ drawerWidth, open, setOpen }}>
            <Navbar />
            <Sidebar setDarkMode={setDarkMode} />
          </NavigationContext.Provider>
          <AppPages />
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}
