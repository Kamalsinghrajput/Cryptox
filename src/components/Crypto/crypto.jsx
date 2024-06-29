import millify from "millify";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Coincard from "./coincard";
import SideNavigation from "../sidenavigation";
import Navbar from "../Navbar/navbar";

const URL = `https://api.coinranking.com/v2/coins`;
const apiKey = "coinrankingd9227b50c96c7e2a25dc91122d9f5bba2168501ba4754c51";
function Crypto() {
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
      <Navbar />
      {/* <div className="font-semibold text-4xl flex justify-center items-center pt-14 ">
        Global Crypto Stats
      </div> */}
      <div className="pt-20 ">
        <ul className="flex justify-center items-center gap-20 bg-gradient-to-r from-yellow-900 to-neutral-900  text-white py-11">
          <div className="flex flex-col gap-4">
            Global Crypto Stats
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
            ].map(({ title, count }, index) => {
              return (
                <li key={index}>
                  <div className=" text-xl">{title}</div>
                  <div>{count}</div>
                </li>
              );
            })}
          </div>
          <div className="flex flex-col gap-4">
            {[
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
                  <div className=" text-xl">{title}</div>
                  <div>{count}</div>
                </li>
              );
            })}
          </div>
        </ul>
      </div>
      <div className="flex justify-center">
        <Coincard />
        {/* <SideNavigation /> */}
      </div>
    </>
  );
}

export default Crypto;
