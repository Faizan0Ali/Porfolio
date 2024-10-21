import { TypeAnimation } from "react-type-animation";

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Mern Developer",
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        "Web Developer",
        1500,
        "Coder",
        1500,
        "programmer",
        1500,
      ]}
      wrapper="span"
      speed={50}
      className="text-[2rem] md:text-[3rem] text-[#55e6a5] font-bold uppercase"
      repeat={Infinity}
    />
  );
};

export default TextEffect