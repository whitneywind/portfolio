import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <div className="h-[96%] flex place-content-center">
      <div className="border-solid w-3/4 md:w-1/2 h-1/2 mt-24 border-black border-4 shadow-custom rounded-sm bg-vlGreen">
        <div className="bg-sky-300 border-black border-solid border-b-4 h-10 flex place-items-center justify-center">
          <h1 className="text-xl font-semibold px-6">Where You Can Find Me:</h1>
        </div>
        <div className="flex flex-col place-items-center h-4/5 place-content-around">
          <a
            href="mailto:whitneygould8@gmail.com"
            className="text-4xl leading-12 tracking-wide"
          >
            <HiOutlineMail className="inline" />
            <p className="inline underline underline-offset-4 pl-2">Email</p>
          </a>
          <a href="" className="text-4xl leading-12 tracking-wide">
            <BsGithub className="inline" />
            <p className="inline underline underline-offset-4 pl-2">GitHub</p>
          </a>
          <a
            href="https://www.linkedin.com/in/whitney-gould-06062690/"
            target="_blank"
            className="text-4xl leading-12 tracking-wide"
          >
            <AiFillLinkedin className="inline" />
            <p className="inline underline underline-offset-4 pl-2">LinkedIn</p>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Contact;
