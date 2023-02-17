import React from "react";

import { Outlet } from "react-router-dom";

import { Footer } from "../Footer/Footer.jsx";
import { Header } from "../Header/Header.jsx";

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
