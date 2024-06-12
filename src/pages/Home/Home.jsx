import Navbar from "../shared/Navbar/Navbar";
// import Sliedr from "./Slider/Sliedr";
import logo from "../../assets/wed-5.jpg";
import logo2 from "../../assets/wed-6.jpg";
{
  /* <Sliedr></Sliedr> */
}
import "./Home.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Services from "../Services/Services";
import Testimonial from "./Testimonial";
import Gellary from "./Gallery/Gellary";
import Footer from "../shared/Footer/Footer";

const Home = () => {
  return (
    <div className="bg-transparent h-[screen]">
      <Navbar></Navbar>
      <div className="h-auto">
        <Swiper
          spaceBetween={0}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper ">
          <SwiperSlide>
            <img src={logo} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={logo2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={logo} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={logo} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <Services></Services>
      <Testimonial></Testimonial>
      <Gellary></Gellary>
      <Footer></Footer>
    </div>
  );
};

export default Home;
