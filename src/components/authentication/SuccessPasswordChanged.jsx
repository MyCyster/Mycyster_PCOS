import { Link } from "react-router-dom";
import youngAdult from "../../assets/Image.png";
import Successful from "../../assets/Successful.png";

function SuccessPasswordChanged() {
  return (
    <main className="grid grid-cols-2">
      <div className="py-10  flex flex-col items-center justify-center">
        <img src={Successful} alt="key" />
        <h1 className="text-4xl font-bold text-[#101928] mt-3">
          Password changed!!!
        </h1>
        <p className="mt-3 text-xl text-center text-[#475467]">
          Your password has been successfully reset. <br /> Click the button
          below to log in.
        </p>

        <Link to={"/login"}>
          <button className="bg-[#057B7B] rounded-full py-4 px-[8rem] text-white font-semibold mt-8">
            Back to Login
          </button>
        </Link>
      </div>
      <div className="">
        <img src={youngAdult} alt="a young lady" />
      </div>
    </main>
  );
}

export default SuccessPasswordChanged;
