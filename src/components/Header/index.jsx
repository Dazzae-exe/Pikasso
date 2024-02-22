import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

function Header() {
  const { user } = React.useContext(UserContext);

  return (
    <header className="layoutHeader">
      <h2>Pikasso</h2>

      {!user ? (
        ""
      ) : (
        <form className="searchForm">
          <button className="searchForm-btn">
            <MagnifyingGlassIcon width={24} height={24} />
          </button>
          <input type="text" name="Search" className="searchForm-input" placeholder="Search" />
        </form>
      )}

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
          {!user ? (
            <li>
              <Link to={`/auth/log-in`} className="layoutHeader-link">
                Log In
              </Link>
            </li>
          ) : (
            ""
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
