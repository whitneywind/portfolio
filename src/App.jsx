import "./App.css";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useState } from "react";
import BrowserTop from "./components/BrowserTop";

function App() {
  const [displayed, setDisplayed] = useState("home");

  return (
    <main className="text-center w-screen h-screen flex items-center justify-center">
      <div className="w-5/6 h-[90%] border-black border-solid border-4 shadow-custom rounded-sm bg-vlGreen flex flex-col justify-center max-w-[1000px] max-h-[800px]">
        <div className="border-black border-solid bg-lGreen border-b-4 h-12 grid grid-cols-8">
          <nav className="col-span-7 flex place-content-around ml-10">
            <button
              className="text-lg md:text-3xl font-semibold hover:underline"
              onClick={() => setDisplayed("home")}
            >
              Home
            </button>
            <button
              className="text-lg md:text-3xl font-semibold hover:underline"
              onClick={() => setDisplayed("projects")}
            >
              Projects
            </button>
            <button
              className="text-lg md:text-3xl font-semibold hover:underline"
              onClick={() => setDisplayed("about")}
            >
              About
            </button>
            <button
              className="text-lg md:text-3xl font-semibold hover:underline"
              onClick={() => setDisplayed("contact")}
            >
              Contact
            </button>
          </nav>
          <BrowserTop noBorder={true} />
        </div>
        {displayed === "home" && <Intro />}
        {displayed === "about" && <About />}
        {displayed === "projects" && <Projects />}
        {displayed === "contact" && <Contact />}
      </div>
    </main>
  );
}

export default App;
