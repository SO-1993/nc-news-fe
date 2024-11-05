import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ArticleList from "./components/ArticleList";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <ArticleList />
    </>
  );
}

export default App;
