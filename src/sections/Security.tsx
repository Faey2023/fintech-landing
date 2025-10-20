const Security = () => {
  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-30">
      <h5 className="uppercase text-[#932EFA] font-semibold text-xs sm:text-sm md:text-base">
        security
      </h5>
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-[#01081B] text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight">
          We protect your money at <br /> every step with Easy Pay
        </h2>
        <p className="text-[#4D525F] w-fit">
          Easy Pay ensures your money is protected at every <br /> step with
          advanced encryption, real-time monitoring, <br /> and multi-factor
          authentication.
        </p>
      </div>

      <div className="my-6 sm:my-8 md:my-10 lg:my-12 bg-[#F6F6F6] rounded-2xl p-10 space-y-15">
        <div className="grid grid-cols-3 gap-x-8 md:gap-x-12">
          <div className="text-center md:text-left">
            <span className="rounded-full bg-[#ECF0FB] size-7 inline-flex justify-center items-center mb-3.5">
              <span className="rounded-full bg-[#2E68FD] size-2.5"></span>
            </span>
            <h4 className="text-xl font-bold text-[#01081B] mb-2">
              Two-factor authentication
            </h4>
            <p className="text-[#4D525F]">
              Two-factor authentication ensures added protection by using
              verification steps.
            </p>
          </div>

          <div className="text-center md:text-left border-x border-[#CBCBCB] px-8">
            <span className="rounded-full bg-[#FEEDED] size-7 inline-flex justify-center items-center mb-3.5">
              <span className="rounded-full bg-[#FC4343] size-2.5"></span>
            </span>
            <h4 className="text-xl font-bold text-[#01081B] mb-2">
              Fraud detection and alerts
            </h4>
            <p className="text-[#4D525F]">
              Fraud detection safeguards your money, sending instant alerts for
              any activity.
            </p>
          </div>

          <div className="text-center md:text-left">
            <span className="rounded-full bg-[#E5FCF2] size-7 inline-flex justify-center items-center mb-3.5">
              <span className="rounded-full bg-[#08A965] size-2.5"></span>
            </span>
            <h4 className="text-xl font-bold text-[#01081B] mb-2">
              Transaction notifications
            </h4>
            <p className="text-[#4D525F]">
              Instant notifications for transaction keep you informed to manage
              your finances.
            </p>
          </div>
        </div>

        {/* 2nd row */}
        <div className="grid grid-cols-3 gap-x-8 md:gap-x-12">
          <div className="text-center md:text-left">
            <span className="rounded-full bg-[#E1F1F9] size-7 inline-flex justify-center items-center mb-3.5">
              <span className="rounded-full bg-[#3B7793] size-2.5"></span>
            </span>
            <h4 className="text-xl font-bold text-[#01081B] mb-2">
              Biometric access
            </h4>
            <p className="text-[#4D525F]">
              Easily and securely log in with biometric features, and facial
              recognition.
            </p>
          </div>

          <div className="text-center md:text-left border-x border-[#CBCBCB] px-8">
            <span className="rounded-full bg-[#FAEEE2] size-7 inline-flex justify-center items-center mb-3.5">
              <span className="rounded-full bg-[#D77E1B] size-2.5"></span>
            </span>
            <h4 className="text-xl font-bold text-[#01081B] mb-2">
              End-to-end encryption
            </h4>
            <p className="text-[#4D525F]">
              By encryption, protecting your data from unauthorized access.
            </p>
          </div>

          <div className="text-center md:text-left">
            <span className="rounded-full bg-[#F4EDFC] size-7 inline-flex justify-center items-center mb-3.5">
              <span className="rounded-full bg-[#932EFA] size-2.5"></span>
            </span>
            <h4 className="text-xl font-bold text-[#01081B] mb-2">
              24/7 Protection support
            </h4>
            <p className="text-[#4D525F]">
              Our dedicated team is available around the clock to help you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
