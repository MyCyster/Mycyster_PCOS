import { FaArrowLeft } from "react-icons/fa";
import youngAdult from "../../assets/Image.png";
import featuredIcon from "../../assets/Featured icon.png";
import { Link } from "react-router-dom";

function ResetMessage() {
  return (
    <main className="grid grid-cols-2">
      <div className="py-10  flex flex-col items-center justify-center">
        <img src={featuredIcon} alt="key" />
        <h1 className="text-4xl font-bold text-[#101928] mt-3">
          Reset password
        </h1>
        <p className="mt-3 text-xl text-center text-[#475467]">
          We sent a verification link to your registered <br /> email
        </p>

        <p className="text-[#475467] mt-4">
          Didn’t get an email?{" "}
          <span className="text-[#069494]">Click here to resend</span>
        </p>

        <button className="bg-[#057B7B] rounded-full py-4 px-[8rem] text-white font-semibold my-8">
          Open gmail
        </button>
        <div className="flex gap-2 items-center text-[#057B7B] font-semibold">
          <FaArrowLeft />
          <Link to={"/login"}>
            <p>Back to login</p>
          </Link>
        </div>
      </div>
      <div className="">
        <img src={youngAdult} alt="a young lady" />
      </div>
    </main>
  );
}

export default ResetMessage;
