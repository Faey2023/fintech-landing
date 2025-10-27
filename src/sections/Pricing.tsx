import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <section>
      <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
        <h5 className="uppercase text-[#932EFA] font-semibold text-xs sm:text-sm md:text-base">
          pricing
        </h5>
        <h2 className="font-bold text-[#01081B] text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight">
          Simple transparent pricing <br /> no hidden fees
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mt-4 sm:mt-6 md:mt-8 lg:mt-7">
        {/* Free Plan Card */}
        <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-6.5 border border-[#E7E7E8] text-[#01081B] flex flex-col h-full">
          <div className="flex-1">
            <h3 className="font-bold text-lg sm:text-xl md:text-2xl">
              Free Plan
            </h3>
            <p className="text-[#4D525F] text-sm sm:text-base">
              Free for personal payments.
            </p>
            <h2 className="font-bold text-4xl sm:text-5xl md:text-5xl lg:text-[56px] mt-2 sm:mt-3">
              $0
              <span className="text-xs sm:text-sm md:text-base font-normal text-[#4D525F]">
                /month
              </span>
            </h2>
            <div className="border-t border-[#CBCBCB] py-3 sm:py-4 md:py-5 space-y-2 sm:space-y-2.5 md:space-y-3.5">
              <p className="inline-flex gap-2 text-xs sm:text-sm md:text-base text-[#4D525F]">
                <span className="size-5 sm:size-6 text-[#2E68FD] bg-[#ECF0FB] rounded-full flex justify-center items-center shrink-0">
                  <Check size={12} strokeWidth={3} className="sm:w-4" />
                </span>
                Up to 100 transactions per month
              </p>
              <p className="inline-flex gap-2 text-xs sm:text-sm md:text-base text-[#4D525F]">
                <span className="size-5 sm:size-6 text-[#2E68FD] bg-[#ECF0FB] rounded-full flex justify-center items-center shrink-0">
                  <Check size={12} strokeWidth={3} className="sm:w-4" />
                </span>
                Basic fraud protection
              </p>
              <p className="inline-flex gap-2 text-xs sm:text-sm md:text-base text-[#4D525F]">
                <span className="size-5 sm:size-6 text-[#2E68FD] bg-[#ECF0FB] rounded-full flex justify-center items-center shrink-0">
                  <Check size={12} strokeWidth={3} className="sm:w-4" />
                </span>
                Email support
              </p>
            </div>
          </div>
          <Button className="mt-4 sm:mt-5 md:mt-6 rounded-full h-10 sm:h-12 md:h-14 w-full font-semibold text-black border border-black bg-transparent hover:bg-black hover:text-white cursor-pointer text-sm sm:text-base">
            Get Started Now
          </Button>
        </div>

        {/* Advanced Plan Card */}
        <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-6.5 bg-[#01081B] text-white flex flex-col h-full">
          <div className="flex-1">
            <h3 className="font-bold text-lg sm:text-xl md:text-2xl">
              Advanced
            </h3>
            <p className="text-[#B1B2B2] text-sm sm:text-base">
              Minimal fees for advanced transactions
            </p>
            <h2 className="font-bold text-4xl sm:text-5xl md:text-5xl lg:text-[56px] mt-2 sm:mt-3">
              $19
              <span className="text-xs sm:text-sm md:text-base font-normal text-[#B1B2B2]">
                /month
              </span>
            </h2>
            <div className="border-t border-[#505050] py-3 sm:py-4 md:py-5 space-y-2 sm:space-y-2.5 md:space-y-3.5">
              <p className="inline-flex gap-2 text-xs sm:text-sm md:text-base text-[#B1B2B2]">
                <span className="size-5 sm:size-6 text-white bg-[#26272C] rounded-full flex justify-center items-center shrink-0">
                  <Check size={12} strokeWidth={3} className="sm:w-4" />
                </span>
                Up to 1000 transactions per month
              </p>
              <p className="inline-flex gap-2 text-xs sm:text-sm md:text-base text-[#B1B2B2]">
                <span className="size-5 sm:size-6 text-white bg-[#26272C] rounded-full flex justify-center items-center shrink-0">
                  <Check size={12} strokeWidth={3} className="sm:w-4" />
                </span>
                Advanced proud protection
              </p>
              <p className="inline-flex gap-2 text-xs sm:text-sm md:text-base text-[#B1B2B2]">
                <span className="size-5 sm:size-6 text-white bg-[#26272C] rounded-full flex justify-center items-center shrink-0">
                  <Check size={12} strokeWidth={3} className="sm:w-4" />
                </span>
                Detailed transaction reports
              </p>
              <p className="inline-flex gap-2 text-xs sm:text-sm md:text-base text-[#B1B2B2]">
                <span className="size-5 sm:size-6 text-white bg-[#26272C] rounded-full flex justify-center items-center shrink-0">
                  <Check size={12} strokeWidth={3} className="sm:w-4" />
                </span>
                Priority email & chat support
              </p>
            </div>
          </div>
          <Button className="mt-4 sm:mt-5 md:mt-6 rounded-full h-10 sm:h-12 md:h-14 w-full border border-transparent bg-[#2E68FD] font-semibold cursor-pointer hover:bg-transparent hover:border-[#2E68FD] hover:text-[#2E68FD] text-sm sm:text-base">
            Get Advanced Plan
          </Button>
        </div>

        {/* Business Plan Card */}
        <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-6.5 border border-[#E7E7E8] text-[#01081B] flex flex-col h-full">
          <div className="flex-1">
            <h3 className="font-bold text-lg sm:text-xl md:text-2xl">
              Business
            </h3>
            <p className="text-[#4D525F] text-sm sm:text-base">
              Premium business transactions
            </p>
            <h2 className="font-bold text-4xl sm:text-5xl md:text-5xl lg:text-[56px] mt-2 sm:mt-3">
              $29
              <span className="text-xs sm:text-sm md:text-base font-normal text-[#4D525F]">
                /month
              </span>
            </h2>
            <div className="border-t border-[#CBCBCB] py-3 sm:py-4 md:py-5 space-y-2 sm:space-y-2.5 md:space-y-3.5">
              <p className="inline-flex gap-2 text-xs sm:text-sm md:text-base text-[#4D525F]">
                <span className="size-5 sm:size-6 text-[#2E68FD] bg-[#ECF0FB] rounded-full flex justify-center items-center shrink-0">
                  <Check size={12} strokeWidth={3} className="sm:w-4" />
                </span>
                Unlimited transactions per month
              </p>
              <p className="inline-flex gap-2 text-xs sm:text-sm md:text-base text-[#4D525F]">
                <span className="size-5 sm:size-6 text-[#2E68FD] bg-[#ECF0FB] rounded-full flex justify-center items-center shrink-0">
                  <Check size={12} strokeWidth={3} className="sm:w-4" />
                </span>
                Premium proud protection
              </p>
              <p className="inline-flex gap-2 text-xs sm:text-sm md:text-base text-[#4D525F]">
                <span className="size-5 sm:size-6 text-[#2E68FD] bg-[#ECF0FB] rounded-full flex justify-center items-center shrink-0">
                  <Check size={12} strokeWidth={3} className="sm:w-4" />
                </span>
                Detailed transaction reports
              </p>
              <p className="inline-flex gap-2 text-xs sm:text-sm md:text-base text-[#4D525F]">
                <span className="size-5 sm:size-6 text-[#2E68FD] bg-[#ECF0FB] rounded-full flex justify-center items-center shrink-0">
                  <Check size={12} strokeWidth={3} className="sm:w-4" />
                </span>
                Priority email & chat support
              </p>
            </div>
          </div>
          <Button className="mt-4 sm:mt-5 md:mt-6 rounded-full h-10 sm:h-12 md:h-14 w-full font-semibold text-[#01081B] border border-[#01081B] bg-transparent hover:bg-[#01081B] hover:text-white cursor-pointer text-sm sm:text-base">
            Get Business Plan
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
