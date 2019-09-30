import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {
    return (
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            to="/"
            className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Discover"
            className={window.location.pathname === "/blog" ? "nav-link active" : "nav-link"}
          >
            Discover
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Search"
            className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
          >
            Search
          </Link>
        </li>
  
      </ul>
    );
  }
  
  export default NavTabs;
  