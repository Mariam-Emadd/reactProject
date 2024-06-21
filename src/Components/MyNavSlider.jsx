import React from "react";
import "./MyNavBar.css";
import MySlider from "./MySlider";
import { Link } from "react-router-dom";



function MyNavSlider() {
   function handleLogout() {
     window.localStorage.removeItem("email");
     window.location.pathname = "/";
   }
  return (
    <div>
      <div className="myheader">
        <Link to="/" className="logo">
          Finder
        </Link>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/compare">Compare</Link>
          </li>{" "}
          <li>
            <Link to="/scan"> Qr code </Link>
          </li>{" "}
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/share">Share the app</Link>
          </li>
        </ul>

        <div>
          {!window.localStorage.getItem("email") ? (
            <>
              <Link
                to="/register"
                style={{ textAlign: "center" }}
                className="btn submit w-100 rounded-2"
              >
                Register
              </Link>
              <Link
                to="/login"
                style={{ textAlign: "center" }}
                className="btn submit w-100 rounded-2"
              >
                Login
              </Link>{" "}
            </>
          ) : (
            <div className="btn submit w-100 rounded-2 logout" onClick={handleLogout}>
              Logout
            </div>
          )}
        </div>
      </div>
      <MySlider/>
    </div>
  );
}

export default MyNavSlider;
