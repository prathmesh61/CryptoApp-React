import React from "react";
import useAxios from "../hooks/useAxios";
// import Coin from "./coin";
import Coin from "./Coin";
const Market = () => {
  const { response } = useAxios(
    "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );
  // console.log(response);

  return (
    <section className="mt-8">
      <h1 className="text-2xl mb-2">Market</h1>
      {response && response.map((coin) => <Coin key={coin.id} coin={coin} />)}
    </section>
  );
};

export default Market;
