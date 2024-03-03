import millify from "millify";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Coincard from "./coincard";
import SideNavigation from "./sidenavigation";

const URL = `https://api.coinranking.com/v2/coins`;
const apiKey = "coinrankingd9227b50c96c7e2a25dc91122d9f5bba2168501ba4754c51";
function HomePage() {
  const [cryptoData, setCryptoData] = useState();
  const getData = async () => {
    try {
      const response = await fetch(URL, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });
      const json = await response.json();
      setCryptoData(json.data.stats);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="font-semibold text-4xl">Global Crypto Stats</div>
      <div>
        <ul>
          {[
            {
              title: "Total Cryptocurrencies",
              count: cryptoData?.total,
            },
            {
              title: "Total 24h Volume",
              count: cryptoData?.total24hVolume,
            },
            {
              title: "Total Coins",
              count: cryptoData?.totalCoins,
            },
            {
              title: "Total Market",
              count: cryptoData?.totalMarkets,
            },
            {
              title: "Total Marketcap",
              count: cryptoData?.totalMarketCap,
            },
            {
              title: "Total Exchanges",
              count: cryptoData?.totalExchanges,
            },
          ].map(({ title, count }, index) => {
            return (
              <li key={index}>
                <div>{title}</div>
                <div>{count}</div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex">
        <Coincard />
        <SideNavigation />
      </div>
    </>
  );
}

export default HomePage;
