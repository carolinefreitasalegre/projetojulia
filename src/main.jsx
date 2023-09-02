import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalStyled from "./GlobalStyled.js";
import AOS from "aos";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <GlobalStyled />
  </React.StrictMode>
);
