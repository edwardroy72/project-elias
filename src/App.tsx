import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import AppPages from "./components/pages/AppPages";
import { Container } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Trebuchet MS",
      textTransform: "none",
      fontSize: 16,
    },
  },
});

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const style = {
    backgroundColor: darkMode ? "#202020" : "black",
    height: "100vh",
    width: "100vw",
    padding: 0,
    margin: 0,
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth={false} key="app" sx={style}>
        <Router>
          <AppPages />
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
