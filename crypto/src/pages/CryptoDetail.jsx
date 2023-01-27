import React from "react";
import CoinDetail from "../components/CoinDetail";
import HistoryChart from "../components/HistoryChart";

const CryptoDetail = () => {
  return (
    <div className=" wrapper-container">
      <div className="mt-10">
        <HistoryChart />
        <CoinDetail />
      </div>
    </div>
  );
};

export default CryptoDetail;
