import { Link } from "react-router-dom";
import youngAdult from "../../assets/Image.png";
import Successful from "../../assets/Successful.png";

function SuccessPage() {
  return (
    <main className="grid lg:grid-cols-2 grid-cols-1">
      <div className="px-2 flex flex-col items-center justify-center">
        <img src={Successful} alt="key" />
        <h1 className="lg:text-4xl text-xl font-bold text-[#101928] mt-3">
          Account created!!
        </h1>
        <p className="mt-3 lg:text-xl text-center text-[#475467] lg:hidden block">
          You have successfully created an account on MyCyster
        </p>
        <p className="mt-3 lg:text-xl text-center text-[#475467] hidden lg:block lg:px-0 px-4">
          You have successfully created an account <br /> on MyCyster
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

export default SuccessPage;
