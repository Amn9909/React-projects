// eslint-disable-next-line no-unused-vars
import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import DraftsIcon from '@mui/icons-material/Drafts';

const NavBar = () => {
  return (
    <div className="navbar_base">
      <ul className="unordered_list">
        <li>
          <Link to="/home">LOGO</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/service">Service</Link>
        </li>
        <li className="action">
          <Link to="action"> <DraftsIcon /> </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
