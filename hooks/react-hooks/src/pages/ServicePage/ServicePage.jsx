import React from "react";
import "./ServicePage.css";
import { Card, CardContent, Typography } from "@mui/material";

const ServicePage = () => {
  const cardsData = [
    { id: 1, name: "aman" },
    { id: 2, name: "azam" },
    { id: 1, name: "aman" },
    { id: 2, name: "azam" },
    { id: 1, name: "aman" },
    { id: 2, name: "azam" },
    { id: 1, name: "aman" },
    { id: 2, name: "azam" },
    { id: 1, name: "aman" },
    { id: 2, name: "azam" },
    { id: 2, name: "azam" },

  ];

  return (
    <div className="service-page-base">
      <div className="title">
       <Typography variant="h1">Our Services</Typography>
      </div>
      <div className="cards">
        {cardsData.map((data) => (
          <Card key={data.id} className="card">
            <CardContent>
              <Typography variant="h5" component="div">
                {data.name}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
