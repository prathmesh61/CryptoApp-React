import React from "react";
import useAxios from "../hooks/useAxios";
import CoinTreding from "../components/CoinTrending";

const Trending = () => {
  const { response } = useAxios("search/trending");
  return (
    <div className="mt-8">
      <h1 className="text-xl mb-2">Trending</h1>
      {response &&
        response.coins.map((coin) => (
          <CoinTreding key={coin.item.coin_id} coin={coin.item} />
        ))}
    </div>
  );
};

export default Trending;
