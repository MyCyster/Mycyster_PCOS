import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash, FaArrowLeft } from "react-icons/fa";
import youngAdult from "../../assets/Image.png";
import featuredIcon from "../../assets/Featured icon.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import Spinner from "./Spinner";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function NewPassword() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    general: "",
  });

  const { token } = useParams();
  const navigate = useNavigate();

  // Email validation regex
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Password validation regex (at least 8 chars, 1 uppercase, 1 lowercase, 1 number)
  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(password);
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      email: "",
      password: "",
      confirmPassword: "",
      general: "",
    };

    // Validate email
    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }

    // Validate password
    if (!formData.password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (!validatePassword(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters with at least one uppercase letter, one lowercase letter, and one number";
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

    setIsLoading(true);

    try {
      const res = await fetch(
        `https://mycyster-backend.onrender.com/v1/auth/reset-password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
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
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (!formData.email && !token) {
      setErrors({
        ...errors,
        general:
          "Email information is missing. The reset link might be incomplete",
      });
    }
  }, [formData.email, token]);

  return (
    <main className="grid lg:grid-cols-2 grid-cols-1">
      <div className="relative">
        <div className="lg:py-10 py-6 flex flex-col items-center justify-center">
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
          {errors.general && (
            <div className="lg:w-[55%] w-full mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {errors.general}
            </div>
          )}
          <form
            className="flex flex-col justify-center items-center w-full mt-8 gap-6 lg:px-0 px-4"
            onSubmit={handleSubmit}
          >
            <div className="lg:w-[55%] w-full">
              <label htmlFor="email">Email address</label>
              <div
                className={`flex w-[100%] items-center border-[0.5px] ${
                  errors.email ? "border-red-500" : "border-[#D0D5DD]"
                } p-4 mt-2 rounded-lg`}
              >
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full outline-none"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div className="lg:w-[55%] w-full">
              <label htmlFor="password">Enter new password</label>
              <div
                className={`flex w-[100%] items-center border-[0.5px] ${
                  errors.password ? "border-red-500" : "border-[#D0D5DD]"
                } p-4 mt-2 rounded-lg`}
              >
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
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
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <FaEye size={24} color="#374151" />
                  ) : (
                    <FaEyeSlash size={24} color="#374151" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
              <div className="mt-2 text-sm text-gray-600">
                Password must contain at least 8 characters, including
                uppercase, lowercase, and numbers
              </div>
            </div>
            <div className="lg:w-[55%] w-full">
              <label htmlFor="confirmPassword">Confirm new password</label>
              <div
                className={`flex w-[100%] items-center border-[0.5px] ${
                  errors.confirmPassword ? "border-red-500" : "border-[#D0D5DD]"
                } p-4 mt-2 rounded-lg`}
              >
                <input
                  type={confirmPasswordVisible ? "text" : "password"}
                  id="confirmPassword"
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
                    setConfirmPasswordVisible(!confirmPasswordVisible);
                  }}
                  aria-label={
                    confirmPasswordVisible ? "Hide password" : "Show password"
                  }
                >
                  {confirmPasswordVisible ? (
                    <FaEye size={24} color="#374151" />
                  ) : (
                    <FaEyeSlash size={24} color="#374151" />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="bg-[#057B7B] rounded-full lg:py-4 lg:px-[8rem] py-2 px-[4rem] text-white font-semibold hover:bg-[#046666] transition-colors disabled:bg-gray-400"
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : "Reset password"}
            </button>
            <div className="flex gap-2 items-center text-[#057B7B] font-semibold hover:underline">
              <FaArrowLeft />
              <Link to="/auth/login">
                <p>Back to login</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="lg:block hidden">
        <img
          src={youngAdult}
          alt="a young lady"
          className="w-full h-full object-cover"
        />
      </div>
    </main>
  );
}

export default NewPassword;
