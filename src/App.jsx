import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ArticleList from "./components/ArticleList";
import ArticleDetail from "./components/ArticleDetail";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/articles/:articleId" element={<ArticleDetail />} />
      </Routes>
    </>
  );
}

export default App;
