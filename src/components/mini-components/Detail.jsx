import { RiComputerLine } from "react-icons/ri";

const Detail = () => {
  return (
    <div className="hidden md:block absolute right-6 top-[23rem] w-1/5 border-solid border-4 border-black shadow-custom rounded-sm bg-vlGreen">
      <div className="bg-[#d29f91] border-black border-solid border-b-4 h-10 flex place-items-center justify-center">
        <RiComputerLine className="text-2xl" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="my-4 text-center mx-2">
          Full-stack with an emphasis on front-end development
        </p>
      </div>
    </div>
  );
};
export default Detail;
