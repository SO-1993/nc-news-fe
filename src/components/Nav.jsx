import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa"; // Import FaSearch icon from react-icons
import styles from "./Components.module.css";
import logo from "../assets/news_logo_img.jpg"; // Import your logo image

function Nav() {
  return (
    <nav className={styles.nav}>
      <header className={styles.header}>
        <h1 className={styles.title}>NC NEWS</h1>
      </header>

      <ul className={styles.navBar}>
        <img
          className={styles.logoNavItem}
          src={logo}
          alt="news company logo"
        />

        <li className={styles.homeNavItem}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.topicsNavItem}>
          <Link to="/topics">Topics</Link>
        </li>
        <li className={styles.loginNavItem}>
          <Link to="/login">Login</Link>
        </li>

        <button className={styles.searchBtnNavItem}>
          <FaSearch /> Search nc news
        </button>
      </ul>
    </nav>
  );
}

export default Nav;
