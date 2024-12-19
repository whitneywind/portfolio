import "./App.css";
import Maps from "./components/Maps";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useState } from "react";
import BrowserTop from "./components/BrowserTop";
import MapBackground from "./components/MapBackground";
import Intro from "./components/Intro";

function App() {
  const [displayed, setDisplayed] = useState("home");

  return (
    <div className="relative w-[100vw] min-h-[100vh] h-[120%]">
      <MapBackground />
      <main className="py-[10%] md:py-[4%] text-center flex items-center justify-center">
        <div className="z-10 mx-[10vw] border-black border-solid border-4 shadow-custom rounded-sm bg-vlGreen flex flex-col justify-center">
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
                onClick={() => setDisplayed("maps")}
              >
                Maps
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
          {displayed === "projects" && <Projects />}
          {displayed === "maps" && <Maps />}
          {displayed === "contact" && <Contact />}
        </div>
      </main>
    </div>
  );
}

export default App;
