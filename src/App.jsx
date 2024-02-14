import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import Morquee from "./components/Morquee/Morquee";
import About from "./components/About/About";
import Eyes from "./components/Eyes/Eyes";
import Feature from "./components/Feature/Feature";
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <div className=" w-full min-h-screen  text-white bg-zinc-900">
        <Navbar />
        <Landing />
        <Morquee />
        <About />
        <Eyes />
        <Feature />
        <Cards />
        <Footer />
      </div>
    </>
  );
}

export default App;
