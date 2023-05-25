import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/app/App";
import "bootstrap/dist/css/bootstrap.css";
import { CartItemsProvider } from "./providers/CartItemsProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <CartItemsProvider>
    <App />
  </CartItemsProvider>,
);
