import "./App.css";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useState, useEffect } from "react";
import BrowserTop from "./components/BrowserTop";
import { BsArrowRightCircle } from "react-icons/bs";

function App() {
  const [displayed, setDisplayed] = useState("home");

  // useEffect(() => {
  //   let timeoutId;
  //   const handleScroll = (event) => {
  //     if (event instanceof WheelEvent && event.deltaY > 0) {
  //       clearTimeout(timeoutId);
  //       timeoutId = setTimeout(() => {
  //         if (displayed === "home") {
  //           setDisplayed("about");
  //         } else if (displayed === "about") {
  //           setDisplayed("projects");
  //         } else if (displayed === "projects") {
  //           setDisplayed("contact");
  //         } else if (displayed === "contact") {
  //           setDisplayed("home");
  //         }
  //       }, 1000);
  //     }
  //   };

  //   // disable scroll behavior using CSS
  //   document.body.style.overflow = "hidden";

  //   // listen for scroll events
  //   document.addEventListener("wheel", handleScroll);

  //   // clean up event listener and re-enable scroll behavior on unmount
  //   return () => {
  //     document.body.style.overflow = "auto";
  //     document.removeEventListener("wheel", handleScroll);
  //   };
  // }, [displayed]);

  return (
    <main className="text-center w-screen h-screen flex items-center justify-center">
      <div className="w-5/6 h-[90%] border-black border-solid border-4 shadow-custom rounded-sm bg-vlGreen flex flex-col justify-center max-w-[1100px] max-h-[800px]">
        <div className="border-black border-solid bg-lGreen border-b-4 h-10 grid grid-cols-8">
          <nav className="col-span-7 flex place-content-around ml-10">
            <button
              className="text-lg md:text-3xl font-bold hover:underline"
              onClick={() => setDisplayed("home")}
            >
              Home
            </button>
            <button
              className="text-lg md:text-3xl font-bold hover:underline"
              onClick={() => setDisplayed("about")}
            >
              About
            </button>
            <button
              className="text-lg md:text-3xl font-bold hover:underline"
              onClick={() => setDisplayed("projects")}
            >
              Projects
            </button>
            <button
              className="text-lg md:text-3xl font-bold hover:underline"
              onClick={() => setDisplayed("contact")}
            >
              Contact
            </button>
          </nav>
          <BrowserTop />
        </div>
        {displayed === "home" && <Intro />}
        {displayed === "about" && <About />}
        {displayed === "projects" && <Projects />}
        {displayed === "contact" && <Contact />}
        {/* <BsArrowRightCircle
          className={`absolute top-[40%] right-[30%] text-6xl bg-yellow-200 rounded-full cursor-pointer z-100`}
          onClick={() => setDisplayed("about")}
        /> */}
      </div>
    </main>
  );
}

export default App;
