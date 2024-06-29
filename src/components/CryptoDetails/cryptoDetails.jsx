import Navbar from "../Navbar/navbar";
import CryptoNews from "./cryptoNews";
function CryptoDetails() {
  const options = {
    headers: {
      "x-access-token":
        "coinrankingd9227b50c96c7e2a25dc91122d9f5bba2168501ba4754c51",
    },
  };

  fetch("https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/history", options)
    .then((response) => response.json())
    .then((result) => console.log(result));
  return (
    <>
      <Navbar />
      <CryptoNews />
    </>
  );
}
export default CryptoDetails;
