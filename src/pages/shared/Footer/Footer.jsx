import { FcGoogle } from "react-icons/fc";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-black flex-wrap md:space-y-3 px-6 py-12 flex justify-between items-center text-white">
      <div>
        <h3 className="text-2xl mb-7">WEDD PLANNER</h3>
        <p>COPYRIGHT © 2023 ALL RIGHTS RESERVED.</p>
      </div>
      <div className="flex my-4 justify-start  gap-2 items-center bg-white px-8 py-4 rounded-md text-black">
        <FcGoogle className="text-2xl" />
        <div className="icons flex text-2xl justify-start gap-2 items-center text-yellow-400">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </div>
        <p className="font-semibold">Read our 346 reviews</p>
      </div>
      <div className="flex justify-start  gap-2 items-center">
        <h4 className="text-gray-600">FIND ME ON:</h4>
        <div className="flex justify-start  gap-2 items-center">
          <a href="">FACEBOOK</a>
          <a href="">INSTAGRAM</a>
          <a href="">YOUTUBE</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
