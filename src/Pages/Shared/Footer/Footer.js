import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaRegCopyright,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  const footerNav = (
    <>
      <li className="font-bold capitalize text-xl underline py-8">
        <Link to={`/about`}>About</Link>
      </li>
      <li className="font-bold capitalize text-xl underline py-8">
        <Link to={`/resume`}>Resume</Link>
      </li>
      <li className="font-bold capitalize text-xl underline py-8">
        <Link to={`/blogs`}>blogs</Link>
      </li>
    </>
  );

  const socialIcons = (
    <>
      <li className="text-xl hover:animate-bounce">
        <FaLinkedin className="font-bold text-4xl text-sky-700" />
      </li>
      <li className="hover:animate-bounce">
        <FaFacebook className="font-bold text-4xl text-sky-500" />
      </li>
      <li className="hover:animate-bounce">
        <FaGithub className="font-bold text-4xl text-black" />
      </li>
      <li className="hover:animate-bounce">
        <FaTwitter className="font-bold text-4xl text-sky-400" />
      </li>
      <li className="hover:animate-bounce">
        <FaInstagram className="font-bold text-4xl text-red-400" />
      </li>
    </>
  );

  return (
    <div className="flex items-center justify-center">
      <div>
        <div className="w-full">
          <ul className="flex space-x-9 justify-center">{footerNav}</ul>
        </div>
        <div className="w-full">
          <ul className="flex space-x-9 justify-center">{socialIcons}</ul>
        </div>
        <div className="font-bold my-5 flex items-center justify-center space-x-4">
          <FaRegCopyright className="font-bold text-xl" />
          <span>Euhan Sarkar. Joy Bangla</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
