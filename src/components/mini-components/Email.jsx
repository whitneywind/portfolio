import { HiOutlineMail } from "react-icons/hi";

const Email = () => {
  return (
    <div className="hidden md:block absolute left-3 2xl:left-[18%] top-[56%] w-1/4 max-w-[300px] border-solid border-4 border-black shadow-custom rounded-sm bg-vlGreen">
      <div className="bg-sky-500 border-black border-solid border-b-4 h-10 flex place-items-center justify-center">
        <HiOutlineMail className="text-2xl" />
      </div>
      <div className="flex flex-col py-6 justify-center items-center">
        <a
          href="mailto:whitneygould8@gmail.com"
          className="underline cursor-pointer my-4 text-lg"
        >
          Send me an email
        </a>
      </div>
    </div>
  );
};
export default Email;
