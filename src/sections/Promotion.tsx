"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import img from "@/assets/images/works.jpg";

type TimeLeft = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

const Promotion = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const storedExpiry = localStorage.getItem("promo-expiry");
    let expiry = storedExpiry ? parseInt(storedExpiry) : null;

    if (!expiry) {
      expiry = new Date().setDate(new Date().getDate() + 1);
      localStorage.setItem("promo-expiry", expiry.toString());
    }

    const updateTimer = () => {
      const diff = expiry! - new Date().getTime();
      const remaining = Math.max(0, Math.floor(diff / 1000));

      const days = Math.floor(remaining / 86400);
      const hours = Math.floor((remaining % 86400) / 3600);
      const minutes = Math.floor((remaining % 3600) / 60);
      const seconds = remaining % 60;

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center text-[#01081B] bg-[#F4EDFC] px-4 sm:px-6 md:px-8 lg:px-16 xl:px-30">
      <div className="flex flex-col md:flex-row w-full items-center justify-center pt-5 md:pt-0 gap-10">
        <Image src={img} alt="Easy Pay App Preview" width={500} height={250} />

        <div className="flex flex-col justify-center md:w-[30%]">
          <div className="space-y-5">
            <span className="uppercase text-xm tracking-[5px]">
              Exclusive Launch Offer
            </span>
            <h2 className="text-[40px] font-bold">
              Experience Payments Made Easy
            </h2>
            <p className="text-lg tracking-[0.5px] text-[#01081B]/90">
              Join thousands switching to Easy Pay — a faster, safer, and
              fee-free way to send and receive money worldwide.
            </p>
          </div>

          <div className="flex text-[40px] md:text-[60px] uppercase justify-center md:justify-start">
            {["days", "hours", "minutes", "seconds"].map((key, i) => (
              <div key={key} className="flex items-center">
                <div className="flex flex-col gap-2.5 items-center justify-center px-3 py-2.5 rounded-full">
                  <span className=" font-semibold">
                    {timeLeft[key as keyof TimeLeft]}
                  </span>
                </div>
                {i < 3 && <span className="colon">:</span>}
              </div>
            ))}
          </div>
          <Button className="rounded-full h-10 sm:h-12 md:h-14 w-42.5 border border-transparent bg-[#2E68FD] font-semibold cursor-pointer hover:bg-transparent hover:border-[#2E68FD] hover:text-[#2E68FD] text-sm sm:text-base">
            Get Early Access
          </Button>
        </div>
      </div>
    </section>
  );
};
export default Promotion;
