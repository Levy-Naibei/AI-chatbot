import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import App from "./App.tsx";
import "./index.css";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto slab, serif",
    allVariants: { color: "white" },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
