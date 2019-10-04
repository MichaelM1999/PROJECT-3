import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {
    return (
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            to="/portfolio"
            className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/purchase"
            className={window.location.pathname === "/purchase" ? "nav-link active" : "nav-link"}
          >
            Purchase
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Search"
            className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
          >
            Search
          </Link>
        </li>
      </ul>
    );
  }
  
  export default NavTabs;
  