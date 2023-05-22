"use client";

import React, { useEffect, useState } from "react";
import { RiAccountCircleFill } from "react-icons/ri";
import Button from "../utils/nav_button";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    const navIcon = document.getElementById("nav-icon");
    navIcon?.classList.toggle("open");
    const navbarLinks = document.getElementById("navbarLinks");
    navbarLinks?.classList.toggle("hidden");
  };
  useEffect(() => {}, [open]);
  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-secondary-blue text-white">
      <Button>Logo</Button>
      <div className="flex items-center  ">
        <div className="hidden md:flex">
          <ul className="flex space-x-8">
            <li>
              <a href="#" className="text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Achievement
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                AboutUs
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="signup md:flex space-x-4 items-center hidden">
        <RiAccountCircleFill className="text-4xl" />
        <Button>Join Now</Button>
      </div>
      <div className="md:hidden">
        <button id="nav-icon" className="" onClick={handleClick}>
          <span className="bg-white"></span>
          <span className="bg-white"></span>
          <span className="bg-white"></span>
        </button>
        <ul
          id="navbarLinks"
          className="hidden absolute top-0 left-0 w-full bg-secondary-blue mt-12 py-2 px-4 text-center"
        >
          <li>
            <a href="#" className="block text-white py-2">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="block text-white py-2">
              About
            </a>
          </li>
          <li>
            <a href="#" className="block text-white py-2">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="block text-white py-2">
              Contact
            </a>
          </li>
          <div className="signup flex space-x-4 items-center justify-center">
            <RiAccountCircleFill className="text-4xl" />
            <Button>Join Now</Button>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
