import BrowserTop from "./BrowserTop";
import maps from "../assets/maps.jpg";

const Maps = () => {
  return (
    <div className="h-[100%] flex flex-col justify-center max-w-[1300px]">
      <div className="mt-6 w-5/6 lg:w-2/3 max-w-2xl self-center border-solid border-black border-4 shadow-custom rounded-sm bg-vlGreen mb-8">
        <BrowserTop />
        <a
          href={"https://www.spatialnode.net/whitneyg8"}
          target="_blank"
          className="flex items-center"
        >
          <div className="flex flex-col space-x-5 p-10 h-fit justify-center items-center">
            <div className="text-left pr-6 sm:pl-12 lg:pl-2">
              <h1 className="font-bold text-lg mb-4 text-center">
                Click to check out some of my maps:
              </h1>
            </div>
            <img src={maps} className="w-5/6 border-4 lg:border-black" />
          </div>
        </a>
      </div>
    </div>
  );
};
export default Maps;
