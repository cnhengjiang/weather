import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "@ant-design/v5-patch-for-react-19";
import "normalize.css/normalize.css";
const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
