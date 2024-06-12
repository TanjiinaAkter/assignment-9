import Navbar from "../shared/Navbar/Navbar";
// import logo1 from "../../../src/assets/s-1.jpg";
// import logo2 from "../../../src/assets/s-2.jpg";
// import logo3 from "../../../src/assets/s-3.jpg";
// import logo4 from "../../../src/assets/s-4.jpg";
// import logo5 from "../../../src/assets/s-5.jpg";
// import logo6 from "../../../src/assets/s-6.jpg";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const [sixService, setSixService] = useState([]);
  const [showFirstSix, setShowFirstSix] = useState(6);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setSixService(data));
  }, []);
  console.log(sixService);

  return (
    <div>
      <Navbar />
      <div className="border relative">
        <div className="hidden md:block absolute top-[50%] w-[90%] left-[4%] transform py-[5rem] bg-[#e1e1e1]"></div>
        <div className="text-center w-[80%] mx-auto px-4 md:px-8 lg:px-12 xl:px-24">
          <h1 className="mt-20 mb-8 text-[26px] md:text-5xl pb-3">
            Professional Services
          </h1>
          <p className="text-lg">
            Wedding Diary is a team of experienced professional photographers,
            cinematographers, and photo-book experts who are dedicated to
            creating stunning, authentic stories of peoples lives. With a
            passion for capturing the essence of every event, no matter how big
            or small, our team has the skills, resources, and creativity to
            design and implement your dream event.
          </p>

          <div className="service-boxes mt-20 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mb-12  ">
            {sixService.slice(0, showFirstSix).map((six) => (
              <ServiceCard key={six.id} six={six}></ServiceCard>
            ))}
          </div>
          <div className={showFirstSix === sixService.length ? "hidden" : ""}>
            <button
              onClick={() => setShowFirstSix(sixService.length)}
              className=" text-white px-8 py-5 text-3xl bg-[#ca786c]">
              See All Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
Services.propTypes = {
  homeServices: PropTypes.node,
};
