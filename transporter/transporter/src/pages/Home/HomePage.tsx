import React, { ChangeEvent, useState } from "react";
import "./HomePage.css";
import HomeIcon from "@mui/icons-material/Home";
import { Button, TextField } from "@mui/material";

const HomePage = () => {
  type InputChangeEvent = ChangeEvent<HTMLInputElement>;
  const [startLocation, setstartLocation] = useState("india");
  const [endLocation, setendLocation] = useState("india");

  const getStartpoint = (event: InputChangeEvent) => {
    setstartLocation(event.target.value);
  };

  const getEndPoint = (event: InputChangeEvent) => {
    setendLocation(event.target.value);
  };

  const searchStartPoint = () => {
    console.log("this is start point");
  };

  const searchEndPoint = () => {
    console.log("this is end point");
  };

  return (
    <>
      <div className="main-window">
        <div className="background">
          <p className="heading-text">we deliver all over india</p>
          <p>Enter start point</p>
          {/* <TextField /> */}
          <input placeholder="start point" onChange={getStartpoint} />
          <Button variant="outlined" onClick={searchStartPoint}>
            search
          </Button>
          <p>Enter Destination point</p>
          {/* <TextField /> */}
          <input placeholder="end point" onChange={getEndPoint} />
          <Button variant="outlined" onClick={searchEndPoint}>
            search
          </Button>
        </div>
      </div>
      <div>
        <p> this is your destination path</p>
        <p>
          start {startLocation} to {endLocation}
        </p>
      </div>
    </>
  );
};

export default HomePage;
