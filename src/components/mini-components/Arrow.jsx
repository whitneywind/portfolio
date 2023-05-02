import { BsArrowRightCircle } from "react-icons/bs";

const Arrow = ({
  updateDisplay,
  top,
  smTop,
  mdTop,
  lgTop,
  left,
  right,
  direction,
}) => {
  return (
    <BsArrowRightCircle
      className={`absolute top-[${top}] sm:top-[${smTop}] md:top-[${mdTop}] lg:top-[${lgTop}] right-[${right}] left-[${left}] text-6xl bg-yellow-200 rounded-full cursor-pointer z-100`}
      onClick={() => updateDisplay(direction)}
    />
  );
};
export default Arrow;
