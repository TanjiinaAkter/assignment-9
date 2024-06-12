import { NavLink, useLocation } from "react-router-dom";
import logo from "/assets/logo-white-wedding.png";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();
  const logoutBtn = () => {
    logout();
  };
  // console.log(location)
  const isHomePage = location.pathname === "/";
  console.log(isHomePage);
  const links = (
    <div className="flex  transition-all flex-col md:flex-col lg:flex-row   justify-center items-center   hover:bg-none">
      <li className="custom-css ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "activeer"
              : " font-semibold m-3 lg:text-2xl  text-black lg:text-white "
          }>
          Home
        </NavLink>
      </li>
      <li className="custom-css">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "activeer"
              : " font-semibold m-3 text-lg lg:text-2xl text-black lg:text-white"
          }>
          About Us
        </NavLink>
      </li>
      <li className="custom-css">
        <NavLink
          to="/Allservices"
          className={({ isActive }) =>
            isActive
              ? "activeer"
              : " font-semibold m-3 lg:text-2xl text-black lg:text-white"
          }>
          Services
        </NavLink>
      </li>
      <li className="custom-css">
        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            isActive
              ? "activeer"
              : " font-semibold m-3 lg:text-2xl text-black lg:text-white"
          }>
          Portfolio
        </NavLink>
      </li>
      <li className="custom-css">
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive
              ? "activeer"
              : " font-semibold m-3 lg:text-2xl text-black lg:text-white"
          }>
          Blog
        </NavLink>
      </li>
      <li className="custom-css">
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "activeer"
              : " font-semibold ml-2  lg:text-2xl text-black lg:text-white"
          }>
          Contact Us
        </NavLink>
      </li>
    </div>
  );
  // bg-[#d69086]        // <div className="navbar h-[5rem]  bg-[rgba(0,0,0,0.4)] fixed top-0 left-0 w-full z-50">
  return (
    <div
      className={`navbar h-[6rem]  fixed top-0  left-0 w-full z-50 ${
        isHomePage ? "bg-[rgba(0,0,0,0.4)]" : "bg-slate-800"
      }`}>
      <div className="navbar-start">
        <div className="dropdown overflow-visible lg:overflow-hidden z-40 opacity-1 ">
          <div tabIndex={0} role="button" className="btn  lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu bg-white text-black space-y-2  menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img
            className="w-[15rem] md:w-[25rem] lg:w-[19rem]"
            src={logo}
            alt="Logo"
          />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="space-x-5 menu-horizontal bg-transparent px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex justify-between items-center gap-2">
            <p className="text-green-500 text-2xl md:text-3xl">
              {user.displayName}
            </p>
            <img className="w-[4rem] h-[4rem] rounded-full border-4 inset-0 border-white" src={user.photoURL} alt="" />
            <a href="/login" onClick={logoutBtn} className="btn text-xl">
              Logout
            </a>
          </div>
        ) : (
          <a href="/login" className="btn text-xl">
            Login
          </a>
        )}
      </div>
    </div>
  );
};

export default Navbar;
