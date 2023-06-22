import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
// import { TokenProvider } from "./app/global/providers/TokenProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //   <TokenProvider>
  <App />
  // </TokenProvider>
);
