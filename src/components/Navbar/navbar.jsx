import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import images from "../../constants/images";

function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    console.log("clicked");
    setOpen((prev) => !prev);
  };
  return (
    <>
      <div className="w-screen bg-[#202020] flex items-center justify-between max-md:h-[39px] max-md:flex-col max-md:items-start max-md:gap-3 h-[80px] fixed z-[999]">
        <div className="px-10 flex items-center justify-between max-md:w-screen max-md:pl-4  relative z-[999]">
          <img className="w-[150px] h-[80px]" src={images.logo} alt="" />

          <div onClick={toggleMenu} className="md:hidden ">
            <MdMenu className="w-[25px] h-[25px]" />
          </div>
        </div>
        <div
          className={`flex min-w-[65vw] justify-between items-center max-md:flex-col max-md:items-start max-md:px-[15px]  transition-all duration-500 ease-in-out max-md:gap-4 max-md:w-full ${
            !open ? " max-md:translate-y-[-300px]" : "translate-y-0"
          }`}
        >
          <div>
            <ul className="flex gap-7 max-md:flex-col text-white">
              {["Cryptocurrencies", "Exchanges", "News", "About"].map(
                (item, index) => {
                  return (
                    <Link to={`/${item.toLowerCase()}`} key={index}>
                      {item}
                    </Link>
                  );
                }
              )}
            </ul>
          </div>
          <div>
            <button className="p-3 mx-8 bg-black text-white rounded-3xl max-md:m-0 max-md:mb-3 ">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
