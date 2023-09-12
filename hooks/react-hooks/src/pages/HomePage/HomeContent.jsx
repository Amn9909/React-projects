import { Box, Button, Typography } from "@mui/material";
import React from "react";
import "./HomePage.css";

const HomeContent = () => {
  return (
    <>
      <div className="home-content-base">
        <div className="content-title">
          <div>
            <Typography>Welcome to our site</Typography>
          </div>
        </div>
        <div className="second-row-content">
          <div className="content-left">
            <Typography variant="h4">content left</Typography>
            <div className="Btn">
              <Box mt={2} className="buttons">
                <Button className="about-button" variant="contained">
                  know about us
                </Button>
              </Box>
              <Box mt={2} className="buttons">
                <Button className="contact-button" variant="outlined">
                  Outlined
                </Button>
              </Box>
            </div>
          </div>

          <div className="content-right">
            <Typography variant="h4">content right</Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContent;
