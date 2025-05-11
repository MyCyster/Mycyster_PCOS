import heroImg from "../../assets/LandingHome/mycystHeroImg.svg";
import heroFlower from "../../assets/LandingHome/heroFlower.png";
import { Button } from "../shared/Button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center px-6  lg:px-20 gap-4">
      <div className="w-full lg:w-[55%] flex flex-col gap-y-8">
        <h1 className="mt-10 lg:mt-0 text-2xl lg:text-3xl max-w-[500px] font-extrabold font-sora text-[#069494] leading-loose">
          Find Support, Information, and Community with MyCyster
        </h1>
        <p className=" text-[#344054] max-w-[500px] text-lg lg:text-xl font-bold font-manrope leading-relaxed">
          Access reliable information, personalized tools, and a supportive
          community to manage PCOS with confidence.
        </p>

        <Link to={"/auth/signup"}>
          <Button className=" text-base font-manrope font-bold bg-[#057B7B] text-[#ffffff]">
            Get Started
          </Button>
        </Link>
      </div>

      <div className="hidden lg:block lg:w-[45%]">
        {/* Teal Background */}
        <div className="hidden absolute top-0 right-0 md:block lg:absolute lg:w-[45%]  h-[65vh] bg-[#008080] "></div>

        {/* Image */}
        <div className="flex justify-end items-end gap-32">
          <img src={heroImg} alt="Smiling woman" className="relative " />

          <img src={heroFlower} alt="" className="absolute " />
        </div>
      </div>
    </section>
  );
};
