import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function Landing() {
  return (
    <>
      <div className="w-full h-screen bg-zinc-900 pt-1">
        <div className="textstructure mt-52 px-20">
          {["We Create", " Eye Opening", " Presentations"].map(
            (item, index) => {
              return (
                <div className="masker">
                  <div className="w-fit flex   items-center overflow-hidden ">
                    {index === 1 && (
                      <div className="ml-[1vw] mr-[1vw] w-[8vw] h-[4vw] rounded-md bg-red-500 "></div>
                    )}
                    <h1 className="uppercase text-[6vw] leading-[5vw] tracking-tighter font-['Founders_Grotesk'] font-medium">
                      {item}
                    </h1>
                  </div>
                </div>
              );
            }
          )}
        </div>
        <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center  py-5 px-20">
          {[
            "For public and private companies",
            "From the first pitch to the last pitch IPO",
          ].map((item, index) => (
            <p className="text-md font-light tracking-tight leading-none ">
              {item}
            </p>
          ))}
          <div className="start flex justify-center gap-5">
            <div className="px-4 py-2 border-[2px] border-zinc-500 font-light text-sm capitalize rounded-full">
              start the project
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full  border-[2px] border-zinc-500 ">
              <span className="rotate-[45deg]">
                <FaArrowUpLong />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
