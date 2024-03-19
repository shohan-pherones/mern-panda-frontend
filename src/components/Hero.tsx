"use client";

import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "./ui/button";

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
              <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-[1] bg-black/20"></div>
              <div className="absolute top-0 left-0 right-0 w-full h-full container mx-auto md:p-20 text-center flex flex-col gap-5 items-center justify-center z-[2] text-white">
                <h1 className="text-5xl md:text-7xl font-bold">
                  Now you are in the right place for eat!
                </h1>
                <p className="md:text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                  quam deserunt aliquid omnis modi recusandae maiores, quae
                  veniam a perferendis, possimus architecto accusantium quia
                  odio inventore est cumque voluptatibus assumenda!
                </p>
                <Link href="/#get_started">
                  <Button size="lg" className="md:text-xl bg-orange-500">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
