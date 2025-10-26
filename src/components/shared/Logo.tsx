import Image from "next/image";
import logo from "@/assets/images/logo.png";

const Logo = () => {
    return (
   <div className="flex gap-2">
        <Image src={logo} width={30} height={17} alt="logo" />
        <p className="text-[#01081B] font-bold text-3xl">Easy Pay</p>
      </div>
    );
};

export default Logo;