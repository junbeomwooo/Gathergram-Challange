"use client";

import { useState } from "react";
import Image from "next/image";

import Check from "@/../public/img/Check icon.png";

export default function FourthSection() {
  // state for buttons (montly || annual);
  const [isButtonOption, setIsButtonOption] = useState("monthly");

  return (
    <div className="w-full xl:h-[1082px] flex justify-center mt-32 bg-white">
      <div>
        {/* title */}
        <div className="text-center">
          <h4 className="text-[#7f56d9] text-[16px] font-[600] mb-6">
            Pricing
          </h4>
          <h1 className="text-[#101828] text-[48px] font-[600] mb-8">
            Plans that fit your scale
          </h1>
          <h3 className="text-[#475467] text-[20px] font-[400] px-10 leading-[36px]">
            Simple, transparent pricing that grows with you. Try any plan free
            for 30 days.
          </h3>
        </div>

        {/* buttons */}
        <div className="flex justify-center items-center mt-10">
          <div className="flex w-[389px] h-[56px] bg-[#F9FAFB] border border-solid border-[#f2f4f7] text-[16px] font-[600] items-center">
            {/* monthly */}
            <button
              className={` ${
                isButtonOption === "monthly"
                  ? "ml-2 h-[40px] px-[12px] bg-white rounded-md text-[#344054] shadow"
                  : "ml-5 text-[#667085]"
              } `}
              onClick={() => {
                setIsButtonOption("monthly");
              }}
            >
              Monthly billing
            </button>

            {/* annual */}
            <button
              className={`flex items-center  ${
                isButtonOption === "annual"
                  ? "h-[40px] px-[12px] bg-white rounded-md text-[#344054] shadow ml-8"
                  : "ml-8 text-[#667085]"
              }`}
              onClick={() => setIsButtonOption("annual")}
            >
              Annual billing
              <div className="bg-[#eceff3] rounded-3xl p-[6px] ml-2">
                <h2 className="font-[500] text-[14px] text-[#344054]">
                  Save 20%
                </h2>
              </div>
            </button>
          </div>
        </div>

        {/* plans */}
        <div className="xl:w-[1216px] xl:h-[572px]  mt-16 xl:flex justify-between">
          {/* free plan */}
          <div className="xl:w-[592px] h-full rounded-xl border border-solid border-[#eaecf0] shadow-md">
            {/* header */}
            <div className="mt-10 mx-10 flex justify-between">
              <div>
                <h1 className="text-[24px] font-[600] text-[#101828] mb-4">
                  Basic Plan
                </h1>
                <h3 className="text-[16px] font-[400] text-[#475467]">
                  Our most popular plan for small teams.
                </h3>
              </div>
              <div className="flex">
                <h2 className="font-[600] text-[36px]">$</h2>
                <h3 className="font-[600] text-[60px]">0</h3>
                <h4 className="font-[500] text-[16px] text-[#475467] mt-9 ml-2">
                  per month
                </h4>
              </div>
            </div>

            <hr className="mt-8 border-[1px]" />

            <div className="mx-10 mt-10">
              <h3 className="font-[600] text-[16px] text-[#101828]">
                FEATURES
              </h3>
              <h4 className="font-[400] text-[16px] text-[#475467] mt-3">
                Everything in our{" "}
                <strong className="font-[600]">free plan.</strong>
              </h4>
            </div>

            {/* features list */}
            <div className="mt-8 mx-10 flex justify-between">
              <div>
                <div className="flex items-center mb-5">
                  <Image src={Check} alt="check icon" width={24} height={24} />
                  <h2 className="ml-3 text-[16px] font-[400] text-[#475467]">
                    Access to basic features
                  </h2>
                </div>
                <div className="flex items-center mb-5">
                  <Image src={Check} alt="check icon" width={24} height={24} />
                  <h2 className="ml-3 text-[16px] font-[400] text-[#475467]">
                    Basic reporting + analytics
                  </h2>
                </div>
                <div className="flex items-center mb-5">
                  <Image src={Check} alt="check icon" width={24} height={24} />
                  <h2 className="ml-3 text-[16px] font-[400] text-[#475467]">
                    Up to 10 individual users
                  </h2>
                </div>
                <div className="flex items-center mb-5">
                  <Image src={Check} alt="check icon" width={24} height={24} />
                  <h2 className="ml-3 text-[16px] font-[400] text-[#475467]">
                    20GB individual data
                  </h2>
                </div>
                <div className="flex items-center">
                  <Image src={Check} alt="check icon" width={24} height={24} />
                  <h2 className="ml-3 text-[16px] font-[400] text-[#475467]">
                    Basic chat support
                  </h2>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-5">
                  <Image src={Check} alt="check icon" width={24} height={24} />
                  <h2 className="ml-3 text-[16px] font-[400] text-[#475467]">
                    Attend events
                  </h2>
                </div>
                <div className="flex items-center mb-5">
                  <Image src={Check} alt="check icon" width={24} height={24} />
                  <h2 className="ml-3 text-[16px] font-[400] text-[#475467]">
                    Automatic updates
                  </h2>
                </div>
                <div className="flex items-center mb-5">
                  <Image src={Check} alt="check icon" width={24} height={24} />
                  <h2 className="ml-3 text-[16px] font-[400] text-[#475467]">
                    Backup your account
                  </h2>
                </div>
                <div className="flex items-center mb-5">
                  <Image src={Check} alt="check icon" width={24} height={24} />
                  <h2 className="ml-3 text-[16px] font-[400] text-[#475467]">
                    Audit log and notes
                  </h2>
                </div>
                <div className="flex items-center">
                  <Image src={Check} alt="check icon" width={24} height={24} />
                  <h2 className="ml-3 text-[16px] font-[400] text-[#475467]">
                    Feature requests
                  </h2>
                </div>
              </div>
            </div>
            <hr className="mt-10 border-[1px]" />
            {/* button */}
            <div className="flex justify-center mt-4">
              <button className="xl:w-[528px] h-[48px] bg-[#d934a1] text-white rounded-xl w-full mx-4 mb-4">
                Get started
              </button>
            </div>
          </div>

          {/* monthly || annual plan */}

          {isButtonOption === "monthly" ? (
            // when user clicks montly billing
            <div className="xl:w-[592px] h-full rounded-xl border border-solid border-[#eaecf0] shadow-md mt-10 xl:mt-0">
              {/* header */}
              <div className="mt-10 mx-10 flex justify-between">
                <div>
                  <div className="flex">
                    <h1 className="text-[24px] font-[600] text-[#101828] mb-4">
                      Business Plan
                    </h1>
                    <div className="w-[72px] h-[24px] bg-[#faf5ff] rounded-2xl flex items-center justify-center ml-2">
                      <h4 className="text-[14px] font-[500] text-[#6941C6]">
                        Popular
                      </h4>
                    </div>
                  </div>
                  <h3 className="text-[16px] font-[400] text-[#475467]">
                    Advanced features and reporting.
                  </h3>
                </div>
                <div className="flex">
                  <h2 className="font-[600] text-[36px]">$</h2>
                  <h3 className="font-[600] text-[60px]">20</h3>
                  <h4 className="font-[500] text-[16px] text-[#475467] mt-9 ml-2">
                    per month
                  </h4>
                </div>
              </div>

              <hr className="mt-8 border-[1px]" />

              <div className="mx-10 mt-10">
                <h3 className="font-[600] text-[16px] text-[#101828]">
                  FEATURES
                </h3>
                <h4 className="font-[400] text-[16px] text-[#475467] mt-3">
                  Everything in our{" "}
                  <strong className="font-[600]">free plan</strong>
                  &nbsp;plus....
                </h4>
              </div>

              {/* features list */}
              <div className="mt-8 mx-10 flex justify-between">
                <div>
                  <div className="flex items-center mb-5">
                    <Image
                      src={Check}
                      alt="check icon"
                      width={24}
                      height={24}
                    />
                    <h2 className="ml-3 text-[16px] font-[400] text-[#475467]">
                      200+ integrations
                    </h2>
                  </div>
                  <div className="flex items-center mb-5">
                    <Image
                      src={Check}
                      alt="check icon"
                      width={24}
                      height={24}
                    />
                    <h2 className="ml-3 text-[16px] font-[400] text-[#475467]">
                      Advanced reporting
                    </h2>
                  </div>
                  <div className="flex items-center mb-5">
                    <Image
                      src={Check}
                      alt="check icon"
                      width={24}
                      height={24}
                    />
                    <h2 className="ml-3 text-[16px] font-[400] text-[#475467]">
                      Up to 20 individual users
                    </h2>
                  </div>
                  <div className="flex items-center mb-5">
                    <Image
                      src={Check}
                      alt="check icon"
                      width={24}
                      height={24}
                    />
                    <h2 className="ml-3 text-[16px] font-[400] text-[#475467]">
                      40GB individual data
                    </h2>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src={Check}
                      alt="check icon"
                      width={24}
                      height={24}
                    />
                    <h2 className="ml-3 text-[16px] font-[400] text-[#475467]">
                      Priority chat support
                    </h2>
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-5">
                    <Image
                      src={Check}
                      alt="check icon"
                      width={24}
                      height={24}
                    />
                    <h2 className="ml-3 text-[16px] font-[400] text-[#475467]">
                      Advanced custom fields
                    </h2>
                  </div>
                  <div className="flex items-center mb-5">
                    <Image
                      src={Check}
                      alt="check icon"
                      width={24}
                      height={24}
                    />
                    <h2 className="ml-3 text-[16px] font-[400] text-[#475467]">
                      Audit log and data history
                    </h2>
                  </div>
                  <div className="flex items-center mb-5">
                    <Image
                      src={Check}
                      alt="check icon"
                      width={24}
                      height={24}
                    />
                    <h2 className="ml-3 text-[16px] font-[400] text-[#475467]">
                      Backup your account
                    </h2>
                  </div>
                  <div className="flex items-center mb-5">
                    <Image
                      src={Check}
                      alt="check icon"
                      width={24}
                      height={24}
                    />
                    <h2 className="ml-3 text-[16px] font-[400] text-[#475467]">
                      Personalised service
                    </h2>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src={Check}
                      alt="check icon"
                      width={24}
                      height={24}
                    />
                    <h2 className="ml-3 text-[16px] font-[400] text-[#475467]">
                      + many more...
                    </h2>
                  </div>
                </div>
              </div>
              <hr className="mt-10 border-[1px]" />
              {/* button */}
              <div className="flex justify-center mt-4">
                <button className="w-[528px] h-[48px] bg-[#d934a1] text-white rounded-xl mb-4">
                  Get started
                </button>
              </div>
            </div>
          ) : (
            // when user clicks annual billing
            <div className="xl:w-[592px] h-full rounded-xl border border-solid border-[#eaecf0] shadow-md mt-10 xl:mt-0">
              {/* header */}
              <div className="mt-10 mx-10 flex justify-between">
                <div>
                  <div className="flex">
                    <h1 className="text-[24px] font-[600] text-[#101828] mb-4">
                      Business Plan
                    </h1>
                    <div className="w-[72px] h-[24px] bg-[#faf5ff] rounded-2xl flex items-center justify-center ml-2">
                      <h4 className="text-[14px] font-[500] text-[#6941C6]">
                        Popular
                      </h4>
                    </div>
                  </div>
                  <h3 className="text-[16px] font-[400] text-[#475467]">
                    Advanced features and reporting.
                  </h3>
                </div>
                <div className="flex">
                  <h2 className="font-[600] text-[36px]">$</h2>
                  <h3 className="font-[600] text-[60px]">180</h3>
                  <h4 className="font-[500] text-[16px] text-[#475467] mt-9 ml-2">
                    per year
                  </h4>
                </div>
              </div>

              <hr className="mt-8 border-[1px]" />

              <div className="mx-10 mt-10">
                <h3 className="font-[600] text-[16px] text-[#101828]">
                  FEATURES
                </h3>
                <h4 className="font-[400] text-[16px] text-[#475467] mt-3">
                  Everything in our{" "}
                  <strong className="font-[600]">free plan</strong>
                  &nbsp;plus....
                </h4>
              </div>

              {/* features list */}
              <div className="mt-8 mx-10 flex justify-between">
                <div>
                  <div className="flex items-center mb-5">
                    <Image
                      src={Check}
                      alt="check icon"
                      width={24}
                      height={24}
                    />
                    <h2 className="ml-3 text-[16px] font-[400] text-[#475467]">
                      200+ integrations
                    </h2>
                  </div>
                  <div className="flex items-center mb-5">
                    <Image
                      src={Check}
                      alt="check icon"
                      width={24}
                      height={24}
                    />
                    <h2 className="ml-3 text-[16px] font-[400] text-[#475467]">
                      Advanced reporting
                    </h2>
                  </div>
                  <div className="flex items-center mb-5">
                    <Image
                      src={Check}
                      alt="check icon"
                      width={24}
                      height={24}
                    />
                    <h2 className="ml-3 text-[16px] font-[400] text-[#475467]">
                      Up to 20 individual users
                    </h2>
                  </div>
                  <div className="flex items-center mb-5">
                    <Image
                      src={Check}
                      alt="check icon"
                      width={24}
                      height={24}
                    />
                    <h2 className="ml-3 text-[16px] font-[400] text-[#475467]">
                      40GB individual data
                    </h2>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src={Check}
                      alt="check icon"
                      width={24}
                      height={24}
                    />
                    <h2 className="ml-3 text-[16px] font-[400] text-[#475467]">
                      Priority chat support
                    </h2>
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-5">
                    <Image
                      src={Check}
                      alt="check icon"
                      width={24}
                      height={24}
                    />
                    <h2 className="ml-3 text-[16px] font-[400] text-[#475467]">
                      Advanced custom fields
                    </h2>
                  </div>
                  <div className="flex items-center mb-5">
                    <Image
                      src={Check}
                      alt="check icon"
                      width={24}
                      height={24}
                    />
                    <h2 className="ml-3 text-[16px] font-[400] text-[#475467]">
                      Audit log and data history
                    </h2>
                  </div>
                  <div className="flex items-center mb-5">
                    <Image
                      src={Check}
                      alt="check icon"
                      width={24}
                      height={24}
                    />
                    <h2 className="ml-3 text-[16px] font-[400] text-[#475467]">
                      Backup your account
                    </h2>
                  </div>
                  <div className="flex items-center mb-5">
                    <Image
                      src={Check}
                      alt="check icon"
                      width={24}
                      height={24}
                    />
                    <h2 className="ml-3 text-[16px] font-[400] text-[#475467]">
                      Personalised service
                    </h2>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src={Check}
                      alt="check icon"
                      width={24}
                      height={24}
                    />
                    <h2 className="ml-3 text-[16px] font-[400] text-[#475467]">
                      + many more...
                    </h2>
                  </div>
                </div>
              </div>
              <hr className="mt-10 border-[1px]" />
              {/* button */}
              <div className="flex justify-center mt-4">
                <button className="w-[528px] h-[48px] bg-[#d934a1] text-white rounded-xl mb-4">
                  Get started
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
