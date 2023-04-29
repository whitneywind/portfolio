import { HiOutlineMail } from "react-icons/hi";

const Email = () => {
  return (
    <div className="hidden md:block absolute left-9 top-[22rem] w-1/6 border-solid border-4 shadow-custom rounded-sm bg-vlGreen">
      <div className="bg-[#e6ab3d] border-solid border-b-4 h-10 flex place-items-center justify-center">
        <HiOutlineMail className="text-2xl" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <a
          href="mailto:whitneygould8@gmail.com"
          className="underline cursor-pointer mx-2 my-4"
        >
          Send me an email
        </a>
      </div>
    </div>
  );
};
export default Email;
