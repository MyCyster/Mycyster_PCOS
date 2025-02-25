import { Link } from "react-router-dom";
import youngAdult from "../../assets/Image.png";
import Successful from "../../assets/Successful.png";

function SuccessPasswordChanged() {
  return (
    <main className="grid lg:grid-cols-2 grid-cols-1">
      <div className="py-10  flex flex-col items-center justify-center">
        <img src={Successful} alt="key" />
        <h1 className="lg:text-4xl text-2xl font-bold text-[#101928] mt-3">
          Password changed!!!
        </h1>
        <p className="mt-3 lg:text-xl text-center text-[#475467] lg:block hidden ">
          Your password has been successfully reset. <br /> Click the button
          below to log in.
        </p>
        <p className="lg:mt-3 mt-1 lg:text-xl text-center text-[#475467] block lg:hidden lg:px-0 px-4">
          Your password has been successfully reset. Click the button below to
          log in.
        </p>

        <Link to={"/auth/login"}>
          <button className="bg-[#057B7B] rounded-full lg:py-4 lg:px-[8rem] py-2 px-[4rem] text-white font-semibold mt-8">
            Back to Login
          </button>
        </Link>
      </div>
      <div className="lg:block hidden">
        <img src={youngAdult} alt="a young lady" />
      </div>
    </main>
  );
}

export default SuccessPasswordChanged;
