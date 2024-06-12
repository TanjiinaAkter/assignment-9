import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoIosWarning } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { sendEmailVerification, updateProfile } from "firebase/auth";
const Register = () => {
  const { userSignUp } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);

  //========================== notification here

  const notify = (message) => {
    toast(message);
  };

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const name = form.get("firstname");
    const password = form.get("password");
    const file =form.get('file')
    console.log(email, password);
    setError("");
    if (password.length < 6) {
      return setError("the password is less then 6 character");
    } else if (!/^(?=.*[A-Z]).*$/.test(password)) {
      return setError("password should have atleast 1  capital letter");
    } else if (!/^(?=.*[!@#$%^&*(),.?":{}|<>]).*$/.test(password)) {
      return setError("the paswword dont have a special character");
    }

    userSignUp(email, password)
      .then((result) => {
        console.log(result.user);
        notify("user created successfully!!");
        sendEmailVerification(result.user).then(() => {
          setTimeout(() => {
            notify("verify your account in registration page");
          }, 5000);
        });
        updateProfile(result.user, {
          displayName: name,
          photoURL:file
        })
          .then(() => {
            console.log(result.user);
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="bg-white">
      <Navbar></Navbar>
      <div
        data-aos="zoom-in"
        className="box-full w-[92%] md:w-[35%] mx-auto shadow-2xl bg-[rgb(225 231 243)]">
        <h1 className="text-2xl text-center pt-4 lg:text-5xl  bg-none font-bold">
          Please Sign Up here!!!!
        </h1>

        <form className="card-body" onSubmit={handleRegister}>
          <div className="form-control">
            <input
              type="text"
              placeholder="first name"
              name="firstname"
              className="outline-none focus:outline-none py-[9px] bg-transparent mb-6 border-b-2 border-[#dba8a0] text-3xl"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="last name"
              name="lastname"
              className="outline-none focus:outline-none  mb-6  py-[9px] bg-transparent border-b-2 border-[#dba8a0]  text-3xl"
              required
            />
          </div>
          {/* <div className="form-control">
            <input
              type="file"
              name="file"
              id=""
              className="outline-none focus:outline-none  mb-6  py-[9px] bg-transparent border-b-2 border-[#dba8a0] text-3xl"
              required
            />
          </div> */}
          <div className="form-control">
            <input
              type="email"
              name="email"
              placeholder="email"
              className="outline-none focus:outline-none  mb-6  py-[9px] bg-transparent border-b-2 border-[#dba8a0] text-3xl"
              required
            />
          </div>
          <div className="form-control flex justify-between items-center flex-row ">
            <input
              type={show ? "password" : "text"}
              placeholder="password"
              name="password"
              className="outline-none py-[9px] border-b-2 w-full border-[#dba8a0]  focus:outline-none  bg-transparent text-3xl mb-2"
              required
            />
            <span onClick={() => setShow(!show)}>
              {!show ? (
                <FaEye className="absolute  right-8 text-3xl lg:top-[54%]  md:top-[51%]  top-[54%]" />
              ) : (
                <FaEyeSlash className="absolute right-8 text-3xl lg:top-[54%] md:top-[51%]  top-[54%]" />
              )}
            </span>
          </div>
          <div className="form-control">
            <input
              type="password"
              name="confirmpassword"
              placeholder=" confirm password"
              className="outline-none py-[9px] border-b-2 border-[#dba8a0]  focus:outline-none  bg-transparent text-3xl mb-2"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className=" bg-[#ca786c] mb-5 mt-3  text-3xl text-white py-3 text-center">
              Register
            </button>
          </div>
          <p className="text-2xl text-center mt-3 ">
            Already have an account?
            <Link to="/login">
              <span className="text-[#ca786c] text-xl border-b-2 border-[#dba8a0] pl-3">
                Please login
              </span>
            </Link>
          </p>
          {error && (
            <p className="text-red-600 text-2xl text-center my-2 font-semibold  flex items-center justify-center gap-2">
              <IoIosWarning /> {error}
            </p>
          )}
        </form>
      </div>
      <ToastContainer className="mt-24 text-3xl " />
    </div>
  );
};

export default Register;
