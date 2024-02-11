import React from "react";

function Landing() {
  return (
    <>
      <div className="w-full h-screen bg-zinc-900 pt-1">
        <div className="textstructure mt-52 px-20">
          {["We Create", " Eye Opening", " Presentations"].map(
            (item, index) => {
              return (
                <div className="masker">
                  <h1 className="uppercase text-[6vw] leading-[5vw] tracking-tighter font-['Founders_Grotesk'] font-medium">
                    {item}
                  </h1>
                </div>
              );
            }
          )}
        </div>
      </div>
    </>
  );
}

export default Landing;
