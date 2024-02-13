import React from "react";
import { motion } from "framer-motion";

function Morquee() {
  return (
    <>
      <div className="w-full  h-[19.7vw] rounded-tl-3xl rounded-tr-3xl py-10 bg-[#004D43] -mb-[1vw] mt-10">
        <div className="text  border-t-2 border-b-2 border-zinc-300 flex gap-9.9 whitespace-nowrap">
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
            className="text-[7.179vw] mt-11 mb-14 leading-none font-['Founders_Grotesk'] font-semibold uppercase"
          >
            we are ochi
          </motion.h1>
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
            className="text-[7.179vw] mt-11 mb-14 leading-none font-['Founders_Grotesk'] font-semibold uppercase"
          >
            we are ochi
          </motion.h1>
        </div>
      </div>
    </>
  );
}

export default Morquee;
