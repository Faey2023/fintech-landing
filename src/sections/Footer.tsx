import Logo from "@/components/shared/Logo";

const Footer = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-0 pb-3">
        <div className="space-y-6 sm:space-y-8 md:space-y-10">
          <Logo />
          <p className="text-xs sm:text-sm md:text-base text-[#4D525F] leading-relaxed">
            Easy Pay offers secure, seamless, and <br /> fee-free payments for
            effortless global <br /> transactions.
          </p>
        </div>
        <div className="flex gap-6 sm:gap-8 md:gap-12.5">
          <div>
            <h3 className="font-bold text-base sm:text-lg md:text-xl text-[#01081B]">
              Short links
            </h3>
            <ul className="text-xs sm:text-sm md:text-base text-[#4D525F] space-y-1.5 sm:space-y-2 md:space-y-2 mt-2 md:mt-3">
              <li>Features</li>
              <li>How it works</li>
              <li>Security</li>
              <li>Testimonial</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-base sm:text-lg md:text-xl text-[#01081B]">
              Other pages
            </h3>
            <ul className="text-xs sm:text-sm md:text-base text-[#4D525F] space-y-1.5 sm:space-y-2 md:space-y-2 mt-2 md:mt-3">
              <li>Privacy policy</li>
              <li>Terms & conditions</li>
              <li>404</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="border-[#E7E7E8] border-t font-light text-[#878787] pt-2 md:pt-3 text-center text-xs sm:text-sm md:text-base mt-6 md:mt-8">
        2024 ©Easy Pay. All rights reserved. Fintech Landing Page by MUHIB
      </p>
    </section>
  );
};

export default Footer;
