import logo3 from "../../../assets/wed-4.jpg";
import logo4 from "../../../assets/s-4.jpg";
import logo5 from "../../../assets/s-5.jpg";
import logo6 from "../../../assets/s-6.jpg";
import logo1 from "../../../assets/wed-1.jpg";
import logo2 from "../../../assets/wed-3.jpg";
import logo7 from "../../../assets/wed-4.jpg";
import logo8 from "../../../assets/wed-5.jpg";
import logo9 from "../../../assets/wed-2.jpg";
import "./Gallery.css";

const Gellary = () => {
  return (
    <div className="mb-6">
      <div>
        <h1 className="text-2xl md:text-5xl text-center py-24">Our Gallery</h1>
        <div className="gallery-container px-[12%] grid-cols-1 md:grid-cols-2 lg:grid-col-3">
          <div className="box .v-strech">
            <img src={logo1} alt="" />
          </div>
          <div className="box full-strech">
            <img src={logo2} alt="" />
          </div>
          <div className="box v-strech">
            <img src={logo3} alt="" />
          </div>
          <div className="box">
            <img src={logo4} alt="" />
          </div>
          <div className="box v-strech">
            <img src={logo5} alt="" />
          </div>
          <div className="box h-strech">
            <img src={logo6} alt="" />
          </div>
          <div className="box ">
            <img src={logo7} alt="" />
          </div>
          <div className="box ">
            <img src={logo8} alt="" />
          </div>
          <div className="box h-strech">
            <img src={logo9} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gellary;
