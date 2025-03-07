import { useState, useRef } from "react";
import youngAdult from "../../assets/Image.png";
import mailIcon from "../../assets/Mail Icon.png";
import { useLocation, useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function OTPpage() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [isLoading, setIsloading] = useState(false);
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";

  const handleChange = (index, e) => {
    const { value } = e.target;
    if (!/^\d?$/.test(value)) return; // Allow only digits

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if user types a number
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").trim();
    if (!/^\d{4}$/.test(pastedData)) return; // Ensure only 4 digits

    setOtp(pastedData.split("")); // Split pasted OTP into array
    inputRefs.current[3].focus(); // Move to last input box
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1].focus();
    } else if (e.key === "ArrowRight" && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("OTP Entered:", otp.join(""));
    setIsloading(true);
    try {
      const res = await fetch(
        `https://mycyster-backend.onrender.com/v1/auth/verify-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            email_verification_code: otp.join(""),
          }),
        }
      );
      const data = await res.json();
      if (res.ok) {
        console.log(data);
        navigate("/auth/successpage");
      } else {
        toast.error(`Invalid code`);
        setIsloading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="grid lg:grid-cols-2 grid-cols-1">
      <div className="relative">
        <div className="py-10 flex flex-col items-center justify-center">
          <div className="absolute">{isLoading && <Spinner />}</div>
          <img src={mailIcon} alt="key" />
          <h1 className="lg:text-4xl text-2xl font-bold text-[#101928] mt-3">
            Email verification
          </h1>
          <p className="mt-3 text-center text-[#475467] lg:block hidden">
            Input the 4-digit O.T.P. that has been sent to your <br />{" "}
            registered email
          </p>
          <p className="lg:mt-3 mt-1 text-center text-[#475467] block lg:hidden lg:px-0 px-4">
            Input the 4-digit O.T.P. that has been sent to your registered email
          </p>

          <form
            className="flex flex-col justify-center items-center w-full mt-4 gap-6 lg:px-0 px-4"
            onSubmit={handleSubmit}
          >
            <div className="lg:w-[55%] w-full flex flex-row gap-4">
              {otp.map((digit, index) => (
                <div
                  key={index}
                  className="flex w-[100%] items-center border-[1.5px] border-[#069494] px-4 mt-2 rounded-lg"
                >
                  <input
                    type="text"
                    maxLength="1"
                    value={digit}
                    ref={(el) => (inputRefs.current[index] = el)}
                    onChange={(e) => handleChange(index, e)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={handlePaste}
                    className="w-full outline-none text-[#069494] text-center font-bold text-6xl"
                  />
                </div>
              ))}
            </div>

            <p className="text-[#475467] lg:mr-20 lg:text-[16px] text-sm">
              Didn’t get an email?{" "}
              <span className="text-[#069494] cursor-pointer">
                Click here to resend
              </span>
            </p>

            <button
              type="submit"
              className="bg-[#057B7B] rounded-full lg:py-4 lg:px-[8rem] py-2 px-[4rem] text-white font-semibold"
            >
              Verify email
            </button>
          </form>
        </div>
      </div>
      <div className="lg:block hidden">
        <img src={youngAdult} alt="a young lady" />
      </div>
    </main>
  );
}

export default OTPpage;
