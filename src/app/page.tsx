// import Faq from "@/sections/Faq";
// import Footer from "@/sections/Footer";
// import Pricing from "@/sections/Pricing";
// import Ready from "@/sections/Ready";

// const Home = () => {
//   return (
//     <div className="space-y-10 mx-10 md:mx-30 mb-5">
//       <Faq />
//       <Pricing />
//       <Ready />
//       <Footer />
//     </div>
//   );
// };

// export default Home;

import Faq from "@/sections/Faq";
import Footer from "@/sections/Footer";
import Pricing from "@/sections/Pricing";
import Ready from "@/sections/Ready";

const Home = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-30 space-y-8 sm:space-y-10 md:space-y-12 mb-5">
      <Faq />
      <Pricing />
      <Ready />
      <Footer />
    </div>
  )
}

export default Home
