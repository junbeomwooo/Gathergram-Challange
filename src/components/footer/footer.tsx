"use client";

import Image from "next/image";
import { useState } from "react";

// images
import Logo from "@/../public/img/logo.png";
import Youtube from "@/../public/img/Icon awesome-youtube.png";
import Linkedin from "@/../public/img/Icon awesome-linkedin.png";
import Facebook from "@/../public/img/Icon awesome-facebook.png";
import Twitter from "@/../public/img/Icon awesome-twitter.png";
import { TiArrowSortedDown } from "react-icons/ti";
import { usePathname } from "next/navigation";

export default function Footer() {
  // states for dropdown
  const [isNavigateOpen, setIsNavigateOpen] = useState(false);
  const [isSupportUsOpen, setIsSupportUsOpen] = useState(false);
  const [isPartnerOpen, setIsPartnerOpen] = useState(false);
  const [isContactUsOpen, setIsContactUsOpen] = useState(false);

  const pathname = usePathname();

  // scroll to section (only when pathname is "/")
  const onClickMoveToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full lg:h-[655px] h-full bg-[#212121] text-white relative">
      {/* footer  */}
      <div className=" 2xl:px-28 py-20 px-8">
        {/* Title and Subscribe */}
        <div className="lg:flex justify-between">
          {/* title */}
          <div>
            <h1 className="text-[24px] font-[600] text-center lg:text-left">
              Join our newsletter
            </h1>
            <h2 className="text-[20px] font-[300] mt-4 text-center lg:text-left">
              We’ll send you a nice letter once per week. No spam.
            </h2>
          </div>

          {/* subscribe */}
          <div className="flex justify-center lg:justify-start mt-12 lg:mt-0">
            <input
              className="w-[269px] h-[44px] rounded-xl text-[16px] font-[400] p-3 text-black mr-4 border border-solid border-[#d0d5dd]"
              placeholder="Enter your email"
            />
            <button className=" w-[115px] h-[44px] bg-[#f5169c] text-white text-[16px] font-[600] rounded-xl">
              Subscribe
            </button>
          </div>
        </div>

        <hr className="w-full border border-solid border-[#475467] my-16" />

        {/* Company Info and Menu */}
        <div className="lg:flex justify-between h-full">
          {/* comanyInfo */}
          <div className="lg:w-5/12 w-full">
            {/* logo */}
            <div className="flex items-center justify-center lg:justify-start">
              <Image src={Logo} alt="logo" width={28.24} height={40} />
              <h1 className="text-[30px] font-[500] ml-4">GatherGram</h1>
            </div>

            {/* info */}
            <h4 className="lg:w-[289px] lg:h-[84px] font-[300] text-[16px] text-[#8a8a8a] leading-[28px] mt-6 text-center m-auto lg:text-start lg:m-0 lg:mt-6">
              Medfysio provides clear and easy-to- understand health-related
              information resource or services.
            </h4>

            {/* social media */}
            <div className="flex w-[215.22px] justify-between items-center mt-8 m-auto">
              <Image
                src={Twitter}
                alt="Twitter"
                width={30.29}
                height={24.6}
                className="w-[30.29px] h-[24.6px]"
              />
              <Image
                src={Facebook}
                alt="Facebook"
                width={29.34}
                height={29.16}
                className="w-[29.34px] h-[29.16px]"
              />
              <Image
                src={Linkedin}
                alt="Linkedin"
                width={26.5}
                height={26.5}
                className="w-[26.5px] h-[26.5px]"
              />
              <Image
                src={Youtube}
                alt="Youtube"
                width={32.31}
                height={22.72}
                className="w-[32.31px] h-[22.72px]"
              />
            </div>
          </div>
          {/* Menu */}
          <div className="lg:flex w-7/12 justify-between hidden">
            {/* Navigate */}
            <div
              className={`text-[16px] font-[300] ${
                pathname === "/" ? "flex-col" : "hidden"
              }`}
            >
              <h1 className="text-[16px] font-[600] mb-6">Navigate</h1>
              <h3
                className="mb-6 hover:cursor-pointer"
                onClick={() => onClickMoveToSection("home")}
              >
                Home
              </h3>
              <h3
                className="mb-6 hover:cursor-pointer"
                onClick={() => onClickMoveToSection("features")}
              >
                Features
              </h3>
              <h3
                className="mb-6 hover:cursor-pointer"
                onClick={() => onClickMoveToSection("howItWorks")}
              >
                How It Works
              </h3>
              <h3
                className="mb-6 hover:cursor-pointer"
                onClick={() => onClickMoveToSection("pricing")}
              >
                Pricing
              </h3>
              <h3
                className="mb-6 hover:cursor-pointer"
                onClick={() => onClickMoveToSection("about")}
              >
                About
              </h3>
              <h3 className="hover:cursor-pointer" onClick={() => onClickMoveToSection("contact")}>Contact</h3>
            </div>

            {/* Support Us */}
            <div className="flex-col text-[16px] font-[300]">
              <h1 className="text-[16px] font-[600] mb-6">Support Us</h1>
              <h3 className="mb-6 hover:cursor-pointer">FAQ&apos;s</h3>
              <h3 className="mb-6 hover:cursor-pointer">Contact Us</h3>
              <h3 className="mb-6 hover:cursor-pointer">Support Center</h3>
              <h3 className="hover:cursor-pointer">Security</h3>
            </div>

            {/* Partner */}
            <div className="flex-col text-[16px] font-[300]">
              <h1 className="text-[16px] font-[600] mb-6">Partner</h1>
              <h3 className="mb-6 hover:cursor-pointer">Our</h3>
              <h3 className="mb-6 hover:cursor-pointer">Partners</h3>
              <h3 className="mb-6 hover:cursor-pointer">Subscriber</h3>
            </div>

            {/* Contact US */}
            <div className="flex-col text-[16px] font-[300]">
              <h1 className="text-[16px] font-[600] mb-6">Contact US</h1>
              <h3 className="mb-6">GatherGram@business.com</h3>
              <h3 className="mb-6">+61 7 7010 6803</h3>
              <button className="w-[149px] h-[44px] bg-[#F5169C] rounded-full">
                Help Center
              </button>
            </div>
          </div>

          {/* Menu for Mobile */}
          <div className="lg:hidden w-full mt-20 pb-10">
            {/* Navigate */}
            <div
              className={`w-full hover:cursor-pointer ${
                pathname === "/" ? "flex" : "hidden"
              }`}
              onClick={() => setIsNavigateOpen(!isNavigateOpen)}
            >
              <h1>Navigate</h1>
              <TiArrowSortedDown className="w-[20px] h-[20px] ml-3" />
            </div>
            {isNavigateOpen && (
              <div>
                <div
                  className={`text-[16px] font-[300] mt-6 ${
                    pathname === "/" ? "flex-col" : "hidden"
                  }`}
                >
                  <h3
                    className="mb-6 hover:cursor-pointer"
                    onClick={() => onClickMoveToSection("home")}
                  >
                    Home
                  </h3>
                  <h3
                    className="mb-6  hover:cursor-pointer"
                    onClick={() => onClickMoveToSection("features")}
                  >
                    Features
                  </h3>
                  <h3
                    className="mb-6  hover:cursor-pointer"
                    onClick={() => onClickMoveToSection("howItWorks")}
                  >
                    How It Works
                  </h3>
                  <h3
                    className="mb-6  hover:cursor-pointer"
                    onClick={() => onClickMoveToSection("pricing")}
                  >
                    Pricing
                  </h3>
                  <h3
                    className="mb-6  hover:cursor-pointer"
                    onClick={() => onClickMoveToSection("about")}
                  >
                    About
                  </h3>
                  <h3
                    className="hover:cursor-pointer"
                    onClick={() => onClickMoveToSection("contact")}
                  >
                    Contact
                  </h3>
                </div>
              </div>
            )}

            {/* Support Us */}
            <div
              className="flex w-full hover:cursor-pointer mt-10"
              onClick={() => setIsSupportUsOpen(!isSupportUsOpen)}
            >
              <h1>Support Us</h1>
              <TiArrowSortedDown className="w-[20px] h-[20px] ml-3" />
            </div>
            {isSupportUsOpen && (
              <div>
                <div className="flex-col text-[16px] font-[300] mt-6">
                  <h3 className="mb-6 hover:cursor-pointer">FAQ`s</h3>
                  <h3 className="mb-6 hover:cursor-pointer">Contact Us</h3>
                  <h3 className="mb-6 hover:cursor-pointer">Support Center</h3>
                  <h3 className="hover:cursor-pointer">Security</h3>
                </div>
              </div>
            )}

            {/* Partner */}
            <div
              className="flex w-full hover:cursor-pointer mt-10"
              onClick={() => setIsPartnerOpen(!isPartnerOpen)}
            >
              <h1>Partner</h1>
              <TiArrowSortedDown className="w-[20px] h-[20px] ml-3" />
            </div>
            {isPartnerOpen && (
              <div>
                <div className="flex-col text-[16px] font-[300] mt-6">
                  <h3 className="mb-6 hover:cursor-pointer">Our</h3>
                  <h3 className="mb-6 hover:cursor-pointer">Partners</h3>
                  <h3 className="hover:cursor-pointer">Subscriber</h3>
                </div>
              </div>
            )}

            {/* Contact Us */}
            <div
              className="flex w-full hover:cursor-pointer mt-10"
              onClick={() => setIsContactUsOpen(!isContactUsOpen)}
            >
              <h1>Contact Us</h1>
              <TiArrowSortedDown className="w-[20px] h-[20px] ml-3" />
            </div>
            {isContactUsOpen && (
              <div>
                <div className="flex-col text-[16px] font-[300] mt-6">
                  <h3 className="mb-6">GatherGram@business.com</h3>
                  <h3 className="mb-6">+61 7 7010 6803</h3>
                  <button className="w-[149px] h-[44px] bg-[#F5169C] rounded-full">
                    Help Center
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* copyright */}
      <div className="bg-white w-full h-[60px] absolute bottom-0 flex justify-around text-black items-center text-[14px] font-[400]">
        <h3 className="max-md:hidden">© 2024 GatherGram, We love our users!</h3>
        <h3>Copyright © 2024 all rights reserved</h3>
        <h3 className="max-md:hidden">
          Terms & Conditions , Privacy Policy , Sitemap{" "}
        </h3>
      </div>
    </div>
  );
}
