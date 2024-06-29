import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
      <hr className="w-[100%]" />
      <div className=" h-[200px] w-[100vw] text-white text-lg  ">
        <div className="flex justify-around items-center h-[100px]">
          <div className="flex flex-col">
            Follow us on
            <div className="flex gap-3 justify-center items-center h-6">
              <FaInstagram c />
              <FaFacebookF />
              <FaYoutube />
              <FaTwitter />
              <FaLinkedin />
            </div>
          </div>

          <div className=" flex flex-col">
            <div>Email Us: support@Crytox.co</div>
            <div> Raise a ticket </div>
          </div>
        </div>
        <hr className="w-[100%]" />
        <div className="flex justify-around h-full items-center text-lg">
          <ul>
            <li>Products</li>
            <li>Crypto Index</li>
            <li>Lorem Ipsum</li>
          </ul>

          <ul>
            <li>Buy Crypto</li>
            <li>Buy Bitcoin</li>
            <li>Buy Ethereum</li>
            <li>Buy Doge</li>
            <li>Buy Solana</li>
          </ul>

          <ul>
            <li>Policies</li>
            <li>T&C</li>
            <li>Privacy Policy</li>
            <li>AML Policy</li>
            <li>Cookie Policy</li>
          </ul>

          <ul>
            <li>Company</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Ventures</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
