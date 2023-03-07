import React from "react";
import { Link } from "react-scroll";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="p-4 bg-sky-500 shadow md:flex md:items-center md:justify-between md:p-6">
      <span className="text-sm text-black-500 sm:text-center dark:text-black-400">
        © 2023 Amaan Systems . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-black-500 dark:text-black-400 sm:mt-0">
        <li>
          <Link to="home" className="mr-4 hover:underline md:mr-6 ">
            Home
          </Link>
        </li>
        <li>
          <Link to="about" className="mr-4 hover:underline md:mr-6">
            About
          </Link>
        </li>
        <li>
          <Link to="pricing" className="mr-4 hover:underline md:mr-6">
            Pricing
          </Link>
        </li>
        <li>
          <Link to="support" className="hover:underline pr-2">
            Support
          </Link>
        </li>
        <li>
          <Link to="contact" className="hover:underline">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
