import { createTheme } from "@mui/material/styles";

const ThemeOptions = (darkMode: boolean) => {
  const darkThemeOptions = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#202020",
      },
      secondary: {
        main: "#ffe900",
      },
      background: {
        default: "#191919",
        paper: "#333333",
      },
      text: {
        primary: "#ffffff",
        secondary: "#9B9B9B",
        disabled: "#838383",
      },
    },
    typography: {
      fontFamily:
        'ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", ' +
        'Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", ' +
        '"Segoe UI Symbol"',
      body1: {
        fontSize: "0.9rem",
      },
    },
  });

  const lightThemeOptions = createTheme({});

  return darkMode ? darkThemeOptions : lightThemeOptions;
};

export default ThemeOptions;
