import React from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/solid';

const Contact = () => {
  return (
    <div className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem] text-white">
      <p className="heading text-center">
        Get in <span className="text-yellow-400">Touch</span>
      </p>
      
      <div className="w-[80%] mx-auto mt-[4rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]">
        {/* Contact Information */}
        <div className="bg-red-700 p-[2rem] text-center hover:scale-110 transform transition-all duration-300 hover:-rotate-6">
          <EnvelopeIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
          <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">Email</h1>
          <p className="text-[15px] text-[#d3fae8] font-normal">
            syedfaizanali898@gmail.com
          </p>
        </div>
        <div className="bg-orange-700 p-[2rem] text-center hover:scale-110 transform transition-all duration-300">
          <PhoneIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
          <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">Phone</h1>
          <p className="text-[15px] text-[#d3fae8] font-normal">
            +91 7987515031
          </p>
        </div>
        <div className="bg-blue-700 p-[2rem] text-center hover:scale-110 transform transition-all duration-300 hover:rotate-6">
          <MapPinIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
          <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">Location</h1>
          <p className="text-[15px] text-[#d3fae8] font-normal">
           Street-  Juna bilaspur karbala road,<br/>
            Bilaspur Chhattisgarh, India
          </p>
        </div>
      </div>

      {/* Contact Form
      <div className="w-[80%] mx-auto mt-[5rem] bg-[#1a1a1a] p-[2rem] md:p-[4rem] rounded-md shadow-lg">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-[2rem]">
          <div className="md:col-span-2">
            <label htmlFor="name" className="block text-yellow-400 mb-[0.5rem]">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-[1rem] rounded-md bg-[#121212] text-white border border-[#55e6a5] focus:outline-none focus:ring focus:ring-[#55e6a5]"
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="email" className="block text-yellow-400 mb-[0.5rem]">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-[1rem] rounded-md bg-[#121212] text-white border border-[#55e6a5] focus:outline-none focus:ring focus:ring-[#55e6a5]"
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-yellow-400 mb-[0.5rem]">Message</label>
            <textarea
              id="message"
            //   rows="5"
              className="w-full p-[1rem] rounded-md bg-[#121212] text-white border border-[#55e6a5] focus:outline-none focus:ring focus:ring-[#55e6a5]"
            />
          </div>

          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-yellow-400 text-black uppercase font-semibold px-[2rem] py-[1rem] rounded-md hover:bg-yellow-500 transform transition-all duration-300"
            >
              Submit
            </button>
          </div>
        </form> */}
      {/* </div> */}
    </div>
  );
};

export default Contact;
