import { CodeBracketSquareIcon, CommandLineIcon, RocketLaunchIcon } from "@heroicons/react/16/solid";
import React from "react";

const Services = () => {
  return (
    <div id="services" className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem] ">
      <p className="heading">
        My <span className="text-yellow-400">Services & Expertise</span>
      </p>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
       w-[80%] mx-auto items-center gap-[3rem] mt-[4em] text-white"
      >
        <div>
          <div
            className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6
              uppercase font-semibold text-center p-[2rem]"
               >
            <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Frontend
            </h1>
            <p className="text-[15px] text-[#d3fae8] font-normal">
            Proficient in HTML, CSS, and Tailwind CSS for responsive design. 
            Skilled in React.js and Next.js for dynamic web applications,
             and React Native for cross-platform mobile development, ensuring a seamless user experience.
            </p>
          </div>
        </div>
        <div>
          <div
            className="bg-orange-700 hover:scale-110 transform transition-all duration-300
              uppercase font-semibold text-center p-[2rem]"
               >
            <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Backend
            </h1>
            <p className="text-[15px] text-[#d3fae8] font-normal">
            Experienced in Node.js and Express for building robust server-side applications.
             Proficient in MongoDB for database management,
              and Next.js for server-side rendering and API routes, 
              ensuring efficient data handling and optimal performance.
            </p>
          </div>
        </div>
        <div>
          <div
            className="bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6
              uppercase font-semibold text-center p-[2rem]"
               >
            <CommandLineIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Fullstack
            </h1>
            <p className="text-[15px] text-[#d3fae8] font-normal">
            Skilled in developing full-stack applications using the MERN stack, 
            integrating frontend technologies like React.js and
             Next.js with backend frameworks like Node.js and Express.
              Proficient in database management with MongoDB, 
              delivering seamless user experiences and efficient data handling.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;
