import img from "@/assets/images/ready-to-use.png";
import { Button } from "@/components/ui/button";

const Ready = () => {
  return (
    <section>
      <div className="relative flex items-center justify-center text-white overflow-hidden h-113 rounded-2xl">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${img.src})` }}
        ></div>

        <div className="absolute inset-0 bg-[#000000B2]"></div>
        <div className="relative z-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-[40px] font-bold">
              Ready to experience seamless <br /> secure payments globally
            </h2>
            <p className="my-4">
              Ready for hassle-free, secure payments anywhere in the world?
              Start using Monks <br /> Pay today it&#39;s fast, free, and
              focused on keeping your transactions secure!
            </p>

            <div className="flex gap-5 justify-center items-center">
              <Button className="rounded-full h-14 w-45 border border-transparent bg-[#2E68FD] font-semibold cursor-pointer hover:bg-transparent hover:border-[#2E68FD] hover:text-[#2E68FD]">
                Download the App
              </Button>
              <Button className="rounded-full h-14 w-45 font-semibold border border-white bg-transparent hover:bg-white hover:text-black cursor-pointer">
                Get Started Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ready;
