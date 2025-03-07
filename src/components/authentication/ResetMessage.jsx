import { FaArrowLeft } from "react-icons/fa";
import youngAdult from "../../assets/Image.png";
import featuredIcon from "../../assets/Featured icon.png";
import { Link } from "react-router-dom";

function ResetMessage() {
  return (
    <main className="grid lg:grid-cols-2 grid-cols-1">
      <div className="py-10  flex flex-col items-center justify-center">
        <img src={featuredIcon} alt="key" />
        <h1 className="lg:text-4xl text-2xl font-bold text-[#101928] mt-3">
          Reset password
        </h1>
        <p className="mt-3 lg:text-xl text-center text-[#475467] lg:block hidden">
          We sent a verification link to your registered <br /> email
        </p>
        <p className="lg:mt-3 mt-1 lg:text-xl text-center text-[#475467] block lg:hidden lg:px-0 px-4">
          We sent a verification link to your registered email
        </p>

        <p className="text-[#475467] mt-4">
          Didn’t get an email?{" "}
          <span className="text-[#069494]">Click here to resend</span>
        </p>

        <button className="bg-[#057B7B] rounded-full lg:py-4 lg:px-[8rem] py-2 px-[4rem] text-white font-semibold lg:my-8 my-4">
          Open gmail
        </button>
        <div className="flex gap-2 items-center text-[#057B7B] font-semibold">
          <FaArrowLeft />
          <Link to={"/auth/login"}>
            <p>Back to login</p>
          </Link>
        </div>
      </div>
      <div className="lg:block hidden">
        <img src={youngAdult} alt="a young lady" />
      </div>
    </main>
  );
}

export default ResetMessage;
