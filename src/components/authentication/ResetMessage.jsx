import { FaArrowLeft } from "react-icons/fa";
import youngAdult from "../../assets/Image.png";
import featuredIcon from "../../assets/Featured icon.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import Spinner from "./Spinner";

function ResetMessage() {
  const [isResending, setIsResending] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || "";

  // Redirect if no email is provided in state
  if (!email && !isResending) {
    navigate("/auth/resetpassword");
  }

  async function handleResend() {
    setIsResending(true);

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
        toast.success("Password reset email resent successfully!");
      } else {
        toast.error(data.message || "Failed to resend reset link");
      }
    } catch (err) {
      console.error(err);
      toast.error("Network error. Please try again later");
    } finally {
      setIsResending(false);
    }
  }

  function openEmail() {
    // Detect email provider based on email domain
    const domain = email.split("@")[1]?.toLowerCase();
    let emailUrl = "";

    if (domain?.includes("gmail")) {
      emailUrl = "https://mail.google.com";
    } else if (domain?.includes("yahoo")) {
      emailUrl = "https://mail.yahoo.com";
    } else if (
      domain?.includes("outlook") ||
      domain?.includes("hotmail") ||
      domain?.includes("live")
    ) {
      emailUrl = "https://outlook.live.com";
    } else {
      // Default to webmail generic page if unknown
      emailUrl = "https://mail.google.com";
    }

    // Open the email provider's login page
    window.open(emailUrl, "_blank");
  }

  return (
    <main className="grid lg:grid-cols-2 grid-cols-1">
      <div className="relative py-10 flex flex-col items-center justify-center">
        {isResending && (
          <div className="absolute">
            <Spinner />
          </div>
        )}

        <img src={featuredIcon} alt="key" />
        <h1 className="lg:text-4xl text-2xl font-bold text-[#101928] mt-3">
          Reset password
        </h1>
        <p className="mt-3 lg:text-xl text-center text-[#475467] lg:block hidden">
          We sent a verification link to your registered <br /> email
          {email && <span className="font-medium"> ({email})</span>}
        </p>
        <p className="lg:mt-3 mt-1 lg:text-xl text-center text-[#475467] block lg:hidden lg:px-0 px-4">
          We sent a verification link to your registered email
          {email && <span className="font-medium"> ({email})</span>}
        </p>

        <p className="text-[#475467] mt-4">
          Didn't get an email?{" "}
          <button
            onClick={handleResend}
            disabled={isResending}
            className="text-[#069494] hover:underline focus:outline-none"
          >
            {isResending ? "Resending..." : "Click here to resend"}
          </button>
        </p>

        <button
          onClick={openEmail}
          className="bg-[#057B7B] rounded-full lg:py-4 lg:px-[8rem] py-2 px-[4rem] text-white font-semibold lg:my-8 my-4 hover:bg-[#046666] transition-colors"
        >
          Open email
        </button>

        <div className="flex gap-2 items-center text-[#057B7B] font-semibold">
          <FaArrowLeft />
          <Link to="/auth/login">
            <p>Back to login</p>
          </Link>
        </div>
      </div>
      <div className="lg:block hidden">
        <img src={youngAdult} alt="a young lady" />
      </div>
    </main>
  );
}

export default ResetMessage;
