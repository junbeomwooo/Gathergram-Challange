"use client";

import Image from "next/image";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

import CustomWarningAlert from "../CustomWarningAlert";

export default function FirstSection() {
  /** Error Custom */
  // State for Custom warning alert
  const [isWarningAlertOpen, setIsWarningAlertOpen] = useState(false);
  // Error which shows to user
  const [wanringAlertMessage, setWanringAlertMessage] = useState("");

  const emailRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const onClickMoveToSignUpwithEmail = () => {
    const email = emailRef.current?.value || "";
    // Remove whitespace
    const processedEmail = email?.replace(/\s+/g, "");

    // validation for email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (processedEmail) {
      if (!emailRegex.test(processedEmail)) {
        setWanringAlertMessage("Invalid email format.");
        setIsWarningAlertOpen(true);
      } else {
        router.push(`/signup?email=${encodeURIComponent(processedEmail)}`);
      }
    } else {
      router.push("/signup");
    }
  };
  return (
    <>
      <div id="home">
        {/* Main: "Plan, Share, and Celebrate Your Big Day in One Place" */}
        <div>
          <div className="xl:flex 2xl:px-40 2xl:justify-between m-auto pt-30  px-8 ">
            <div>
              <div className="w-full xl:h-[820px] mt-40">
                {/* Major headings */}
                <div className="2xl:w-[758px] 2xl:h-[300px]">
                  <h1 className="font-[700] 2xl:text-[82px] text-[45px] sm:text-[66px] md:text-[80px] leading-[80px] sm:leading-[100px]">
                    &quot;Plan, Share, and Celebrate Your Big Day in One
                    Place&quot;
                  </h1>
                </div>

                {/* Minor headings */}
                <div className="2xl:w-[758px] h-[72px]">
                  <h4 className="font-[400] text-[17px] sm:text-[22px] leading-[36px] mt-4">
                    &quot;Create unforgettable memories with a personalized
                    wedding platform for you and your guests.&quot;
                  </h4>
                </div>

                {/* Enter your email adress */}
                <div className="flex 2xl:w-[640px] h-[72]px 2xl:justify-between mt-14">
                  <input
                    className="w-full sm:w-[330px] 2xl:w-[452px] h-[72]px bg-[#f5f5f5] rounded-full
          px-10 font-[400] text-[12px] sm:text-[18px]"
                    placeholder="Enter your email adress"
                    ref={emailRef}
                  />

                  <button
                    className="w-[140px] 2xl:w-[176px] h-[72px] rounded-full flex items-center justify-center bg-[#d934a1] ml-4"
                    onClick={onClickMoveToSignUpwithEmail}
                  >
                    <h3 className="text-[15px] sm:text-[18px] font-[700] text-white">
                      Get started
                    </h3>
                  </button>
                </div>

                {/* +2K people Joined */}
                <div className="sm:w-[344px] h-[60px] flex relative items-center mt-10">
                  {/* Image */}
                  <div className="h-full">
                    <Image
                      src="/img/Rectangle 67.png"
                      alt="people joined1"
                      width={60}
                      height={60}
                      className="absolute"
                    />
                    <Image
                      src="/img/Rectangle 68.png"
                      alt="people joined2"
                      width={60}
                      height={60}
                      className="absolute left-8"
                    />
                    <Image
                      src="/img/Rectangle 70.png"
                      alt="people joined3"
                      width={60}
                      height={60}
                      className="absolute left-16"
                    />
                    <Image
                      src="/img/Rectangle 71.png"
                      alt="people joined4"
                      width={60}
                      height={60}
                      className="absolute left-24"
                    />
                    <div className="w-[60px] h-[60px] absolute left-32 bg-[#7bdff2] rounded-full border-[3px] border-solid border-white flex justify-center items-center">
                      <h3 className="font-[400] text-[18px">+2k</h3>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="absolute right-0">
                    <h3 className="font-[400] text-[12px] sm:text-[14px]">
                      +2K people Joined!
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <Image
              src="/img/Rectangle.png"
              alt="rectangle"
              width={552}
              height={557}
              className="xl:w-[552px] xl:h-[557px] xl:mt-40 xl:mb-0 mb-20 m-auto mt-20"
            />
          </div>

          {/* section */}
          <div className="w-full 2xl:h-[225px] bg-[#212121] 2xl:flex items-center justify-around px-8 sm:px-20 py-20 2xl:py-0">
            <div className="2xl:w-[860px] 2xl:h-[100px] text-white text-[24px] sm:text-[36px] font-[400] leading-[50px]">
              <h2>
                &quot;Powerful tool to manage your wedding, engage guests, and
                celebrate together effortlessly.&quot;
              </h2>
            </div>
            {/* Icons */}
            <div className="md:flex mt-16 2xl:mt-0">
              {/* Connect with your guests */}
              <div className="w-[308px] h-[112px] flex items-center justify-between mb-10 lg:mb-0">
                {/* Image */}
                <div className="bg-[#eb44b2] w-[111px] h-[112px] rounded-full flex justify-center items-center">
                  <Image
                    src="/img/Component 114.png"
                    alt="Connet with your guests"
                    width={50}
                    height={50}
                    className="w-[50px] h-[50px]"
                  />
                </div>
                {/* Text */}
                <div className="w-[171px] h-[60px] text-[22px] font-[400] leading-[30px] text-white">
                  <h4>Connect with your guests</h4>
                </div>
              </div>

              {/* Easy event management */}
              <div className="w-[308px] h-[112px] flex items-center justify-between">
                {/* Image */}
                <div className="bg-[#eb44b2] w-[111px] h-[112px] rounded-full flex justify-center items-center">
                  <Image
                    src="/img/Component 115.png"
                    alt="Easy event management"
                    width={50}
                    height={50}
                    className="w-[50px] h-[50px]"
                  />
                </div>
                {/* Text */}
                <div className="w-[171px] h-[60px] text-[22px] font-[400] leading-[30px] text-white">
                  <h4>Easy event management</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isWarningAlertOpen && (
        <CustomWarningAlert
          message={wanringAlertMessage}
          setIsWarningAlertOpen={setIsWarningAlertOpen}
        />
      )}
    </>
  );
}
