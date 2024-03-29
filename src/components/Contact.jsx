import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <div className="h-[96%] flex place-content-center">
      <div className="border-solid w-3/4 md:w-1/2 xl:w-1/3 h-3/4 mt-20 border-black border-4 shadow-custom rounded-sm bg-vlGreen">
        <div className="bg-emerald-500 border-black border-solid border-b-4 h-16 flex place-items-center justify-center">
          <h1 className="text-xl font-semibold px-6">Where You Can Find Me:</h1>
        </div>
        <div className="flex flex-col place-items-center h-4/5 place-content-around">
          <a
            href="mailto:whitneygould8@gmail.com"
            className="text-4xl leading-12 tracking-wide transition-all hover:scale-110 hover:-translate-x-1 group"
          >
            <HiOutlineMail className="inline group-hover:text-teal-900" />
            <p className="inline underline underline-offset-4 pl-2">Email</p>
          </a>
          <a
            href="https://github.com/whitneywind"
            className="text-4xl leading-12 tracking-wide transition-all hover:scale-110 hover:-translate-x-1 group"
          >
            <BsGithub className="inline group-hover:text-gray-800" />
            <p className="inline underline underline-offset-4 pl-2">GitHub</p>
          </a>
          <a
            href="https://www.linkedin.com/in/whitney-g-06062690/"
            target="_blank"
            className="text-4xl leading-12 tracking-wide transition-all hover:scale-110 hover:-translate-x-1 group"
          >
            <AiFillLinkedin className="inline group-hover:text-sky-900" />
            <p className="inline underline underline-offset-4 pl-2">LinkedIn</p>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Contact;
