import React from "react";
import './TestNav.css'

const TestNavbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo" style={{ textAlign: "center" }}>
          <h1>Godrej| INDUSTRIES</h1>
        </div>

        <ul className="nav-links">
          <li>
            <a href="/">Know us</a>
          </li>
          <li>
            <a href="/">Business</a>
          </li>
          <li>
            <a href="/">Careers</a>
          </li>
          <li>
            <a href="/">Sustainability</a>
          </li>
          <li>
            <a href="/">Investors</a>
          </li>
          <li>
            <a href="/">Media</a>
          </li>
        </ul>

        {/* MAIN    part  */}
      </nav>
      <p></p>
    </>
  );
};
export default TestNavbar;
