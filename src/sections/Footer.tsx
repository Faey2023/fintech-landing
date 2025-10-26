import Logo from "@/components/shared/Logo";

const Footer = () => {
  return (
    <section>
      <div className="flex justify-between pb-3">
        <div className="space-y-10">
          <Logo />
          <p className="text-[#4D525F]">
            Easy Pay offers secure, seamless, and <br /> fee-free payments for
            effortless global <br /> transactions.
          </p>
        </div>
        <div className="flex gap-12.5">
          <div>
            <h3 className="font-bold text-xl text-[#01081B]">Short links</h3>
            <ul className="text-[#4D525F] space-y-2 mt-2">
              <li>Features</li>
              <li>How it works</li>
              <li>Security</li>
              <li>Testimonial</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl text-[#01081B]">Other pages</h3>
            <ul className="text-[#4D525F] space-y-2 mt-2">
              <li>Privacy policy</li>
              <li>Terms & conditions</li>
              <li>404</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="border-[#E7E7E8] border-t font-light text-[#878787] pt-2 text-center">
        2024 ©Easy Pay. All rights reserved. Fintech Landing Page by MUHIB
      </p>
    </section>
  );
};

export default Footer;
