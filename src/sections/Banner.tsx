import Image from "next/image";
import bannerImg from "@/assets/images/banner.png";
import userImg from "@/assets/images/user.png";
import { Button } from "@/components/ui/button";
import appleSvg from "@/assets/svg/apple.svg";
import googlePlaySvg from "@/assets/svg/googlePlay.svg";

export default function Banner() {
  return (
    <section className="relative h-screen w-full">
      <Image
        src={bannerImg}
        alt="Banner"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 flex justify-between items-center px-20">
        <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <h5 className="uppercase text-[#787878] font-semibold text-xs sm:text-sm md:text-base">
            easy payment
          </h5>
          <h2 className="font-bold text-[#01081B] text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight">
            Pay fast and smarter <br /> from anywhere
          </h2>
          <p>
            Experience the future of payments: fast, secure, and tailored <br /> for
            the next generation&#39;s convenience and trust.
          </p>
          <div className="flex gap-5 text-white text-[10px]">
            <Button className="flex gap-2 p-2 h-12">
              <Image width={24} height={28} src={appleSvg} alt="apple-svg" />
              <div className="flex flex-col leading-none">
                <p className="leading-none">Download on the</p>
                <p className="text-xl leading-none">App Store</p>
              </div>
            </Button>
            <Button className="flex gap-2 p-2 h-12">
              <Image
                width={24}
                height={28}
                src={googlePlaySvg}
                alt="apple-svg"
              />
              <div className="flex flex-col leading-none">
                <p className="leading-none capitalize">Get it on</p>
                <p className="text-xl leading-none">Google Play</p>
              </div>
            </Button>
          </div>
        </div>
        <div>
          <Image
            src={userImg}
            alt="Banner"
            width={450}
            height={700}
            className="object-cover h-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}
