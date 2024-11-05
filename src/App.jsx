import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Header />
      <Nav />
    </>
  );
}

export default App;
