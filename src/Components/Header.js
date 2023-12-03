import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
            <img src="/img.jpg" alt="logo"/>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/searchbar">Search</Link>
            </li>
            <li>
              <Link to="/todolist">TODO LIST</Link>
            </li>
            <li>
              <Link to="/dtable">D table</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
