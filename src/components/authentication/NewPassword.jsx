import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import youngAdult from "../../assets/Image.png";
import featuredIcon from "../../assets/Featured icon.png";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Spinner from "./Spinner";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function NewPassword() {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const [errors, setErrors] = useState({
    password: "",
    confirmPassword: "",
    general: "",
  });

  const { token } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || "";

  if (!email && !isLoading) {
    toast.error(
      "Email information missing. Please start the reset process again."
    );
    navigate("/auth/resetpassword");
  }

  const validatePassword = (password) => {
    // Minimum 8 characters, at least one uppercase letter, one lowercase letter, and one number
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      password: "",
      confirmPassword: "",
      general: "",
    };

    // validate password
    if (!formData.password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (!validatePassword(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters with uppercase, lowercase, and numbers";
      valid = false;
    }

    // Validate confirm password
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
      valid = false;
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  async function handleSubmit(e) {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsloading(true);

    try {
      // In a real application, you'd get this token from the URL query parameters
      // that are sent in the reset password link emailed to the user
      // const resetToken =
      // new URLSearchParams(location.search).get("token") || "9308982";
      const res = await fetch(
        `https://mycyster-backend.onrender.com/v1/auth/reset-password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            reset_password_token: token,
            password: formData.password,
          }),
        }
      );
      const data = await res.json();
      if (res.ok) {
        toast.success("Password reset successful!");
        navigate("/auth/login");
      } else {
        setErrors({
          ...errors,
          general: data.message || "Failed to reset password. Please try again",
        });
        toast.error(data.message || "Failed to reset password.");
      }
    } catch (error) {
      setErrors({
        ...errors,
        general: "Network error. Please check your connection and try again",
      });
      toast.error("Network error. Please try again");
    } finally {
      setIsloading(false);
    }
  }
  return (
    <main className="grid lg:grid-cols-2 grid-cols-1">
      <div className="relative">
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
          {isLoading && (
            <div className="absolute">
              <Spinner />
            </div>
          )}
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
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setShowPassword(!showPassword);
                  }}
                >
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
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setConfirmPassword(!confirmPassword);
                  }}
                >
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
      </div>
      <div className="lg:block hidden">
        <img src={youngAdult} alt="a young lady" />
      </div>
    </main>
  );
}

export default NewPassword;
