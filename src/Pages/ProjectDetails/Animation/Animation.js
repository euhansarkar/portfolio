import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import SlideItem from "./SlideItem";


const Animation = ({ images }) => {
  return (
    <>
      <div className="carousel w-full h-3/5"></div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((slider, index) => (
          <SwiperSlide>
            <SlideItem slider={slider} key={index} ></SlideItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Animation;
