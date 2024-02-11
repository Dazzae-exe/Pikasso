import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="layoutHeader">
      <h2>Pikasso</h2>

      <nav className="layoutHeader-nav">
        <ul>
          <li>
            <Link to={`/`} className="layoutHeader-link">
              Home
            </Link>
          </li>
          <li>
            <Link to={`/explore`} className="layoutHeader-link">
              Explore
            </Link>
          </li>
          <li>
            <Link to={`/auth/log-in`} className="layoutHeader-link">
              Log In
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
