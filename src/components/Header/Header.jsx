import React from "react";
import Nav from "../Nav/Nav";

function Header() {
  return (
    <header style={{ backgroundColor: "lightblue" }}>
      <h1 style={{ textAlign: "center" }}>Marketplace</h1>
      <Nav />
    </header>
  );
}

export default Header;
