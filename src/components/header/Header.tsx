"use client";

import Image from "next/image";
import Logo from "@/../public/img/logo.png";
import { useState } from "react";
import Link from "next/link";
import Cancle from "@/../public/img/cancle.png";
import { useRouter } from "next/navigation";
import { LuMenu } from "react-icons/lu";

export default function Header() {
  // state for popup
  const [isPopup, setIsPopup] = useState(true);

  // state for mobile menu
  const [isMenuOepn, setIsMenuOpen] = useState(false);
  const router = useRouter();
  return (
    <div className="max-w-[1921px] m-auto">
      {/* when mobile menu opens */}
      {isMenuOepn && (
        <div className="w-full h-full bg-white z-50 absolute opacity-90 flex justify-center items-center xl:hidden">
          {/* menus for mobile */}
          <div className="text-[65px] font-medium">
            <h2 className="mb-4 hover:cursor-pointer">Home</h2>
            <h2 className="mb-4 hover:cursor-pointer">Features</h2>
            <h2 className="mb-4 hover:cursor-pointer">How it works</h2>
            <h2 className="mb-4 hover:cursor-pointer">Pricing</h2>
            <h2 className="mb-4 hover:cursor-pointer">About</h2>
            <h2>Contact</h2>
          </div>
          <Image src={Cancle} width={12} height={12} alt="cancle menu" className="w-8 h-8 hover:cursor-pointer absolute right-10 top-6" onClick={()=>setIsMenuOpen(false)}/>
        </div>
      )}

      {/* popup */}
      {isPopup && (
        <div className="w-full h-[52px] bg-[#eb44b2] flex items-center justify-center abs">
          <div className="flex justify-center items-center rounded-full w-[77px] h-[30px] bg-white mr-3">
            <h3 className="font-[400] text-[14px]">New</h3>
          </div>
          <div className="flex text-[14px] font-[400] text-white">
            <h3>We are excited to announce Lorem Ipsum.</h3>
            <Link href="/" className="underline ml-2">
              Learn more
            </Link>
          </div>
          <Image
            src={Cancle}
            width={15}
            height={15}
            alt="cancle"
            className="invert right-0 absolute mr-10 hover:cursor-pointer"
            onClick={() => setIsPopup(false)}
          />
        </div>
      )}

      {/* header */}
      <div className="w-full h-[80px] bg-white flex items-center justify-between px-8 2xl:px-40">
        <div
          className="flex items-center hover:cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image src={Logo} alt="Gathergram Logo" width={28.24} height={40} />
          <h1 className="text-[20px] xl:text-[30px] font-[500] ml-4">
            GatherGram
          </h1>
        </div>

        <div className="hidden xl:flex text-[16px] font-[400] w-[548px] justify-between ">
          <button>Home</button>
          <button>Features</button>
          <button>How it works</button>
          <button>Pricing</button>
          <button>About</button>
          <button>Contact</button>
        </div>

        <div className="flex xl:text-[16px] text-[13px] items-center">
          <button className="font-[400] mr-4 xl:mr-10 hover:underline" onClick={()=>router.push("/login")}>
            Sign in
          </button>
          <button className="w-[95px] h-[40px] xl:w-[162px] xl:h-[60px] bg-black rounded-full flex justify-center items-center">
            <h3 className="text-white font-[700]">Get started</h3>
          </button>
          <button>
            <LuMenu
              className="w-12 h-12 ml-4 xl:hidden"
              onClick={() => setIsMenuOpen(!isMenuOepn)}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
