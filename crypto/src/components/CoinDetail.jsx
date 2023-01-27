import React from "react";
import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";

const CoinDetail = () => {
  const { id } = useParams();
  const { response } = useAxios(
    `coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=true&sparkline=false`
  );
  // console.log(response);

  if (!response) {
    return <div>Loading....</div>;
  }

  return (
    <div className="my-6">
      <div className="flex gap-2 items-center">
        <img src={response.image.small} alt={response.name} />
        <h1 className="text-2xl capitalize font-bold">{response.name}</h1>
      </div>
      <p className="mt-6 text-gray-500 font-xs">{response.description.en}</p>
    </div>
  );
};

export default CoinDetail;
