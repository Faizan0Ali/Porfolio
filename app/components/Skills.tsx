import React from "react";

const Skills = () => {
  return (
    <div className="bg-[#121121] pt-[2rem]">
      <div className="heading">
        <p className="text-white">
          Experience & <span className="text-yellow-400">Skills</span>
        </p>
      </div>

      <div className="text-white mt-[2rem] flex text-[20px] md:text-[40px] grid grid-cols-1 md:grid-cols-2 px-10 md:px-60 gap-2">
        {/* Internship */}
        <div className="mt-2">
          <div className="border border-current inline-block p-3 border-[#55e6a5] ">
            <div className="text-[#55e6a5] text-[20px]">6 months</div>
          </div>
          <div className="mt-2 text-[30px]">Backend Trainee</div>
          <div className="mt-2 text-[17px] font-normal text-slate-400">
            Function Up
          </div>
          <div className="mt-2 text-[15px] font-normal text-slate-400">
            Gained extensive practical experience in backend development with
            Node.js, utilizing Express.js for building robust and scalable
            RESTful APIs. Developed proficiency in MongoDB for database
            management, focusing on schema design, data modeling, and query
            optimization. Acquired hands-on skills in implementing
            authentication and authorization mechanisms to secure APIs and
            ensure safe data access. Additionally, engaged in testing and
            debugging processes, enhancing application performance and
            reliability, while collaborating in a team environment to deliver
            high-quality software solutions.
          </div>
        </div>

        {/* Freelancing */}
        <div className="mt-2">
          <div className="border border-current inline-block p-3 border-[#55e6a5] ">
            <div className="text-[#55e6a5] text-[20px]">8 months</div>
          </div>
          <div className="mt-2 text-[30px]">Full Stack Software Developer</div>
          <div className="mt-2 text-[17px] font-normal text-slate-400">
            Freelancing (Direct Clients)
          </div>
          <div className="mt-2 text-[15px] font-normal text-slate-400">
            Specialized in the MERN stack, encompassing MongoDB, Express.js,
            React.js, and Node.js, alongside expertise in Next.js and React
            Native for developing dynamic, responsive web and mobile
            applications. Demonstrated proficiency in leveraging the strengths
            of each technology to create seamless user experiences, optimize
            performance, and ensure cross-platform compatibility. Successfully
            built scalable applications that effectively integrate backend
            services with intuitive front-end interfaces, adapting to user needs
            and enhancing overall functionality.
          </div>
        </div>
      </div>

      <div className="bg-[#121121] pt-[2rem] pb-[4rem]"></div>
    </div>
  );
};

export default Skills;
