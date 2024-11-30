"use client";

import Image from "next/image";
import Logo from "@/../public/img/logo.png";
import { useState } from "react";
import Link from "next/link";
import Cancle from "@/../public/img/cancle.png";
import { useRouter, usePathname } from "next/navigation";
import { LuMenu } from "react-icons/lu";

export default function Header() {
  // state for popup
  const [isPopup, setIsPopup] = useState(true);

  // state for mobile menu
  const [isMenuOepn, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // scroll to section (only when pathname is "/")
  const onClickMoveToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="max-w-[1921px] m-auto w-full fixed z-40 top-0 left-0 right-0"
    >
      {/* when mobile menu opens */}
      {isMenuOepn && (
        <div className="w-full h-full bg-white z-50 fixed opacity-90 flex justify-center items-center xl:hidden">
          {/* menus for mobile */}
          <div className="text-[48px] sm:text-[65px] font-medium">
            <h2
              className="mb-4 hover:cursor-pointer"
              onClick={() => {
                onClickMoveToSection("home");
                setIsMenuOpen(false);
              }}
            >
              Home
            </h2>
            <h2
              className="mb-4 hover:cursor-pointer"
              onClick={() => {
                onClickMoveToSection("features");
                setIsMenuOpen(false);
              }}
            >
              Features
            </h2>
            <h2
              className="mb-4 hover:cursor-pointer"
              onClick={() => {
                onClickMoveToSection("howItWorks");
                setIsMenuOpen(false);
              }}
            >
              How it works
            </h2>
            <h2
              className="mb-4 hover:cursor-pointer"
              onClick={() => {
                onClickMoveToSection("pricing");
                setIsMenuOpen(false);
              }}
            >
              Pricing
            </h2>
            <h2
              className="mb-4 hover:cursor-pointer"
              onClick={() => {
                onClickMoveToSection("about");
                setIsMenuOpen(false);
              }}
            >
              About
            </h2>
            <h2
              onClick={() => {
                onClickMoveToSection("contact");
                setIsMenuOpen(false);
              }}
              className="hover:cursor-pointer"
            >
              Contact
            </h2>
          </div>
          <Image
            src={Cancle}
            width={12}
            height={12}
            alt="cancle menu"
            className="w-8 h-8 hover:cursor-pointer absolute right-10 top-6"
            onClick={() => setIsMenuOpen(false)}
          />
        </div>
      )}

      {/* popup */}
      {isPopup && (
        <div className="w-full h-[52px] bg-[#eb44b2] flex items-center justify-center abs">
          <div className="flex justify-center items-center rounded-full w-[50px] h-[25px] sm:w-[77px] sm:h-[30px] bg-white mr-3">
            <h3 className="font-[400] text-[12px] sm:text-[14px]">New</h3>
          </div>
          <div className="flex text-[12px] sm:text-[14px] font-[400] text-white mr-10 sm:mr-0">
            <h3>We are excited to announce Lorem Ipsum.</h3>
            <Link href="/" className="underline ml-2 hidden sm:block">
              Learn more
            </Link>
          </div>
          <Image
            src={Cancle}
            width={15}
            height={15}
            alt="cancle"
            className="invert right-0 absolute mr-6 sm:mr-10 hover:cursor-pointer"
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
          <Image
            src={Logo}
            alt="Gathergram Logo"
            width={28.24}
            height={40}
            className="w-[20.24px] h-[32px]sm:w-[28.24px] sm:h-[40px]"
          />
          <h1 className="sm:text-[20px] xl:text-[30px] font-[500] sm:ml-4 m-2 text-[15px]">
            GatherGram
          </h1>
        </div>

        <div
          className={`hidden ${
            pathname === "/" ? "xl:flex" : "xl:hidden"
          } text-[16px] font-[400] w-[548px] justify-between`}
        >
          <button onClick={() => onClickMoveToSection("home")}>Home</button>
          <button onClick={() => onClickMoveToSection("features")}>
            Features
          </button>
          <button onClick={() => onClickMoveToSection("howItWorks")}>
            How it works
          </button>
          <button onClick={() => onClickMoveToSection("pricing")}>
            Pricing
          </button>
          <button onClick={() => onClickMoveToSection("about")}>About</button>
          <button onClick={() => onClickMoveToSection("contact")}>
            Contact
          </button>
        </div>

        <div className="flex xl:text-[16px] sm:text-[13px] text-[12px] items-center">
          <button
            className="font-[400] mr-3 sm:mr-4 xl:mr-10 hover:underline w-[82px] h-[30px] sm:w-auto sm:h-auto bg-[#d934a0] sm:bg-white rounded-full text-white sm:text-black"
            onClick={() => router.push("/login")}
          >
            Sign in
          </button>
          <button className="w-[82px] h-[30px] sm:w-[95px] sm:h-[40px] xl:w-[162px] xl:h-[60px] bg-black rounded-full hidden sm:flex justify-center items-center">
            <h3
              className="text-white font-[700] text-[12px] sm:text-[13px]"
              onClick={() => router.push("/signup")}
            >
              Get started
            </h3>
          </button>
          <button>
            <LuMenu
              className={`${
                pathname === "/" ? "blcok" : "hidden"
              } w-8 h-8 sm:w-12 sm:h-12 sm:ml-4 ml-3 xl:hidden`}
              onClick={() => setIsMenuOpen(!isMenuOepn)}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
