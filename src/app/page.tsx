import Faq from "@/sections/Faq";
import Features from "@/sections/Features";
import Footer from "@/sections/Footer";
import Pricing from "@/sections/Pricing";
import Ready from "@/sections/Ready";
import Security from "@/sections/Security";
import Works from "@/sections/Works";

const Home = () => {
  return (
    <div className="space-y-8 sm:space-y-10 md:space-y-12 my-5">
      <Features />
      <Works />
      <Security />
      <Faq />
      <Pricing />
      <Ready />
      <Footer />
    </div>
  );
};

export default Home;
