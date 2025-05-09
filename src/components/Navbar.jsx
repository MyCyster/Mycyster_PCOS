import myCystLogo from "../assets/LandingHome/MyCysterLogo.png";
import { useState } from "react";
import { Button } from "./shared/Button";
import { Link } from "react-router-dom";
import { Link as AnchorLink } from "react-scroll";
import { X, Menu } from "lucide-react";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar px-6 lg:px-20 shadow-md  relative z-50 py-6 lg:py-6  flex justify-between items-center -z-100 lg:shadow-none ">
      <div className="">
        <img
          src={myCystLogo}
          alt=""
          className="w-[110px] md:w-[150px] font-bold text-[#057B7B]"
        />
      </div>

      <div className="hidden border border-[#057B7B] py-4 px-10 rounded-full text-[14px] lg:text-[16px] md:flex gap-[1.5rem] lg:gap-[2rem] xl:gap-[4rem] text-[#057B7B] bg-gradient-to-r from-white via-[#E3F4F4] to-[#A0CFCF] ">
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
        <AnchorLink
          spy={true}
          smooth={true}
          to="pcosSolution"
          className="cursor-pointer"
          duration={500}
        >
          FAQs
        </AnchorLink>
        <a
          href="https://chat.whatsapp.com/K97c8rTtClXB85n7IgqeR4"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          Join the Community
        </a>
      </div>

      <Link to={"/auth/login"}>
        <Button className="bg-[#ffffff] hidden md:block text-[#057B7B] ">
          Login
        </Button>
      </Link>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-[32px] text-gray-700"
      >
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {isOpen && (
        <div className="absolute  px-6 shadow-sm top-full z-50  left-0 w-full bg-white  flex flex-col text-center justify-center items-center md:hidden  text-lg font-extrabold text-[#046363]">
          <div className="w-full border-b p-6">
            <AnchorLink
              spy={true}
              smooth={true}
              to="pcosSolution"
              className="cursor-pointer w-full text-center"
            >
              Features
            </AnchorLink>
          </div>

          <div className="w-full border-b p-6">
            <Link
              onClick={() =>
                window.open("https://medium.com/@mycyster", "_blank")
              }
              className="w-full text-center"
            >
              Resources
            </Link>
          </div>

          <div className="w-full border-b p-6">
            <AnchorLink
              spy={true}
              to="pcosSolution"
              smooth={true}
              duration={500}
              className="cursor-pointer w-full text-center"
            >
              FAQs
            </AnchorLink>
          </div>

          <div className="w-full border-b p-6">
            <a
              href="https://chat.whatsapp.com/K97c8rTtClXB85n7IgqeR4"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              Join the Community
            </a>
          </div>

          <div className="w-full p-6">
            <Link to={"/auth/login"}>
              <Button className="bg-[#057B7B] text-white w-full">Login</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
