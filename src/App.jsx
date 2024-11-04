import React from "react";
import { Route, Routes } from "react-router-dom";
import "./style.css";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <MainContent>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </MainContent>
      <Footer />
    </Router>
  );
};

export default App;
