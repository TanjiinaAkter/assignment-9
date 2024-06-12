// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import logo3 from "../../../src/assets/s-3.jpg";
import logo4 from "../../../src/assets/s-4.jpg";
import logo5 from "../../../src/assets/s-5.jpg";
import logo6 from "../../../src/assets/s-6.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";

const Testimonial = () => {
  return (
    <div className="py-24 px-[12%]">
      <div>
        <h3 className=" text-lg md:text-2xl mb-3">TESTIMONIALS</h3>
        <h1 className="text-xl md:text-5xl ">They Said What We Did</h1>
      </div>
      <div>
        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          // watchSlidesProgress={true}
          //   centeredSlides={false}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            waitForTransition: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 1,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            991: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper">
          <SwiperSlide className=" border-gray-300  border-r-2">
            <div className="p-[1.5rem] bg-[#eeeeee]">
              <p className="text-[1.3rem] lg:text-2xl mb-7 text-justify">
                It was a pleasure to have such great service from wedding diary.
                A friend of mine reffered you guys & to be honest i did not
                regret. Two photographers were very talented & took all the
                shorts brilliantly on time. Despite all the chaas typically nk
                you.
              </p>
              <div className="bottom   flex justify-start items-center gap-6 mt-16">
                <img className="w-[5rem] h-[5rem] rounded-full" src={logo3} />
                <p>Rushil and ridy</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" border-gray-300  border-r-2">
            <div className="p-[1.5rem] bg-[#eeeeee]">
              <p className="text-[1.3rem] lg:text-2xl mb-7 text-justify">
                It was a pleasure to have such great service from wedding diary.
                A friend of mine reffered you guys & to be honest i did not
                regret. Two photographers were very talented & took all the
                shorts brilliantly on time. Despite all the chaas typically nk
                you.
              </p>
              <div className="bottom   flex justify-start items-center gap-6 mt-16">
                <img className="w-[5rem] h-[5rem] rounded-full" src={logo4} />
                <p>Rushil and ridy</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" border-gray-300  border-r-2">
            <div className="p-[1.5rem] bg-[#eeeeee]">
              <p className="text-[1.3rem] lg:text-2xl mb-7 text-justify">
                It was a pleasure to have such great service from wedding diary.
                A friend of mine reffered you guys & to be honest i did not
                regret. Two photographers were very talented & took all the
                shorts brilliantly on time. Despite all the chaas typically nk
                you.
              </p>
              <div className="bottom   flex justify-start items-center gap-6 mt-16">
                <img className="w-[5rem] h-[5rem] rounded-full" src={logo5} />
                <p>Rushil and ridy</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" border-gray-300  border-r-2">
            <div className="p-[1.5rem] bg-[#eeeeee]">
              <p className="text-[1.3rem] lg:text-2xl mb-7 text-justify">
                It was a pleasure to have such great service from wedding diary.
                A friend of mine reffered you guys & to be honest i did not
                regret. Two photographers were very talented & took all the
                shorts brilliantly on time. Despite all the chaas typically nk
                you.
              </p>
              <div className="bottom   flex justify-start items-center gap-6 mt-16">
                <img className="w-[5rem] h-[5rem] rounded-full" src={logo6} />
                <p>Rushil and ridy</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
