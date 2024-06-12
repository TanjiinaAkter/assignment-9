import { useContext, useEffect, useRef, useState } from "react";
import Navbar from "../shared/Navbar/Navbar";
import "./Login.css";
import AOS from "aos";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import "aos/dist/aos.css"; // Import AOS styles
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
const Login = () => {
  const location = useLocation();

  const navigate = useNavigate();
  console.log(location);
  const { login, resetPassword, logout, googleSignIn } =
    useContext(AuthContext);
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
    });
  }, []);

  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const notify = (message) => toast(message);

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const check = e.target.check.checked;
    console.log(email, password);
    setError("");
    if (!check) {
      return setError("Please check first !!!");
    } else if (!/^(?=.*[A-Z]).*$/.test(password)) {
      return setError("Password doesn't matched!!");
    } else if (!/^(?=.*[!@#$%^&*(),.?":{}|<>]).*$/.test(password)) {
      return setError("provide valid password");
    }

    login(email, password)
      .then((result) => {
        console.log(result.user);
        if (result.user.emailVerified) {
          notify("logged in successfully!!");

          navigate(location?.state ? location.state : "/");
          e.target.reset();
        } else {
          notify("please verify your account first!!");
          logout();
        }
      })
      .catch((error) => {
        console.error(error);
        setError("email doesnt matched!");
      });
  };
  const emailRef = useRef(null);
  // =====================HANDLE RESET PASSWORD====================
  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    console.log(email);
    if (!email) {
      setError("please provide a email first");
    }
    resetPassword(email)
      .then(() => {
        notify("please check your email !!!");
      })
      .catch(() => {});
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        notify("logged in successfully!!");
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 300);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className=" w-full bg-white ">
      <Navbar></Navbar>
      <div
        className="box-full w-[92%] md:w-[35%] mx-auto shadow-2xl bg-[rgb(225 231 243)]"
        data-aos="zoom-in">
        <h1 className="text-2xl text-center pt-4 lg:text-5xl  bg-none font-bold">
          Please Sign In here!!!!
        </h1>

        <form className="card-body" onSubmit={handleLogIn}>
          <div className="form-control">
            <label className="label">
              <span className="text-4xl font-semibold ">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              ref={emailRef}
              className="outline-none focus:outline-none py-[9px] border-b-2 border-[#ca786c] text-3xl"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-4xl font-semibold">Password</span>
            </label>
            <div className="w-full mb-3 flex justify-between items-center border-b-2 border-[#ca786c] ">
              <input
                type={show ? "password" : "text"}
                placeholder="password"
                name="password"
                className="outline-none py-[9px] focus:outline-none  text-3xl mb-2"
                required
              />
              <span onClick={() => setShow(!show)}>
                {!show ? (
                  <FaEye className="text-3xl" />
                ) : (
                  <FaEyeSlash className="text-3xl" />
                )}
              </span>
            </div>
            <label className="w-full">
              <a
                href="#"
                className="text-xl font-semibold flex justify-between items-center">
                <p className="text-gray-500">
                  <input type="checkbox" name="check" id="check" /> Remember me
                </p>
                <p
                  onClick={handleForgetPassword}
                  className="text-end text-gray-500">
                  Forget Password
                </p>
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className=" bg-[#ca786c] text-3xl text-white py-3 text-center">
              Login
            </button>
          </div>
          <p className="text-2xl text-center mt-3 ">
            Don’t have an account?
            <Link to="/register">
              <span className="text-[#ca786c] text-xl border-b-2 border-[#ca786c] pl-3">
                Create an account
              </span>
            </Link>
          </p>

          {error && (
            <p className="text-red-600 text-2xl text-center my-2 font-semibold  flex items-center justify-center gap-2">
              {error}
            </p>
          )}
        </form>
        <p className="text-3xl w-[3%] font-semibold text-[#ca786c] mx-auto mb-2 text-center border-b-2  border-[#ca786c]">
          Or
        </p>
        <div className="flex flex-col justify-center items-center mx-12">
          <button
            onClick={handleGoogleSignIn}
            className="px-3 mx-auto w-full text-white rounded-full text-2xl mb-3 py-3 bg-[#ca786c]">
            Continue with Google
          </button>
          <button className="px-3 mx-auto w-full text-white rounded-full text-2xl mb-3 py-3 bg-[#ca786c]">
            Continue with Facebook
          </button>
        </div>
      </div>
      <ToastContainer className="mt-24 text-3xl " />
    </div>
  );
};

export default Login;
