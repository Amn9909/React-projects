import React, { useState } from "react";
import "./Carrier.css";
import { Button } from "@mui/material";

const Carrier = () => {
  const [jobPost, setjobPost] = useState("");

  const event = () => {
    setjobPost("newjob adeednewjob adeednewjob adeednewjob adeednewjob adeednewjob adeednewjob adeednewjob adeednewjob adeednewjob adeednewjob adeednewjob adeednewjob adeednewjob adeednewjob adeednewjob adeednewjob adeednewjob adeednewjob adeednewjob adeednewjob adeednewjob adeednewjob adeednewjob adeednewjob adeednewjob adeednewjob adeednewjob adeednewjob adeednewjob adeednewjob adeednewjob adeednewjob adeednewjob adeednewjob adeednewjob adeednewjob adeednewjob adeed")
    console.log("event listened !!!");
  };
  return (
    <div className="main-div">
      <h1 className="main-heading"> this is carrier page </h1>
      <div className="content">
        <p className="para-text">
            {jobPost}
        </p>
      </div>
      <div className="images">
        <img
          src="src/assets/wrongGateway.jpg"
          alt=""
          height={"1000px"}
          width={"1000px"}
        />
      </div>
      <div className="job-posts">
        {jobPost}
        <Button onClick={event} className="setJob">
          SetJob
        </Button>
      </div>
    </div>
  );
};

export default Carrier;
