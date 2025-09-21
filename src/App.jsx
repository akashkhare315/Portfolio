import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

import Hero from "./components/Hero";

import NavRoute from "./components/Routes/NavRoute";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <NavRoute />
      <Hero />
    </div>
  );
}

export default App;
