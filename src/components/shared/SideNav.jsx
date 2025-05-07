import { useState } from "react";
import myCystLogo from "../../assets/LandingHome/MyCysterLogo.png";
import { HiMiniBars3 } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", path: "/dashboard" },
  { name: "Dietary Planner", path: "/dietaryplanner" },
  { name: "Mood Tracker", path: "/moodtracker" },
  { name: "Profile", path: "/profile" },
];
const getActiveLink = ({ isActive }) => {
  return `font-manrope px-2 text-base  ${
    isActive
      ? "text-[#FFFFFF] bg-[#069494] py-2  rounded-md font-bold"
      : "font-medium text-[#000000] "
  }`;
};
export const SideNav = () => {
  const [isopen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <aside className="relative flex w-full flex-row justify-between items-center mt-8 px-6 lg:flex-col lg:border-r lg:justify-normal lg:pt-8 lg:mt-0">
      {/* logo */}
      <div>
        <img src={myCystLogo} alt="" className=" " />
      </div>
      {/* mobile nav */}
      <div className=" lg:hidden ">
        <button onClick={handleToggle}>
          <HiMiniBars3 size={24} />
        </button>
        {isopen && (
          <ul className="absolute right-0 mt-3 p-4 bg-white shadow-lg rounded-md flex flex-col gap-4 z-50">
            {links.map((navs, index) => (
              <li key={index} className="w-full">
                <a
                  href={navs.path}
                  className="text-black  hover:text-[#069494]"
                >
                  {navs.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      <nav className="hidden lg:flex lg:flex-col lg:gap-y-12 lg:mt-8 ">
        {links.map((link) => (
          <NavLink key={link.path} to={link.path} className={getActiveLink}>
            {link.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};
