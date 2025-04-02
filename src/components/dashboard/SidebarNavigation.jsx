import myCystLogo from "../../assets/LandingHome/MyCysterLogo.png"
import { HiMiniBars3 } from "react-icons/hi2";
import { NavLink } from 'react-router-dom'

const links = [
  {name: "Home", path: "/dashboard"},
  {name: "Dietary Planner", path: "/dietaryplanner"},
  {name: "Mood Tracker", path: "/moodtracker"},
  {name: "PCOS Resources", path: "/pcosresources"},
  {name: "Profile", path: "/profile"}
]
const getActiveLink = ({isActive}) =>{
  return(
  `font-manrope px-2 text-base  ${isActive? "text-[#FFFFFF] bg-[#069494] py-2  rounded-md font-bold" : "font-medium text-[#000000] "}`
  )
}
export const SidebarNavigation = () => {
  
  return (
    <aside className='flex flex-row justify-between mt-8 px-6 lg:flex-col lg:border-r lg:justify-normal lg:pt-8 lg:mt-0'>
      {/* logo */}
        <div>
            <img
                      src={myCystLogo}
                      alt=""
                      className=" "
                    />
        </div>
        {/* mobile nav */}
        <div className=' lg:hidden '>
        <HiMiniBars3 size={24}/>
        </div>

        <nav className='hidden lg:flex lg:flex-col lg:gap-y-12 lg:mt-8 '>
            
            {
              links.map((link)=>(
                <NavLink key={link.path} to={link.path} className={getActiveLink}>
                  {link.name}
                </NavLink>
              ))
            }


        </nav>
        
    </aside>
  )
}
