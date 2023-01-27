import React from "react";
import Market from "../components/Market";
import Trending from "../components/Trending";

const CryptoHome = () => {
  return (
    <div className="wrapper-container">
      <Trending />
      <Market />
    </div>
  );
};

export default CryptoHome;
