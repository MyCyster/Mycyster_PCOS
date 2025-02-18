import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineEmail } from "react-icons/md";
import youngAdult from "../../assets/Image.png";
import featuredIcon from "../../assets/Featured icon.png";

function ResetPassword() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <main className="grid grid-cols-2">
      <div className="py-10  flex flex-col items-center justify-center">
        <img src={featuredIcon} alt="key" />
        <h1 className="text-4xl font-bold text-[#101928] mt-3">
          Reset your password
        </h1>
        <p className="mt-3 text-xl text-center text-[#475467]">
          Enter your email address and we’ll send you <br /> password reset
          instructions.
        </p>

        <form
          action="#"
          className="flex flex-col justify-center items-center w-full mt-4 gap-6"
          onSubmit={handleSubmit}
        >
          <div className="w-[55%]">
            <label htmlFor="#">Email</label>
            <div className="flex w-[100%] items-center border-[0.5px] border-[#D0D5DD] p-4 mt-2 rounded-lg ">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full outline-none"
              />
              <MdOutlineEmail size={30} color="#374151" />
            </div>
          </div>

          <button className="bg-[#057B7B] rounded-full py-4 px-[8rem] text-white font-semibold">
            Reset password
          </button>
          <div className="flex gap-2 items-center text-[#057B7B] font-semibold">
            <FaArrowLeft />
            <p>Back to login</p>
          </div>
        </form>
      </div>
      <div className="">
        <img src={youngAdult} alt="a young lady" />
      </div>
    </main>
  );
}

export default ResetPassword;
