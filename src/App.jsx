import { useState } from "react";
import { Route, Routes } from "react-router-dom";
// import { Switch, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Crypto from "./components/Crypto/crypto";
import SideNavigation from "./components/sidenavigation";
import Homepage from "./components/HomePage/homepage";
import CryptoDetails from "./components/CryptoDetails/cryptoDetails";
import CryptoNews from "./components/CryptoDetails/cryptoNews";

function App() {
  return (
    <>
      <Homepage />
    </>
  );
}

export default App;
