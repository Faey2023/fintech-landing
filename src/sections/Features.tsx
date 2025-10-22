import Image from "next/image";
import svg1 from "@/assets/svg/payment.svg";
import svg2 from "@/assets/svg/no-fee.svg";
import svg3 from "@/assets/svg/wallet.svg";
import svg4 from "@/assets/svg/secure.svg";
const Features = () => {
  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-30">
      <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
        <h5 className="uppercase text-[#932EFA] font-semibold text-xs sm:text-sm md:text-base">
          features
        </h5>
        <h2 className="font-bold text-[#01081B] text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight">
          Why choose Easy Pay for <br /> effortless payments?
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mt-4 sm:mt-6 md:mt-8 lg:mt-7">
        <div className="flex flex-col justify-center items-center text-center bg-[#F3F7FF] rounded-2xl p-5.5">
          <Image
            src={svg1}
            width={60}
            height={60}
            alt="payment"
            className="mb-5"
          />
          <h4 className="text-xl font-bold text-[#01081B]">Instant payments</h4>
          <p className="text-[#4D525F] mt-3">
            Send money to friends or family in real-time, for free.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center text-center bg-[#FBF6EF] rounded-2xl p-5.5">
          <Image
            src={svg2}
            width={60}
            height={60}
            alt="payment"
            className="mb-5"
          />
          <h4 className="text-xl font-bold text-[#01081B]">No hidden fees</h4>
          <p className="text-[#4D525F] mt-3">
            Clear and simple pricing. Always be aware of your costs.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center text-center bg-[#EEF9FE] rounded-2xl p-5.5">
          <Image
            src={svg3}
            width={60}
            height={60}
            alt="payment"
            className="mb-5"
          />
          <h4 className="text-xl font-bold text-[#01081B]">Digital wallet</h4>
          <p className="text-[#4D525F] mt-3">
            Store money securely and make fast transfers or purchases.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center text-center bg-[#F4EDFC] rounded-2xl p-5.5">
          <Image
            src={svg4}
            width={60}
            height={60}
            alt="payment"
            className="mb-5"
          />
          <h4 className="text-xl font-bold text-[#01081B]">
            Secure transactions
          </h4>
          <p className="text-[#4D525F] mt-3">
            End-to-end encryption for all transactions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
