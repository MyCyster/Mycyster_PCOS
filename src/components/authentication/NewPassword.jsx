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
    <main className="grid lg:grid-cols-2 grid-cols-1">
      <div className="lg:py-10 py-6  flex flex-col items-center justify-center">
        <img src={featuredIcon} alt="key" />
        <h1 className="lg:text-4xl text-2xl font-bold text-[#101928] mt-3">
          Set new password
        </h1>
        <p className="mt-3 text-xl text-center text-[#475467] lg:block hidden">
          Your new password must be different to <br /> previously used
          passwords.
        </p>
        <p className="lg:mt-3 mt-1 lg:text-xl text-center text-[#475467] block lg:hidden lg:px-0 px-4">
          Your new password must be different to previously used passwords.
        </p>

        <form
          action="#"
          className="flex flex-col justify-center items-center w-full mt-8 gap-6 lg:px-0 px-4"
          onSubmit={handleSubmit}
        >
          <div className="lg:w-[55%] w-full">
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
          <div className="lg:w-[55%] w-full">
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

          <button className="bg-[#057B7B] rounded-full lg:py-4 lg:px-[8rem] py-2 px-[4rem] text-white font-semibold">
            Reset password
          </button>
          <div className="flex gap-2 items-center text-[#057B7B] font-semibold">
            <FaArrowLeft />
            <Link to={"/auth/login"}>
              <p>Back to login</p>
            </Link>
          </div>
        </form>
      </div>
      <div className="lg:block hidden">
        <img src={youngAdult} alt="a young lady" />
      </div>
    </main>
  );
}

export default NewPassword;
