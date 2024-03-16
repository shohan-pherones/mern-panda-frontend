"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const data = [
  "/images/slide-1.jpg",
  "/images/slide-2.jpg",
  "/images/slide-3.jpg",
];

const Hero = () => {
  return (
    <div className="w-full h-[calc(100vh-86px)]">
      <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        grabCursor={true}
        navigation={true}
        speed={750}
        modules={[Navigation, Autoplay, Pagination]}
        className="w-full h-full"
      >
        {data.map((url, i) => (
          <SwiperSlide key={i + url}>
            <div className="w-full h-full relative">
              <Image
                src={url}
                alt="food"
                priority
                fill
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
