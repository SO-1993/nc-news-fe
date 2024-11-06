import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import ArticleList from "./components/ArticleList";
import ArticleDetail from "./components/ArticleDetail";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/articles/:articleId" element={<ArticleDetail />} />
      </Routes>
    </>
  );
}

export default App;
