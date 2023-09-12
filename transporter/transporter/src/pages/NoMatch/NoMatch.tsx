import React from "react";
import "./NoMatch.css";

const NoMatch = () => {
  return (
    <>
      <div className="wrong-gateway-container">
        <h1>Wrong Gateway</h1>
        <p>Sorry, you have accessed the wrong gateway.</p>

        <div className="animation-container">
          <img src="src/assets/wrongGateway.jpg" alt=" wrong gateway 1" />
        </div>
      </div>
    </>
  );
};

export default NoMatch;
