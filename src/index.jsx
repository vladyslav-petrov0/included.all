import React from "react";
import ReactDOM from "react-dom/client";

import { Provider as StoreProvider } from "react-redux";
import { store } from "./store.js";

import { ServiceContext } from "./context/ServiceContext.js";
import IncludedAll from "./api/IncludedAll.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { worker } from "./mocks/browser.js";

import { App } from "../src/components/App/App.jsx";

if (process.env.NODE_ENV === "development") {
  worker.start();
}

const service = new IncludedAll();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <ServiceContext.Provider value={service}>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </BrowserRouter>
      </ServiceContext.Provider>
    </StoreProvider>
  </React.StrictMode>
);
