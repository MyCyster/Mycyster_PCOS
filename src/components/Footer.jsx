import footerImg from '../assets/LandingHome/FooterImg.png'
import { CiTwitter } from "react-icons/ci";
import { AiOutlineInstagram } from "react-icons/ai";
import { LuFacebook } from "react-icons/lu";
import { Button } from './Button';
import myCysterLogo from '../assets/LandingHome/MyCysterLogo.png'

export const Footer = () => {
  return (
    <footer className="pt-1 md:pt-10">
      <div className="relative">
        {/* Footer Top Section */}
        <div className="bg-[#069494] px-4 sm:px-[2rem] lg:px-[5rem] text-center sm:text-start flex justify-center sm:block text-white p-12  md:flex-row">
          {/* Left: Text and CTA */}
          <div className="relative w-full sm:w-[52%] lg:w-[50%] md:text-left py-16">
            <h2 className="text-[26px] md:text-[32px] font-bold leading-snug">
              Ready to Take Control of Your PCOS Journey?
            </h2>
            <p className="mt-4 text-[17px] text-gray-200">
              Join MyCyster today and discover the support, resources, and
              community you need to thrive. It’s free to sign up!
            </p>
            <Button className='bg-[#ffffff] font-semibold transition mt-6 text-[#069494]'>Get Started</Button>
          </div>

          {/* Right: Image */}
          <div className="">
            <img
              src={footerImg}
              alt="Strong woman illustration"
              className="w-[24%] sm:w-[45%] lg:w-[33%] absolute top-0 right-0"
            />
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center px-6 sm:px-[2rem] lg:px-[5rem] py-4 mt-4 sm:mt-0">
          {/* Logo & Social Icons */}
          <div className="flex items-center space-x-6">
            <img src={myCysterLogo} alt='' className='w-[88px]'/>
            <div className="flex space-x-4 text-[#000000]">
                <CiTwitter className='cursor-pointer'/>
                <AiOutlineInstagram className='cursor-pointer'/>
                <LuFacebook className='cursor-pointer'/>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="flex flex-col items-center sm:block py-6 md:py-0">
            <p className="text-gray-700 mb-2 font-semibold text-[14px]">Sign up to our newsletter</p>
            <div className="text-center sm:flex flex-col sm:flex-row sm:bg-gray-100 sm:rounded-full overflow-hidden sm:shadow-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 sm:px-4 py-1 sm:py-2 text-gray-600 bg-[#E9FFFF] outline-none placeholder:text-[14px]"
              />
              <Button className='bg-[#069494] mt-2 sm:mt-0 sm:bg-[#ffffff] font-semibold transition hover:bg-[#069494] hover:text-[#ffffff] text-[#ffffff] sm:text-[#069494]'>Get Started</Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
