import { FaArrowLeft } from "react-icons/fa";

import { MdOutlineEmail } from "react-icons/md";
import youngAdult from "../../assets/Image.png";
import featuredIcon from "../../assets/Featured icon.png";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

function ResetPassword() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function emailValidation(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!email) {
      setError("input is required");
    } else if (!emailValidation(email)) {
      toast.error("Enter a valid email");
    }
    setIsloading(true);
    try {
      const res = await fetch(
        `https://mycyster-backend.onrender.com/v1/auth/forgot-password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
          }),
        }
      );
      const data = await res.json();

      if (res.ok) {
        navigate("/auth/newpassword", { state: { email } });
        console.log(data);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsloading(false);
    }
  }
  return (
    <main className="grid lg:grid-cols-2 grid-cols-1">
      <div className="relative">
        <div className="py-10  flex flex-col items-center justify-center">
          <img src={featuredIcon} alt="key" />
          <h1 className="lg:text-4xl text-xl font-bold text-[#101928] mt-3">
            Reset your password
          </h1>
          <p className="mt-3 text-xl text-center text-[#475467] lg:block hidden">
            Enter your email address and we’ll send you <br /> password reset
            instructions.
          </p>
          <p className="lg:mt-3 mt-1 text-lg text-center text-[#475467] block lg:hidden lg:px-0 px-4">
            Enter your email address and we’ll send you password reset
            instructions.
          </p>

          {isLoading && (
            <div className="absolute">
              <Spinner />
            </div>
          )}

          <form
            action="#"
            className="flex flex-col justify-center items-center w-full mt-4 gap-6"
            onSubmit={handleSubmit}
          >
            <div className="lg:w-[60%] w-full lg:px-0 px-4">
              <label htmlFor="#">Email</label>
              <div className="flex w-[100%] items-center border-[0.5px] border-[#D0D5DD] p-4 mt-2 rounded-lg ">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="w-full outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MdOutlineEmail size={30} color="#374151" />
              </div>
              {error && <p className="text-red-500">{error}</p>}
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
      </div>
      <div className="lg:block hidden">
        <img src={youngAdult} alt="a young lady" />
      </div>
    </main>
  );
}

export default ResetPassword;
