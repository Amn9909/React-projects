import React from "react";
import "./NavBar.css"

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">Your Logo</div>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/service">Services</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/carrier">Carriers</a>
          </li>
          <li>
            <a href="/blogs">Blogs</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
