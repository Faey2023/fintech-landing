import img from "@/assets/images/works.jpg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import svg1 from "@/assets/svg/easy_pay.svg";
import svg2 from "@/assets/svg/link.svg";
import svg3 from "@/assets/svg/start.svg";

const Works = () => {
  return (
    <section className="p-4 sm:p-6 md:p-8 lg:p-16 xl:p-30 bg-[#F6F6F6]">
      <div className="flex justify-between items-end">
        <div>
          <h5 className="uppercase text-[#932EFA] font-semibold text-xs sm:text-sm md:text-base">
            how it works
          </h5>
          <h2 className="font-bold text-[#01081B] text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight">
            Make payments, transfers, and <br /> more in 3 simple steps
          </h2>
        </div>
        <Button className="mt-4 sm:mt-5 md:mt-6 rounded-full h-10 sm:h-12 md:h-14 w-42.5 border border-transparent bg-[#2E68FD] font-semibold cursor-pointer hover:bg-transparent hover:border-[#2E68FD] hover:text-[#2E68FD] text-sm sm:text-base">
          Get Started Now
        </Button>
      </div>

      <div className="my-6 sm:my-8 md:my-10 lg:my-12 bg-white rounded-3xl p-10">
        <div className="flex justify-center items-center gap-12 md:gap-8 relative">
          <div className="relative flex flex-col items-start text-left">
            <span className="absolute text-[80px] font-bold text-[#01081B]/10 -top-10">
              01
            </span>
            <Image
              src={svg1}
              alt="easy_pay"
              className="mt-6"
              width={48}
              height={48}
            />
            <h3 className="text-xl font-bold text-[#01081B] mt-6">
              Download Easy Pay
            </h3>
            <p className="text-[#4D525F] leading-relaxed mt-2">
              Get the Easy Pay app today from the App Store or Google Play
              hassle free.
            </p>
          </div>

          <div className="hidden md:block w-px bg-[#F5F5F5] h-40" />

          <div className="relative flex flex-col items-start text-left">
            <span className="absolute text-[80px] font-bold text-[#01081B]/10 -top-10">
              02
            </span>
            <Image
              src={svg2}
              alt="link"
              className="mt-6"
              width={48}
              height={48}
            />
            <h3 className="text-xl font-semibold text-[#01081B] mt-6">
              Link your bank or card
            </h3>
            <p className="text-[#4D525F] leading-relaxed mt-2">
              Easily connect your account in seconds with advanced security for
              peace of mind.
            </p>
          </div>

          <div className="hidden md:block w-px bg-[#F5F5F5] h-40" />

          <div className="relative flex flex-col items-start text-left">
            <span className="absolute text-[80px] font-extrabold text-[#01081B]/10 -top-10">
              03
            </span>
            <Image
              src={svg3}
              alt="start"
              className="mt-6"
              width={48}
              height={48}
            />
            <h3 className="text-xl font-semibold text-[#01081B] mt-6">
              Start paying
            </h3>
            <p className="text-[#4D525F] leading-relaxed mt-2">
              Easily split bills, send money to friends, and make smooth online
              payments instantly.
            </p>
          </div>
        </div>
      </div>

      <Image
        src={img}
        className="rounded-[12px]"
        alt="how-it-works-section-image"
        width={0}
        height={0}
      />
    </section>
  );
};

export default Works;
