import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import Morquee from "./components/Morquee/Morquee";
import About from "./components/About/About";
import Eyes from "./components/Eyes/Eyes";
import Feature from "./components/Feature/Feature";

function App() {
  return (
    <>
      <div className=" w-full min-h-screen  text-white bg-zinc-900">
        <Navbar />
        <Landing />
        <Morquee />
        <About />
        <Eyes />
        <Feature />
      </div>
    </>
  );
}

export default App;
