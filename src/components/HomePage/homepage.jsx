import images from "../../constants/images";
import Faq from "../Faq/faq";
import Navbar from "../Navbar/navbar";
import Footer from "./footer";
import Midbody from "./midbody";

function Homepage() {
  return (
    <>
      <Navbar />
      <div className="flex justify-around items-center h-[90vh] text-white max-md:flex-col  bg-gradient-to-r from-gray-800 to-slate-800">
        <div className="space-y-5 ">
          <div className="text-5xl font-bold bg-gradient-to-r from-fuchsia-500 via-violet-600 to-cyan-500 bg-clip-text text-transparent ">
            Cryptocurrency <br /> Exchange
          </div>
          <div className="text-xl max-w-[400px]">
            Real-time Cryptocurrency Prices at your Fingertips. Crypto security
            is paramount in protecting digital assets. Strong encryption, secure
            key management, and robust authentication mechanisms are crucial for
            safeguarding cryptocurrencies and ensuring the integrity.
          </div>
        </div>
        <div>
          <img className="h-[600px] w-[600px]" src={images.crypto} alt="" />
        </div>
      </div>
      <Midbody />
      <Faq />
      <Footer />
    </>
  );
}

export default Homepage;
