import { useRef, useState } from "react";
import { useEffect } from "react";
import images from "../../constants/images";
function Midbody() {
  const [count, setCount] = useState(1);
  const ref = useRef();

  useEffect(() => {
    const identifier = setInterval(() => {
      setCount((prev) => (prev === 2 ? 0 : ++prev));
    }, 3000);
    if (!ref.current) return;

    ref.current.style.transform = `translateY(-${count * 200}px)`;

    return () => {
      clearInterval(identifier);
    };
  }, [count]);
  return (
    <>
      <div className="flex  h-[500px] items-center justify-around bg-[#1B1E2D] ">
        <div className="  flex-col items-center  ">
          <div className="bg-gradient-to-r from-slate-400 to-slate-500 bg-clip-text text-transparent text-5xl font-bold pb-3	">
            So Far On Cryptox
          </div>
          <div className="h-[200px] overflow-hidden w-[480px]  ">
            <div
              ref={ref}
              className="transition-all duration-500 ease-in-out md:text-5xl md:font-extrabold   "
            >
              <div className="h-[200px] text-[#FFA6B1] ">
                Rs.50,000 crore+ <br /> Traded
              </div>
              <div className="h-[200px] text-[#B1E50E]">
                100+ Coins <br /> listed
              </div>
              <div className="h-[200px] text-[#6B91FC]">
                2 Crore+ <br /> users
              </div>
            </div>
          </div>
        </div>{" "}
        <img className=" h-[200px] w-[480px]" src={images.coins} alt="" />
      </div>
    </>
  );
}

export default Midbody;
