import { FaArrowLeft } from "react-icons/fa";

import youngAdult from "../../assets/Image.png";
import Successful from "../../assets/Successful.png";

function SuccessPage() {
  return (
    <main className="grid grid-cols-2">
      <div className="py-10  flex flex-col items-center justify-center">
        <img src={Successful} alt="key" />
        <h1 className="text-4xl font-bold text-[#101928] mt-3">
          Account created!!
        </h1>
        <p className="mt-3 text-xl text-center text-[#475467]">
          You have successfully created an account <br /> on MyCyster
        </p>

        <button className="bg-[#057B7B] rounded-full py-4 px-[8rem] text-white font-semibold mt-8">
          Back to Login
        </button>
      </div>
      <div className="">
        <img src={youngAdult} alt="a young lady" />
      </div>
    </main>
  );
}

export default SuccessPage;
