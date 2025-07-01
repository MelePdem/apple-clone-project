import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import "./assets/css/styles.css";
import "./assets/css/bootstrap.css";
 import {HashRouter} from "react-router-dom"
// import "./assets/js/bootstrap.js"
import App from "./App.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
   <HashRouter >
    <App />
</HashRouter>
   
  </StrictMode>
);
