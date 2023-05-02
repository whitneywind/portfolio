import { RiComputerLine } from "react-icons/ri";

const Detail = () => {
  return (
    <div className="hidden md:block absolute md:right-8 2xl:right-[12rem] top-[29rem] 2xl:top-[11rem] md:top-[10rem] w-3/5 md:w-1/5 border-solid border-4 border-black shadow-custom rounded-sm bg-vlGreen">
      <div className="bg-[#d29f91] border-black border-solid border-b-4 h-10 flex place-items-center justify-center">
        <RiComputerLine className="text-2xl" />
      </div>
      <div className="flex flex-col justify-center items-center py-6">
        <p className="py-4 text-center mx-2 text-xl px-1 lg:text-2xl">
          Full-stack developer with an emphasis on front-end development
        </p>
      </div>
    </div>
  );
};
export default Detail;
