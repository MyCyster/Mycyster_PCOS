import myCystLogo from "../assets/LandingHome/MyCysterLogo.png";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white py-6 px-[2rem] lg:px-[5rem] flex justify-between items-center ">
      <div className="">
        <img
          src={myCystLogo}
          alt=""
          className="w-[110px] md:text-[20px] font-bold text-[#057B7B]"
        />
      </div>

      <div className="hidden border border-[#057B7B] py-4 px-10 rounded-full text-[14px] lg:text-[16px] md:flex gap-[2rem] lg:gap-[4rem] xl:gap-[7rem] text-[#057B7B] bg-gradient-to-r from-white via-[#E3F4F4] to-[#A0CFCF] ">
        <a href="#features" className="">
          Features
        </a>
        <a href="#resources" className="">
          Resources
        </a>
        <a href="#community" className="">
          Join the Community
        </a>
      </div>
      <button className="bg-[#057B7B] text-[#ffffff] rounded-full px-6 py-3 rounded-md hidden md:block text-[14px]">
        Get Started
      </button>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-[32px] text-gray-700"
      >
        ☰
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center md:hidden">
          <a
            href="#features"
            className="py-2 text-gray-700 hover:text-teal-600"
          >
            Features
          </a>
          <a
            href="#resources"
            className="py-2 text-gray-700 hover:text-teal-600"
          >
            Resources
          </a>
          <a
            href="#community"
            className="py-2 text-gray-700 hover:text-teal-600"
          >
            Join the Community
          </a>
          <button className="bg-teal-500 text-white px-4 py-2 rounded-md mt-2">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};
