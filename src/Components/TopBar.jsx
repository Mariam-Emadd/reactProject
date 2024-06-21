import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./NavBar.module.css";
import logo from "../Asset/logo.png";
function TopBar() {
  return (
    <div className="d-flex top-bar " style={{ backgroundColor: "aliceblue" }}>
      <div className="logo-container">
        <img
          src={logo}
          alt="logo"
          className="logo-img"
          style={{ width: "10%", marginBottom: "15px" }}
        />
        <Link to="/" className={`${styles.logo}`}>
          Finder
        </Link>
      </div>
      <Link
        to=""
        className="submit btn  rounded-2"
        style={{
          textAlign: "center",
          backgroundColor: "#ddd111",
          color: "black",
          margin: "2px",
          padding: "10px",
        }}
      >
        Go To WebSite
      </Link>
    </div>
  );
}

export default TopBar
