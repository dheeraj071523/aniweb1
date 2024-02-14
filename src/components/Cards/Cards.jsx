import React from "react";

function Cards() {
  return (
    <>
      <div className="w-full h-screen bg-zinc-900 flex items-center gap-5 px-32">
        <div className="cardcontainer h-[50vh] w-1/2">
          <div className="card relative flex justify-center items-center rounded-xl w-full h-full bg-[#004D43]">
            <img
              className="w-32"
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            />
            <button className="absolute px-5 py-1 rounded-full border-2 left-10 bottom-10">
              &copy;2019
            </button>
          </div>
        </div>
        <div className="cardcontainer   flex gap-5 h-[50vh] w-1/2">
          <div className="card flex justify-center items-center rounded-xl w-1/2 h-full bg-[#9ebab6]">
            <img
              className="w-32"
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            />
          </div>
          <div className="card flex justify-center items-center rounded-xl w-1/2 h-full bg-[#44f7e5]">
            <img
              className="w-32"
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
