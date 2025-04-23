import myCystLogo from "../assets/LandingHome/MyCysterLogo.png";
import { useState } from "react";
import { Button } from "./shared/Button";
import { Link } from "react-router-dom";
import { Link as AnchorLink } from "react-scroll";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar relative z-50 py-6 px-[2rem] lg:px-[5rem] flex justify-between items-center -z-100 ">
      <div className="">
        <img
          src={myCystLogo}
          alt=""
          className="w-[110px] md:w-[150px] font-bold text-[#057B7B]"
        />
      </div>

      <div className="hidden border border-[#057B7B] py-4 px-10 rounded-full text-[14px] lg:text-[16px] md:flex gap-[1.5rem] lg:gap-[4rem] xl:gap-[7rem] text-[#057B7B] bg-gradient-to-r from-white via-[#E3F4F4] to-[#A0CFCF] ">
        <AnchorLink
          spy={true}
          smooth={true}
          to="pcosSolution"
          className="cursor-pointer"
        >
          Features
        </AnchorLink>
        <a
          href="https://medium.com/@mycyster"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          Resources
        </a>
        <a
          href="https://chat.whatsapp.com/K97c8rTtClXB85n7IgqeR4"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          Join the Community
        </a>
      </div>

      <Link to={"/auth/signup"}>
        <Button className="bg-[#ffffff] hidden md:block text-[#057B7B] ">
          Get Started
        </Button>
      </Link>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-[32px] text-gray-700"
      >
        ☰
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center md:hidden">
          <AnchorLink
            spy={true}
            smooth={true}
            to="pcosSolution"
            className="cursor-pointer py-1 sm:py-2 text-gray-700 hover:text-teal-600"
          >
            Features
          </AnchorLink>

          <Link
            onClick={() =>
              window.open("https://medium.com/@mycyster", "_blank")
            }
            className="py-1 sm:py-2 text-gray-700 hover:text-teal-600"
          >
            Resources
          </Link>

          <Link className="py-1 sm:py-2 text-gray-700 hover:text-teal-600">
            Join the Community
          </Link>

          <Link to={"/auth/signup"}>
            <Button className="my-2 px-7 py-[10px] sm:py-2 bg-[#057B7B] text-[#ffffff]">
              Get Started
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};
