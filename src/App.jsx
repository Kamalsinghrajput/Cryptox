import { useState } from "react";
// import { Switch, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import HomePage from "./components/homepage";
import SideNavigation from "./components/sidenavigation";

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
    </>
  );
}

export default App;
