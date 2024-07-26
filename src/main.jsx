import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/CryptoDetails/dashboard.jsx";
import Crypto from "./components/Crypto/crypto.jsx";
import Exchanges from "./components/exchanges.jsx";
import News from "./components/news.jsx";
import About from "./components/about.jsx";
const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cryptocurrencies/:coinName",
    element: <Dashboard />,
  },
  {
    path: "/cryptocurrencies",
    element: <Crypto />,
  },
  {
    path: "/exchanges",
    element: <Exchanges />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
