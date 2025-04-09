import heroImg from "../../assets/LandingHome/mycystHeroImg.svg";
import heroFlower from "../../assets/LandingHome/heroFlower.png";
import { Button } from "../shared/Button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="px-6 sm:px-[2rem] lg:px-[5rem] py-2 lg:py-12 block md:flex items-center gap-[2em] xl:gap-[10rem] relative">
      <div className="w-full md:w-[60%] lg:w-[85%] xlg:w-[50%] md:text-left">
        <h1 className="text-[23px] md:text-[29px] font-bold text-[#069494]">
          Find Support, Information, and Community with MyCyster
        </h1>
        <p className="mt-4 text-gray-600 vlg:text-[24px] xxl:text-[20px] text-18px">
          Access reliable information, personalized tools, and a supportive
          community to manage PCOS with confidence.
        </p>

        <Link to={"/auth/login"}>
          <Button className="mt-8 bg-[#057B7B] text-[#ffffff]">Join Now</Button>
        </Link>
      </div>

      <div className="relative md:w-[34rem] mt-8 md:mt-0">
        {/* Teal Background */}
        <div className="hidden md:block absolute -top-[14rem] xlg:-top-[10rem] -right-[2rem] lg:-right-[5rem] w-[25rem] lg:w-[25rem] xlg:w-[34rem] h-[29rem] xlg:h-[32rem] bg-[#008080] -z-0"></div>
        <img
          src={heroFlower}
          alt=""
          className="absolute -bottom-[0px] md:-bottom-[8px] -right-[0.5rem] sm:-right-[1rem] md:-right-[2rem] w-[60px] sm:w-[88px] md:w-[90px] xlg:w-[110px]"
        />

        {/* Image */}
        <img
          src={heroImg}
          alt="Smiling woman"
          className="relative w-[40rem] xl:w-[34rem]"
        />
      </div>
    </section>
  );
};
