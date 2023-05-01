import { AiFillLinkedin } from "react-icons/ai";

const LinkedIn = () => {
  return (
    <div className="hidden md:block absolute left-6 top-[39rem] w-1/5 border-solid border-black border-4 shadow-custom rounded-sm bg-vlGreen">
      <div className="bg-emerald-300 border-black border-solid border-b-4 h-10 flex place-items-center justify-center">
        <AiFillLinkedin className="text-2xl" />
      </div>
      <div className="flex flex-col py-2 justify-center items-center">
        <a
          className="my-4 text-center mx-2 underline cursor-pointer"
          href="https://www.linkedin.com/in/whitney-gould-06062690/"
          target="_blank"
        >
          View on LinkedIn
        </a>
      </div>
    </div>
  );
};
export default LinkedIn;
