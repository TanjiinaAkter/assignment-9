// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import "./Sliedr.css";
import { Pagination, Navigation, Autoplay, Scrollbar } from "swiper/modules";


const Sliedr = () => {
  return (
    <div className="container mx-auto p-4">
      <Swiper
        slidesPerView={4}
        // navigation
        loop={true}
        speed={4000}
        spaceBetween={10}
        autoplay={{
          delay: 0, // No delay between transitions
          waitForTransition: true, // Keep autoplay even after user interactions
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          // When window width is <= 640px
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // When window width is <= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          // When window width is <= 1024px
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination, Navigation, Autoplay, Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide className="flex flex-col items-center">
          <img
            className="w-full h-64 object-cover"
            src="https://c.ndtvimg.com/2022-07/o21mjbt4_tiger-generic_625x300_29_July_22.jpg?im=Resize=(1230,900)"
            alt=""
          />
          <h1 className="text-xl mt-2">slide-1</h1>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center">
          <img
            className="w-full h-64 object-cover"
            src="https://c.ndtvimg.com/2022-07/o21mjbt4_tiger-generic_625x300_29_July_22.jpg?im=Resize=(1230,900)"
            alt=""
          />
          <h1 className="text-xl mt-2">slide-2</h1>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center">
          <img
            className="w-full h-64 object-cover"
            src="https://c.ndtvimg.com/2022-07/o21mjbt4_tiger-generic_625x300_29_July_22.jpg?im=Resize=(1230,900)"
            alt=""
          />
          <h1 className="text-xl mt-2">slide-3</h1>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center">
          <img
            className="w-full h-64 object-cover"
            src="https://c.ndtvimg.com/2022-07/o21mjbt4_tiger-generic_625x300_29_July_22.jpg?im=Resize=(1230,900)"
            alt=""
          />
          <h1 className="text-xl mt-2">slide-4</h1>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center">
          <img
            className="w-full h-64 object-cover"
            src="https://c.ndtvimg.com/2022-07/o21mjbt4_tiger-generic_625x300_29_July_22.jpg?im=Resize=(1230,900)"
            alt=""
          />
          <h1 className="text-xl mt-2">slide-5</h1>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center">
          <img
            className="w-full h-64 object-cover"
            src="https://c.ndtvimg.com/2022-07/o21mjbt4_tiger-generic_625x300_29_July_22.jpg?im=Resize=(1230,900)"
            alt=""
          />
          <h1 className="text-xl mt-2">slide-6</h1>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center">
          <img
            className="w-full h-64 object-cover"
            src="https://c.ndtvimg.com/2022-07/o21mjbt4_tiger-generic_625x300_29_July_22.jpg?im=Resize=(1230,900)"
            alt=""
          />
          <h1 className="text-xl mt-2">slide-7</h1>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center">
          <img
            className="w-full h-64 object-cover"
            src="https://c.ndtvimg.com/2022-07/o21mjbt4_tiger-generic_625x300_29_July_22.jpg?im=Resize=(1230,900)"
            alt=""
          />
          <h1 className="text-xl mt-2">slide-8</h1>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center">
          <img
            className="w-full h-64 object-cover"
            src="https://c.ndtvimg.com/2022-07/o21mjbt4_tiger-generic_625x300_29_July_22.jpg?im=Resize=(1230,900)"
            alt=""
          />
          <h1 className="text-xl mt-2">slide-9</h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};


export default Sliedr;


