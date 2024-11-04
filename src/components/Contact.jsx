import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <div className="flex place-content-center">
      <div className="border-solid w-3/4 md:w-1/2 h-3/4 my-[3rem] border-black border-4 shadow-custom rounded-sm bg-vlGreen">
        <div className="bg-scrub border-black border-solid border-b-4 h-16 flex place-items-center justify-center">
          <h1 className="text-xl font-semibold px-6">Where You Can Find Me:</h1>
        </div>
        <div className="flex flex-col place-items-center place-content-around space-y-10 mb-6 mt-5">
          <a
            href="mailto:whitneygould8@gmail.com"
            className="text-6xl leading-12 tracking-wide transition-all hover:scale-110 hover:-translate-x-1 group"
          >
            <HiOutlineMail className="inline group-hover:text-teal-900" />
          </a>
          <a
            href="https://github.com/whitneywind"
            className="text-6xl leading-12 tracking-wide transition-all hover:scale-110 hover:-translate-x-1 group"
          >
            <BsGithub className="inline group-hover:text-gray-800" />
          </a>
          <a
            href="https://www.linkedin.com/in/whitney-g-06062690/"
            target="_blank"
            className="text-6xl leading-12 tracking-wide transition-all hover:scale-110 hover:-translate-x-1 group"
          >
            <AiFillLinkedin className="inline group-hover:text-sky-900" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Contact;
