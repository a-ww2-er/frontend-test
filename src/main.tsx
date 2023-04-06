import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppContextProvider } from "./context/globalContext";
import "./index.scss";
import 'regenerator-runtime'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);
