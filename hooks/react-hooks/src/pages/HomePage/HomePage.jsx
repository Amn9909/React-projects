import React, { useState } from "react";
import "./HomePage.css";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Home, Info, AccountCircle, Settings } from "@mui/icons-material";
import HomeContent from "./HomeContent";
import InfoContent from "./InfoContent";
import AccountContent from "./AccountContent";
import SettingsContent from "./SettingsContent";

const HomePage = () => {
  const [selectedNavItem, setSelectedNavItem] = useState("home");
  const contentComponents = {
    home: <HomeContent />,
    info: <InfoContent />,
    account: <AccountContent />,
    settings: <SettingsContent />,
  };

  const handleNavItemSelect = (navItem) => {
    setSelectedNavItem(navItem);
  };

  return (
    <div className="Base">
      <div className="vertical-navbar">
        <ul className="vertical-navbar-items">
          <li className="listItem" onClick={() => handleNavItemSelect("home")}>
            <Home />
          </li>
          <li className="listItem" onClick={() => handleNavItemSelect("info")}>
            <Info />
          </li>
          <li
            className="listItem"
            onClick={() => handleNavItemSelect("account")}
          >
            <AccountCircle />
          </li>
          <li
            className="listItem"
            onClick={() => handleNavItemSelect("settings")}
          >
            <Settings />
          </li>
        </ul>
      </div>
      <div className="content">{contentComponents[selectedNavItem]}</div>
    </div>
  );
};

export default HomePage;
