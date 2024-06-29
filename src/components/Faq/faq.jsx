import { RiCustomerService2Fill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

import faqData from "./faq.data";
import FaqCard from "./FaqCard";
function Faq() {
  return (
    <>
      <div className="flex justify-around items-center text-white max-md:flex-col w-full bg-gradient-to-r from-gray-700 to-slate-900 h-[420px]">
        <div className="bg-gradient-to-r from-stone-500 to-stone-700 rounded-2xl py-12 px-20 m-2">
          <div className="text-2xl font-bold ">
            24x7 Customer <br />
            Support
          </div>
          <div>Email Us</div>
          <div className="font-bold">suppot@cryptox.co</div>
          <div>Raise a ticket</div>
          <button className="font-bold">Click Here</button>
          <RiCustomerService2Fill className="size-16" />
        </div>

        <div className="w-[50vw] bg-gradient-to-r from-stone-500 to-stone-700 rounded-2xl py-16 px-14 m-2">
          <div className="text-2xl font-bold px-10"> FAQs</div>

          {open && (
            <div>
              {faqData.map((item, index) => {
                return (
                  <FaqCard question={item.question} answer={item.answer} />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default Faq;
