import { useState, useEffect } from "react";
import { Link, useAsyncError } from "react-router-dom";
const URL = `https://api.coinranking.com/v2/coins?limit=10`;
const apiKey = "coinrankingd9227b50c96c7e2a25dc91122d9f5bba2168501ba4754c51";
function Coincard() {
  const [cryptoDetails, setCryptoDetails] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(12);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  const currentPosts = cryptoDetails.slice(firstPostIndex, lastPostIndex);
  const getData = async () => {
    try {
      const response = await fetch(URL, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });
      const json = await response.json();
      console.log(json);
      setCryptoDetails(json.data.coins);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {/* <div className="flex min-h-screen flex-col justify-center">
        <div className="group h-96 w-96  cursor-pointer [perspective:1000px]">
          <div className="relative w-full h-full transition-all duration-500 [transform-style:preserve 3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0  ">
              <img
                className="w-full h-full shadow-black/80 rounded-3xl"
                src="https://cdn.pixabay.com/photo/2024/02/07/16/15/flower-8559381_1280.jpg"
                alt=""
              />
            </div>
            <div
              className={`absolute inset-0 w-full h-full bg-black/80 px-12
               text-slate-200 rounded-3xl [transform:rotateY(180deg)]
                opacity-0 hover:opacity-100 transition-all duration-500 ease-linear`}
            >
              <h1 className="text-3xl  ">hello yheoadjfnb jndaj</h1>
            </div>
          </div>
        </div>
      </div> */}
      <ul className="   flex flex-col gap-0.5 ">
        <div className="flex w-[83vw] justify-around text-white py-2 bg-[#1B1E2D] rounded-md  ">
          {["Symbol", "Coin Name", "Price", "24h Volume", "Market Cap"].map(
            (title, index) => {
              return (
                <li key={index}>
                  <div className=" text-lg">{title}</div>
                </li>
              );
            }
          )}
        </div>
        {cryptoDetails?.map((item, index) => {
          return (
            <Link
              to={`/cryptocurrencies/${item.name.toLowerCase()}`}
              className="flex gap-4 items-center justify-around bg-[#1B1E2D] rounded-md py-2 text-white"
            >
              <div className="w-full max-w-[20px] flex gap-4">
                {" "}
                <img className="size-6" src={item.iconUrl} alt="" />
                {item.symbol}{" "}
              </div>
              <div title="..." className="w-full max-w-[70px]">
                {item.name.slice(0, 8)}
              </div>
              <div className="w-full max-w-[70px]"> {item.price}</div>
              <div className="w-full max-w-[70px]">{item["24hVolume"]}</div>
              <div className="w-full max-w-[70px]"> {item.marketCap}</div>
            </Link>
          );
        })}
      </ul>
    </>
  );
}

export default Coincard;
