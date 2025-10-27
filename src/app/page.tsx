import Banner from "@/sections/Banner";
import Faq from "@/sections/Faq";
import Features from "@/sections/Features";
import Footer from "@/sections/Footer";
import Navbar from "@/sections/Navbar";
import Pricing from "@/sections/Pricing";
import Promotion from "@/sections/Promotion";
import Ready from "@/sections/Ready";
import Security from "@/sections/Security";
import SliderPartner from "@/sections/SliderPartner";
import Testimonial from "@/sections/Testimonial";
import Works from "@/sections/Works";

const Home = () => {
  return (
    <div>
      <div className="space-y-8 sm:space-y-10 md:space-y-12 my-5">
        <Features />
        <SliderPartner />
        <Works />
        <Security />
        <Faq />
        <Pricing />
        <Testimonial />
        <Ready />
        <Promotion />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
