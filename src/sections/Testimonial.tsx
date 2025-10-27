"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
// import { Autoplay } from "swiper/modules";
import "swiper/css";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import img1 from "@/assets/images/reviewer-1.png";
import img2 from "@/assets/images/reviewer-2.png";
import Image, { StaticImageData } from "next/image";

type Testimonial = {
  id: number;
  name: string;
  position: string;
  message: string;
  image: StaticImageData;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alice",
    position: "CEO, Company",
    image: img1,
    message:
      "Experience a payment app built on simplicity and transparency. No hidden fees, just a seamless user experience that makes every transaction easy and stress-free. Say goodbye to confusion and hello to straightforward payments.",
  },
  {
    id: 2,
    name: "Bob",
    position: "Developer, TechCo",
    image: img2,
    message:
      "Discover a payment app focused on simplicity and transparency. Enjoy a seamless experience with no hidden fees, providing clarity and ease in every transaction. It’s designed to put you in control of your payments.",
  },
  {
    id: 3,
    name: "Charlie",
    position: "Designer, CreativeStudio",
    image: img1,
    message:
      "Experience a payment app built on simplicity and transparency. No hidden fees, just a seamless user experience that makes every transaction easy and stress-free. Say goodbye to confusion and hello to straightforward payments.",
  },
  {
    id: 4,
    name: "Diana",
    position: "Manager, BusinessInc",
    image: img2,
    message:
      "Discover a payment app focused on simplicity and transparency. Enjoy a seamless experience with no hidden fees, providing clarity and ease in every transaction. It’s designed to put you in control of your payments.",
  },
];

const Testimonial=()=> {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="flex flex-col lg:flex-row items-start gap-10">
        <div className="px-6 lg:px-20 flex flex-col gap-2">
          <h5 className="uppercase text-[#932EFA] font-semibold text-xs sm:text-sm md:text-base">
            testimonial
          </h5>

          <h2 className="font-bold text-[#01081B] text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight">
            We’ve build trust with <br /> reviews from real users
          </h2>
          <p className="text-[#4D525F] w-fit">
            Boost your credibility by featuring genuine testimonials from real{" "}
            <br /> users, showcasing their positive experiences and satisfaction
            with <br /> Easy Pay services.
          </p>

          {/* navigation buttons */}
          <div className="flex gap-4 mt-4">
            <button
              className="flex justify-center items-center bg-white rounded-full size-14 shadow hover:bg-black hover:text-white transition cursor-pointer border border-[#CFD0D1]"
              onClick={() => swiperInstance?.slidePrev()}
            >
              <ChevronLeft />
            </button>
            <button
              className="flex justify-center items-center bg-white rounded-full size-14 shadow hover:bg-black hover:text-white transition cursor-pointer border border-[#CFD0D1]"
              onClick={() => swiperInstance?.slideNext()}
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        <div className="w-1/3 flex-1 relative">
          <Swiper
            // modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1.5}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            onSwiper={setSwiperInstance}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white rounded-2xl p-6 shadow-md h-full flex flex-col justify-between">
                  <div className="flex gap-2">
                    <Star fill="#FCBE1D" stroke="#FCBE1D" size={15} />
                    <Star fill="#FCBE1D" stroke="#FCBE1D" size={15} />
                    <Star fill="#FCBE1D" stroke="#FCBE1D" size={15} />
                    <Star fill="#FCBE1D" stroke="#FCBE1D" size={15} />
                    <Star fill="#FCBE1D" stroke="#FCBE1D" size={15} />
                  </div>
                  <p className="text-gray-700 mb-4">{testimonial.message}</p>
                  <div className="flex gap-2">
                    <div className="w-10 h-10 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.image}
                        alt={`image of ${testimonial.name}`}
                        width={40}
                        height={40}
                        className="object-cover object-top-left w-full h-full"
                      />
                    </div>

                    <div className="mt-auto">
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>a
    </section>
  );
}

export default Testimonial