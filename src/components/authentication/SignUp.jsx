import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineEmail } from "react-icons/md";
import youngAdult from "../../assets/Image.png";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsloading] = useState(false);

  function validateForm() {
    let errors = {};

    // name validation
    if (!formData.name) {
      errors.name = "Name is required";
    } else if (formData.name < 2) {
      errors.name = "Enter a valid name";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Enter a valid email address";
    }

    // Password  validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!formData.password) {
      errors.password = "Password is required";
    } else if (!passwordRegex.test(formData.password)) {
      errors.password =
        "Must be at least 8 characters (one uppercase, one number,  one special character (e.g., @, !, $)).";
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      errors.confirmPassword = "Confirm password is required";
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (validateForm()) {
      setIsloading(true);

      try {
        const res = await fetch(
          `https://mycyster-backend.onrender.com/v1/auth/signup`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              password: formData.password,
            }),
          }
        );
        const data = await res.json();
        if (res.ok) {
          navigate("/auth/otppage", { state: { email: formData.email } });
        } else {
          if (data.message === "Email already in use") {
            toast.error("Already have an account");
            setFormData({
              name: "",
              email: "",
              password: "",
              confirmPassword: "",
            });
            setIsloading(false);
          } else {
            toast.error(data.message || "Signup failed");
          }
        }
      } catch {
        toast.error("Network error, please try again.");
      } finally {
        setIsloading(false);
      }

      setFormErrors({});
    }
  }

  return (
    <main className="grid lg:grid-cols-2 grid-cols-1">
      <div className="relative">
        <div className="lg:py-10 py-2 flex flex-col items-center">
          <h1 className="lg:text-4xl font-bold">Create an account</h1>
          <p className="mt-1 lg:text-xl text-sm">
            Welcome back! Please enter your details
          </p>

          <button className="flex items-center lg:px-[6rem] px-[2rem] py-2 font-semibold rounded-full gap-1 border-[0.5px] border-[#D0D5DD] mt-4">
            <FcGoogle />
            Sign up with Google
          </button>
          <div className="flex items-center my-6 w-[50%]">
            <div className="flex-1 border-t border-[#F0F2F5]"></div>
            <p className="px-2 text-gray-400 text-sm">Or</p>
            <div className="flex-1 border-t border-[#F0F2F5]"></div>
          </div>

          <form
            className="flex flex-col justify-center items-center w-full lg:mt-10 gap-6 lg:px-0 px-4 "
            onSubmit={handleSubmit}
          >
            <div className="lg:w-[60%] w-full">
              <label>Name</label>
              <div className="flex w-[100%] items-center border-[0.5px] border-[#D0D5DD] lg:p-4 p-2 mt-2 rounded-lg">
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Enter your name"
                  className="w-full outline-none bg-transparent"
                />
                <RxAvatar size={30} color="#374151" />
              </div>
              {formErrors.name && (
                <p className="text-red-500">{formErrors.name}</p>
              )}
            </div>

            <div className="lg:w-[60%] w-full">
              <label>Email</label>
              <div className="flex w-[100%] items-center border-[0.5px] border-[#D0D5DD] lg:p-4 p-2  mt-2 rounded-lg">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="w-full outline-none bg-transparent"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <MdOutlineEmail size={30} color="#374151" />
              </div>
              {formErrors.email && (
                <p className="text-red-500">{formErrors.email}</p>
              )}
            </div>
            <div className="absolute">{isLoading && <Spinner />}</div>

            <div className="lg:w-[60%] w-full">
              <label>Create password</label>
              <div className="flex w-[100%] items-center border-[0.5px] border-[#D0D5DD] lg:p-4 p-2 mt-2 rounded-lg">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full outline-none bg-transparent"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <button
                  type="button"
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
              {formErrors.password && (
                <p className="text-red-500">{formErrors.password}</p>
              )}
            </div>

            <div className="lg:w-[60%] w-full">
              <label>Confirm password</label>
              <div className="flex w-[100%] items-center border-[0.5px] border-[#D0D5DD] lg:p-4 p-2 mt-2 rounded-lg">
                <input
                  type={confirmPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full outline-none bg-transparent"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
                />
                <button
                  type="button"
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
              {formErrors.confirmPassword && (
                <p className="text-red-500">{formErrors.confirmPassword}</p>
              )}
            </div>

            <button
              type="submit"
              className="bg-[#057B7B] rounded-full lg:py-4 lg:px-[10rem] py-2 px-[6rem] text-white font-semibold mt-2"
            >
              Sign Up
            </button>
            {/* */}

            <p className="text-[#475467] lg:mt-0 -mt-4">
              Already have an account?{" "}
              <Link to={"/auth/login"}>
                {" "}
                <span className="text-[#069494]">Sign in</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
      <div className="hidden lg:block">
        <img src={youngAdult} alt="a young lady" />
      </div>
    </main>
  );
}

export default SignUp;
