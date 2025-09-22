import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

import Hero from "./components/Hero";

import NavRoute from "./components/Routes/NavRoute";
import About from "./components/About";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen px-2 px-4 flex flex-col space-y-10">
      <Navbar />
      <NavRoute />
      <Hero />
      <About />
    </div>
  );
}

export default App;
