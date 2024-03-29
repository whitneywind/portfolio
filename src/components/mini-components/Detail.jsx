import { RiComputerLine } from "react-icons/ri";

const Detail = () => {
  return (
    <div className="absolute md:right-8 xl:right-[10%] 2xl:right-[26%] top-[40%] md:top-[28%] w-3/5 md:w-1/5 md:max-w-[200px] border-solid border-4 border-black shadow-custom rounded-sm bg-vlGreen">
      <div className="bg-orange-500 border-black border-solid border-b-4 h-10 flex place-items-center justify-center">
        <RiComputerLine className="text-2xl" />
      </div>
      <div className="flex flex-col justify-center items-center py-6">
        <p className="py-4 text-center mx-2 text-xl px-1 lg:text-2xl">
          Full-stack developer specializing in React and React Native
        </p>
      </div>
    </div>
  );
};
export default Detail;
