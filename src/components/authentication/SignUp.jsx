import React, { useState } from "react";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineEmail } from "react-icons/md";
import youngAdult from "../../assets/Image.png";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <main className="grid grid-cols-2">
      <div className="py-10  flex flex-col items-center">
        <h1 className="text-4xl font-bold">Create an account</h1>
        <p className="mt-1 text-xl">Welcome back! Please enter your details</p>
        <button className="flex  items-center px-[6rem] py-2 font-semibold rounded-full gap-1  border-[0.5px] border-[#D0D5DD] mt-4">
          <FcGoogle />
          Sign up with Google
        </button>
        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-red-700"></div>
          <p className="px-4 text-gray-400 text-sm">OR</p>
          <div className="flex-1 border-t border-gray-700"></div>
        </div>
        <form
          action="#"
          className="flex flex-col justify-center items-center w-full mt-10 gap-6"
          onSubmit={handleSubmit}
        >
          <div className="w-[55%] ">
            <label htmlFor="#">Name</label>
            <div className="flex w-[100%] items-center border-[0.5px] border-[#D0D5DD] p-4 mt-2 rounded-lg">
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full outline-none"
              />
              <RxAvatar size={30} color="#374151" />
            </div>
          </div>
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
          <div className="w-[55%]">
            <label htmlFor="#">Create password</label>
            <div className="flex w-[100%] items-center border-[0.5px] border-[#D0D5DD] p-4 mt-2 rounded-lg">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full outline-none"
              />
              <button onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <FaEye size={30} color="#374151" />
                ) : (
                  <FaEyeSlash size={30} color="#374151" />
                )}
              </button>
            </div>
          </div>
          <div className="w-[55%]">
            <label htmlFor="#">Confirm password</label>
            <div className="flex w-[100%] items-center border-[0.5px] border-[#D0D5DD] p-4 mt-2 rounded-lg">
              <input
                type={confirmPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full outline-none"
              />
              <button onClick={() => setConfirmPassword(!confirmPassword)}>
                {confirmPassword ? (
                  <FaEye size={30} color="#374151" />
                ) : (
                  <FaEyeSlash size={30} color="#374151" />
                )}
              </button>
            </div>
          </div>
          <div className="flex w-[55%] justify-between items-center -mt-4">
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <p>Remember me</p>
            </div>
            <a className="text-[#069494]">Forgot Password</a>
          </div>
          <button className="bg-[#057B7B] rounded-full py-4 px-[10rem] text-white font-semibold">
            Sign Up
          </button>
          <p className="text-[#475467]">
            Already have an account?{" "}
            <span className="text-[#069494]">Sign in</span>
          </p>
        </form>
      </div>
      <div className="">
        <img src={youngAdult} alt="a young lady" />
      </div>
    </main>
  );
}

export default SignUp;
