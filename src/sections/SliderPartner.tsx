"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useEffect, useState } from "react";
import Image from "next/image";
import partner1 from "@/assets/svg/partner-1.svg";
import partner2 from "@/assets/svg/partner-2.svg";
import partner3 from "@/assets/svg/partner-3.svg";
import partner4 from "@/assets/svg/partner-4.svg";
import partner5 from "@/assets/svg/partner-5.svg";
import partner6 from "@/assets/svg/partner-6.svg";

const SliderPartner = () => {
  // code for responsive slides
  const [slidesPerView, setSlidesPerView] = useState<number>(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSlidesPerView(7);
      } else if (window.innerWidth >= 576) {
        setSlidesPerView(6);
      } else if (window.innerWidth >= 400) {
        setSlidesPerView(5);
      } else {
        setSlidesPerView(4);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const images = [
    {
      id: 1,
      src: partner1,
    },
    {
      id: 2,
      src: partner2,
    },
    {
      id: 3,
      src: partner3,
    },
    {
      id: 4,
      src: partner4,
    },
    {
      id: 5,
      src: partner5,
    },
    {
      id: 6,
      src: partner6,
    },
    {
      id: 7,
      src: partner1,
    },
  ];
  //

  return (
    <>
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={slidesPerView}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <Image
              className="grayscale hover:grayscale-0"
              src={image.src}
              alt={`slides no ${image.id}`}
              width={100}
              height={20}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SliderPartner;
