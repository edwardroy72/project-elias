import { BrowserRouter } from "react-router-dom";
import React from "react";
import AppPages from "./components/pages/AppPages";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import ThemeOptions from "./styles/ThemeOptions";
import Navbar from "./components/objects/navigation/Navbar";
import Sidebar from "./components/objects/navigation/Sidebar";
import { NavigationSettings } from "./types";

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
        <NavigationContext.Provider value={{ drawerWidth, open, setOpen }}>
          <Navbar />
          <Sidebar setDarkMode={setDarkMode} />
        </NavigationContext.Provider>

        <BrowserRouter>
          <AppPages />
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}
