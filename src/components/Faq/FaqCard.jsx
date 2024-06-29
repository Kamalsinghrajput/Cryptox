import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function FaqCard({ question, answer }) {
  const [open, setOpen] = useState(false);
  const toggleButton = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <div className="flex flex-col ">
        <div className="flex  ">
          <div className="text-fs-400 font-bold px-10 ">{question}</div>{" "}
          <div
            onClick={toggleButton}
            className={`  transition-transform duration-500 ease-in-out ${
              open ? "rotate-[180deg]" : ""
            }`}
          >
            <IoIosArrowUp />
          </div>
        </div>

        <div
          className={`grid-transition  text-fs-300 pl-[4.2rem] pr-10 font-bold grid grid-rows-[0fr] ${
            open ? "grid-rows-[1fr]" : ""
          }`}
        >
          <p className="text-fs-300 font-light overflow-hidden">{answer}</p>
        </div>
      </div>
    </>
  );
}
export default FaqCard;
