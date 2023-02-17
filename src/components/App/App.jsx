import React from "react";

import { Routes, Route } from "react-router-dom";

import { Theme } from "../../Theme.jsx";
import { GlobalStyle } from "../../globalStyles.js";

import { Layout } from "../../layouts/Layout/Layout.jsx";
import { Home } from "../../pages/Home/Home.jsx";

export const App = () => {
  return (
    <Theme>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Theme>
  );
};
