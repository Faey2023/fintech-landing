import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <section>
      <div className="text-center">
        <h5 className="uppercase text-[#932EFA] font-semibold ">pricing</h5>
        <h2 className="font-bold text-[#01081B] text-[40px]">
          Simple transparent pricing <br /> no hidden fees
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-7">
        <div className="rounded-3xl p-6.5 border border-[#E7E7E8] text-[#01081B] flex flex-col h-full">
          <div className="flex-1">
            <h3 className="font-bold text-2xl">Free Plan</h3>
            <p className="text-[#4D525F]">Free for personal payments.</p>
            <h2 className="font-bold text-[56px]">
              $0
              <span className="text-base font-normal text-[#4D525F]">
                /month
              </span>
            </h2>
            <div className="border-t border-[#CBCBCB] py-5 space-y-3.5">
              <p className="inline-flex gap-2 text-[#4D525F]">
                <span className="size-6 text-[#2E68FD] bg-[#ECF0FB] rounded-full flex justify-center items-center">
                  <Check size={15} strokeWidth={3} />
                </span>
                Up to 100 transactions per month
              </p>
              <p className="inline-flex gap-2 text-[#4D525F]">
                <span className="size-6 text-[#2E68FD] bg-[#ECF0FB] rounded-full flex justify-center items-center">
                  <Check size={15} strokeWidth={3} />
                </span>
                Basic fraud protection
              </p>
              <p className="inline-flex gap-2 text-[#4D525F]">
                <span className="size-6 text-[#2E68FD] bg-[#ECF0FB] rounded-full flex justify-center items-center">
                  <Check size={15} strokeWidth={3} />
                </span>
                Email support
              </p>
            </div>
          </div>
          <Button className="mt-6 rounded-full h-14 w-full font-semibold text-black border border-black bg-transparent hover:bg-black hover:text-white cursor-pointer">
            Get Started Now
          </Button>
        </div>

        <div className="rounded-3xl p-6.5 bg-[#01081B] text-white ">
          <h3 className="font-bold text-2xl">Advanced</h3>
          <p className="text-[#B1B2B2]">
            Minimal fees for advanced transactions
          </p>
          <h2 className="font-bold text-[56px]">
            $19
            <span className="text-base font-normal text-[#B1B2B2]">/month</span>
          </h2>
          <div className="border-t border-[#505050] py-5 space-y-3.5">
            <p className="inline-flex gap-2 text-[#B1B2B2]">
              <span className="size-6 text-white bg-[#26272C] rounded-full flex justify-center items-center">
                <Check size={15} strokeWidth={3} />
              </span>
              Up to 1000 transactions per month
            </p>
            <p className="inline-flex gap-2 text-[#B1B2B2]">
              <span className="size-6 text-white bg-[#26272C] rounded-full flex justify-center items-center">
                <Check size={15} strokeWidth={3} />
              </span>
              Advanced proud protection
            </p>
            <p className="inline-flex gap-2 text-[#B1B2B2]">
              <span className="size-6 text-white bg-[#26272C] rounded-full flex justify-center items-center">
                <Check size={15} strokeWidth={3} />
              </span>
              Detailed transaction reports
            </p>
            <p className="inline-flex gap-2 text-[#B1B2B2]">
              <span className="size-6 text-white bg-[#26272C] rounded-full flex justify-center items-center">
                <Check size={15} strokeWidth={3} />
              </span>
              Priority email & chat support
            </p>
          </div>
          <Button className="rounded-full h-14 w-full border border-transparent bg-[#2E68FD] font-semibold cursor-pointer hover:bg-transparent hover:border-[#2E68FD] hover:text-[#2E68FD]">
            Get Advanced Plan
          </Button>
        </div>

        <div className="rounded-3xl p-6.5 border border-[#E7E7E8] text-[#01081B]">
          <h3 className="font-bold text-2xl">Business</h3>
          <p className="text-[#4D525F]">Premium business transactions</p>
          <h2 className="font-bold text-[56px]">
            $29
            <span className="text-base font-normal text-[#4D525F]">/month</span>
          </h2>
          <div className="border-t border-[#CBCBCB] py-5 space-y-3.5">
            <p className="inline-flex gap-2 text-[#4D525F]">
              <span className="size-6 text-[#2E68FD] bg-[#ECF0FB] rounded-full flex justify-center items-center">
                <Check size={15} strokeWidth={3} />
              </span>
              Unlimited transactions per month
            </p>
            <p className="inline-flex gap-2 text-[#4D525F]">
              <span className="size-6 text-[#2E68FD] bg-[#ECF0FB] rounded-full flex justify-center items-center">
                <Check size={15} strokeWidth={3} />
              </span>
              Premium proud protection
            </p>
            <p className="inline-flex gap-2 text-[#4D525F]">
              <span className="size-6 text-[#2E68FD] bg-[#ECF0FB] rounded-full flex justify-center items-center">
                <Check size={15} strokeWidth={3} />
              </span>
              Detailed transaction reports
            </p>
            <p className="inline-flex gap-2 text-[#4D525F]">
              <span className="size-6 text-[#2E68FD] bg-[#ECF0FB] rounded-full flex justify-center items-center">
                <Check size={15} strokeWidth={3} />
              </span>
              Priority email & chat support
            </p>
          </div>
          <Button className="rounded-full h-14 w-full font-semibold text-[#01081B] border border-[#01081B] bg-transparent hover:bg-[#01081B] hover:text-white cursor-pointer">
            Get Business Plan
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
