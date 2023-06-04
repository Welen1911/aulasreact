import React, {useState} from "react";
import { BrowserRouter } from "react-router-dom";
import {LightTheme} from "./shared/themes";
import { AppRoutes } from "./routes";
import { ThemeProvider } from "@emotion/react";
export const App = () => {
  return (
    <ThemeProvider theme={LightTheme}>
    <BrowserRouter>
      <AppRoutes></AppRoutes>
    </BrowserRouter>
    </ThemeProvider>
  );
}
