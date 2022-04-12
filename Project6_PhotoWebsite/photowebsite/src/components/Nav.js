import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Nav = () => {
  return (
    <Router forceRefresh>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </Router>
  );
};

export default Nav;
