import img from "@/assets/images/ready-to-use.png"
import { Button } from "@/components/ui/button"

const Ready = () => {
  return (
    <section>
      <div className="relative flex items-center justify-center text-white overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl min-h-64 sm:min-h-80 md:h-113">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${img.src})` }}></div>

        <div className="absolute inset-0 bg-[#000000B2]"></div>
        <div className="relative z-10 p-5 sm:px-6 md:px-0">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-tight sm:leading-snug md:leading-snug">
              Ready to experience seamless <br /> secure payments globally
            </h2>
            <p className="my-3 sm:my-4 md:my-4 text-sm sm:text-base md:text-base text-gray-100">
              Ready for hassle-free, secure payments anywhere in the world? Start using Monks <br /> Pay today it&#39;s
              fast, free, and focused on keeping your transactions secure!
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 justify-center items-center mt-6 sm:mt-8 md:mt-8">
              <Button className="rounded-full h-10 sm:h-12 md:h-14 w-full sm:w-auto sm:px-8 md:px-12 md:w-45 border border-transparent bg-[#2E68FD] font-semibold text-sm sm:text-base cursor-pointer hover:bg-transparent hover:border-[#2E68FD] hover:text-[#2E68FD]">
                Download the App
              </Button>
              <Button className="rounded-full h-10 sm:h-12 md:h-14 w-full sm:w-auto sm:px-8 md:px-12 md:w-45 font-semibold text-sm sm:text-base border border-white bg-transparent hover:bg-white hover:text-black cursor-pointer">
                Get Started Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ready
