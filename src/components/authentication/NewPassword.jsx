import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import youngAdult from "../../assets/Image.png";
import featuredIcon from "../../assets/Featured icon.png";
import { Link } from "react-router-dom";

function NewPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <main className="grid grid-cols-2">
      <div className="py-10  flex flex-col items-center justify-center">
        <img src={featuredIcon} alt="key" />
        <h1 className="text-4xl font-bold text-[#101928] mt-3">
          Set new password
        </h1>
        <p className="mt-3 text-xl text-center text-[#475467]">
          Your new password must be different to <br /> previously used
          passwords.
        </p>

        <form
          action="#"
          className="flex flex-col justify-center items-center w-full mt-8 gap-6"
          onSubmit={handleSubmit}
        >
          <div className="w-[55%]">
            <label htmlFor="#">Enter new password</label>
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
            <label htmlFor="#">Confirm new password</label>
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

          <button className="bg-[#057B7B] rounded-full py-4 px-[8rem] text-white font-semibold">
            Reset password
          </button>
          <div className="flex gap-2 items-center text-[#057B7B] font-semibold">
            <FaArrowLeft />
            <Link to={"/login"}>
              <p>Back to login</p>
            </Link>
          </div>
        </form>
      </div>
      <div className="">
        <img src={youngAdult} alt="a young lady" />
      </div>
    </main>
  );
}

export default NewPassword;
