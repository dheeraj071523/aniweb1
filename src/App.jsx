import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";

function App() {
  return (
    <>
      <div className=" w-full h-full  text-white">
        <Navbar />
        <Landing />
      </div>
    </>
  );
}

export default App;
