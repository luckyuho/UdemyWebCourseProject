import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"; // react-router-dom uses for different route
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
