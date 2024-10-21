import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#141c27] text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-lg font-bold mb-4">Get In Touch</h2>
        <p className="mb-4">Feel free to reach out for collaborations or inquiries!</p>
        
        <div className="flex space-x-6 mb-4">
          {/* Social Media Links */}
          <a
            href="https://www.linkedin.com/in/faizan-ali-%F0%9F%A7%91%F0%9F%8F%BB%E2%80%8D%F0%9F%92%BB-50aa1722a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-300 hover:text-yellow-500"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Faizan0Ali"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-300 hover:text-yellow-500"
          >
            GitHub
          </a>
          {/* <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-300 hover:text-yellow-500"
          >
            Twitter
          </a> */}
        </div>

        {/* Contact Information */}
        <div className="mb-4 text-center">
          <p className="text-sm">Email: <a href="syedfaizanali898@gmail.com" className="text-yellow-300 hover:text-yellow-500">syedfaizanali898@gmail.com</a></p>
          <p className="text-sm">Mobile: <span className="text-yellow-300">+91-7987515031</span></p>
        </div>

        <p className="text-sm">© {new Date().getFullYear()} Syed Faizan Ali. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
