import { FaArrowLeft } from "react-icons/fa";

import youngAdult from "../../assets/Image.png";
import mailIcon from "../../assets/Mail Icon.png";

function OTPpage() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <main className="grid grid-cols-2">
      <div className="py-10  flex flex-col items-center justify-center">
        <img src={mailIcon} alt="key" />
        <h1 className="text-4xl font-bold text-[#101928] mt-3">
          Email verification
        </h1>
        <p className="mt-3  text-center text-[#475467]">
          Input the 4-digit O.T.P. that has been sent to your <br /> registered
          email
        </p>

        <form
          action="#"
          className="flex flex-col justify-center items-center w-full mt-4 gap-6"
          onSubmit={handleSubmit}
        >
          <div className="w-[55%] flex flex-row gap-4">
            <div className="flex w-[100%] items-center border-[1.5px] border-[#069494] px-4 mt-2 rounded-lg ">
              <input
                type="text"
                className="w-full outline-none text-[#069494] text-center font-bold text-6xl"
              />
            </div>
            <div className="flex w-[100%] items-center border-[1.5px] border-[#069494] px-4 mt-2 rounded-lg ">
              <input
                type="text"
                className="w-full outline-none text-[#069494] text-center font-bold text-6xl"
              />
            </div>
            <div className="flex w-[100%] items-center border-[1.5px] border-[#069494] px-4 mt-2 rounded-lg ">
              <input
                type="text"
                className="w-full outline-none text-[#069494] text-center font-bold text-6xl"
              />
            </div>
            <div className="flex w-[100%] items-center border-[1.5px] border-[#069494] px-4 mt-2 rounded-lg ">
              <input
                type="text"
                className="w-full outline-none text-[#069494] text-center font-bold text-6xl"
              />
            </div>
          </div>

          <p className="text-[#475467] mr-20">
            Didn’t get an email?{" "}
            <span className="text-[#069494]">Click here to resend</span>
          </p>

          <button className="bg-[#057B7B] rounded-full py-4 px-[8rem] text-white font-semibold">
            Verify email
          </button>
        </form>
      </div>
      <div className="">
        <img src={youngAdult} alt="a young lady" />
      </div>
    </main>
  );
}

export default OTPpage;
