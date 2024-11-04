import { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-5 md:mb-[3rem] mt-5 md:mt-[3rem] w-2/3 max-w-[1000px] self-center border-black border-solid border-4 shadow-custom rounded-sm">
      <div
        className={`${
          isOpen ? "bg-lightGreen" : "bg-lightBlue"
        } border-solid border-black border-b-4 h-10 flex text-lg place-items-center px-1 justify-center cursor-pointer`}
        onClick={toggleDropdown}
      >
        <p className="hidden sm:block">Some technologies I work with:</p>
        <p className="sm:hidden">Technologies:</p>
        <span className="ml-2 mt-1">{isOpen ? "▲" : "▼"}</span>
      </div>

      {isOpen && (
        <div className="grid md:grid-cols-2 sm:content-center">
          <span>JavaScript TypeScript</span>
          <span>React</span>
          <span>Python</span>
          <span>React Native</span>
          <span>ArcGIS Suite</span>
          <span>SQL</span>
          <span>HTML CSS</span>
          <span>Leaflet</span>
          <span>MongoDB Firebase</span>
          <span>Mapbpox</span>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
