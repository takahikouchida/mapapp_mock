import React from "react";
import { ThemeProvider } from "@material-ui/core/styles"; // ThemeProvider はここ
import { createTheme } from "@material-ui/core";          // createTheme はコアから
import CssBaseline from "@material-ui/core/CssBaseline";
import MobileMapPage from "./pages/MobileMapPage.jsx";



const theme = createTheme({
  palette: {
    primary: {
      main: "#1a73e8",
    },
    secondary: {
      main: "#00a884",
    },
    background: {
      default: "#f5f7fa",
    },
  },
  typography: {
    fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
});

export default function App() {
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MobileMapPage />
      </ThemeProvider>
  );
}