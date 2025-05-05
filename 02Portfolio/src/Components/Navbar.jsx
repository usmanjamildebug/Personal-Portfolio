
import React from "react";
import logo from "../assets/logo2.png";
import { FaLinkedin, FaGithub, FaSquare, FaDownload } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20 hover:bg-purple-700" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://docs.google.com/document/d/1UdV7SAliaD4ZEINKIhuOL1otNyX1xexq-1CxFCp7Dyw/edit?usp=drive_link"
          download
          className="hover:text-purple-900"
        >
          <FaDownload />
        </a>
        <a
          href="https://www.linkedin.com/in/usman-jamil-"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-900"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/usmanjamildebug"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-900"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
