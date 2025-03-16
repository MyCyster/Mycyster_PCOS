import { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineEmail } from "react-icons/md";
import youngAdult from "../../assets/Image.png";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState({
    email: false,
    password: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // load saved email from localstorage when component mounts
  useEffect(() => {
    const savedData = localStorage.getItem("userData");
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setFormData({
          email: parsedData.email || "",
          password: parsedData.password || "",
        });
        setRememberMe(true);
      } catch (error) {
        console.log("Error parsing saved user data:", error);
        localStorage.removeItem("userData");
      }
    }
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    const newFormError = {
      email: !formData.email,
      password: !formData.password,
    };

    setFormError(newFormError);

    if (!formData.email || !formData.password) {
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch(
        `https://mycyster-backend.onrender.com/v1/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        }
      );
      const data = await res.json();

      if (res.ok) {
        // saved user data before navigating if "Remember Me" is checked
        if (rememberMe) {
          localStorage.setItem(
            "userData",
            JSON.stringify({
              email: formData.email,
              password: formData.password,
            })
          );
        } else {
          localStorage.removeItem("userData");
        }
        navigate("/");
      } else {
        if (data.message) {
          toast.error(data.message);
        } else {
          toast.error("Login failed. Please try again.");
        }
      }
    } catch {
      toast.error(`Network error, please try again.`);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <main className="grid lg:grid-cols-2 grid-cols-1">
      <div className="relative">
        <div className="lg:py-10 py-2  flex flex-col items-center justify-center">
          <h1 className="lg:text-4xl font-bold">Welcome Back</h1>
          <p className="mt-1 lg:text-xl text-sm">
            Welcome back! Please enter your details
          </p>
          <div className="absolute">{isLoading && <Spinner />}</div>

          <button
            type="button"
            className="flex items-center lg:px-[6rem] px-[2rem] py-2 font-semibold rounded-full gap-1 border-[0.5px] border-[#D0D5DD] mt-4"
          >
            <FcGoogle />
            Login with Google
          </button>
          <div className="flex items-center my-6 w-[55%]">
            <div className="flex-1 border-t border-[#F0F2F5]"></div>
            <p className="px-4 text-gray-400 text-sm">Or</p>
            <div className="flex-1 border-t border-[#F0F2F5]"></div>
          </div>
          <form
            action="#"
            className="flex flex-col justify-center items-center w-full lg:mt-10 gap-6 lg:px-0 px-4"
            onSubmit={handleSubmit}
          >
            <div className="lg:w-[60%] w-full">
              <label htmlFor="email">Email</label>
              <div className="flex w-[100%] items-center border-[0.5px] border-[#D0D5DD] lg:p-4 p-2 mt-2 rounded-lg ">
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full outline-none bg-transparent"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <MdOutlineEmail size={30} color="#374151" />
              </div>
              {formError.email && (
                <small className="text-red-500">This field is required</small>
              )}
            </div>
            <div className="lg:w-[60%] w-full">
              <label htmlFor="password">Password</label>
              <div className="flex w-[100%] items-center border-[0.5px] border-[#D0D5DD] lg:p-4 p-2 mt-2 rounded-lg">
                <input
                  id="password"
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
                  onClick={() => {
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
              {formError.password && (
                <small className="text-red-500">This field is required</small>
              )}
            </div>

            <div className="flex lg:w-[60%] w-full justify-between items-center -mt-4">
              <div className="flex items-center gap-2">
                <input
                  id="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="bg-transparent"
                />
                <label htmlFor="remember-me" className="lg:text-[16px] text-sm">
                  Remember me
                </label>
              </div>
              <Link to="/auth/reset">
                <small className="text-[#069494] lg:text-[16px] text-sm">
                  Forgot Password
                </small>
              </Link>
            </div>

            <button
              type="submit"
              className="bg-[#057B7B] rounded-full lg:py-4 lg:px-[10rem] py-2 px-[6rem] text-white font-semibold"
            >
              Sign In
            </button>
            <p className="text-[#475467] lg:mt-0 -mt-4">
              Don't have an account?{" "}
              <Link to={"/auth/signup"}>
                <span className="text-[#069494]">Sign Up</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
      <div className="lg:block hidden">
        <img src={youngAdult} alt="a young lady" />
      </div>
    </main>
  );
}

export default Login;
