import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";

function Eyes() {
  const [Rotate, setRotate] = useState(0);
  const locomotiveScroll = new LocomotiveScroll();

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mousex = e.clientX;
      let mousey = e.clientY;

      var deltaX = mousex - window.innerWidth / 2;
      var deltaY = mousey - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });
  return (
    <>
      <div className="eyes w-full h-screen overflow-hidden">
        <div
          // data-scroll
          //data-scroll-speed="-.7"
          className="relative w-full h-full bg-center bg-cover bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]"
        >
          <div className="flex gap-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  ">
            <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-white">
              <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900  ">
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${Rotate}deg)`,
                  }}
                  className=" absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  line w-full h-10"
                >
                  <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-white">
              <div className="w-2/3 h-2/3 rounded-full bg-zinc-900 relative">
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${Rotate}deg)`,
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10"
                >
                  <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Eyes;
