import React from "react";

function About() {
  return (
    <>
      <div className="w-full py-20 px-24 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl ">
        <h1 className="text-6xl text-black   leading-[3.4vw] font-['Neue_Montreal tracking-tight']">
          Ochi is a strategic partner for fast-grow­ing tech businesses that
          need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire
          great peo­ple.
        </h1>
        <div className="w-full flex gap-5 border-t-[1px] pt-20 mt-20 border-[#a1b562]">
          <div className="w-1/2">
            <div className="text-7xl text-black ">Our Approach</div>
            <button className="flex uppercase gap-10 itms-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white">
              Read More
              <div className="w-2 h-2 mt-2 bg-zinc-100 rounded-full"></div>
            </button>
          </div>
          <div className="w-1/2 h-[70vh] rounded-4xl ">
            <img
              src="https://images.unsplash.com/photo-1528213049955-adbe6fe1dcbd?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Description of the image"
              className="w-full  h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
