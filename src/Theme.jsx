import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#393E46",
    secondary: "#6D9886",
    additional: "#F2E7D5",
    neutral: "#F7F7F7",
  },

  fonts: {
    primary: [`"Source Sans 3"`, "sans-serif"].join(","),
    secondary: [`"Poppins"`, "sans-serif"].join(","),
    additional: [`"Raleway"`, "sans-serif"].join(","),
  },
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
