"use client";

import Image from "next/image";
import { useState } from "react";
import  { useRouter } from "next/navigation";

export default function FifthSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const router = useRouter();

  //    button for next page
  const nextButton = () => {
    if (currentSlide < 4) {
      setCurrentSlide(currentSlide + 1);
    } else {
      // if user slides last image, it will move back to first image
      setCurrentSlide(0);
    }
  };

  const previousButton = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      // if user slides first page, it will move back to last image
      setCurrentSlide(4);
    }}

    return (
      <div className="w-full lg:h-[986px] bg-[#fff6fc] 2xl:px-40 px-8 pt-40 overflow-hidden pb-10 lg:pb-0" id="about">
        {/* Text and  Buttons*/}
        <div className="lg:flex justify-between">
          {/* Text */}
          <div>
            <h1 className="text-[36px] font-[600] text-[#101828]">
              Don&apos;t just take our word for it
            </h1>
            <h4 className="text-[20px] font-[400] text-[#475467] mt-6">
              Hear from sone of our amazing customers who are building faster.
            </h4>
          </div>
          {/* Buttons */}
          <div className="flex mt-14 lg:mt-0">
            <button className="w-[155px] h-[48px] bg-[#ffffff] border-[1.5px] border-solid border-[#d0d5dd] rounded-lg text-[16px] font-[600] text-[#344054] mr-6">
              Our customers
            </button>
            <button className="w-[155px] h-[48px] bg-[#f5169c] rounded-lg text-[#ffffff] text-[16px] font-[600]" onClick={()=>{ router.push("/signup")}}>
              Create account
            </button>
          </div>
        </div>

        {/* Image Slide */}
        <div className="flex mt-16 w-fit">
          {/* Box with the total width for sliding features */}
          <div
            className="relative flex w-[1800px] transition-all duration-500"
            style={{ transform: `translateX(-${currentSlide * 360}px)` }}
          >
            {/* Image1 */}
            <div className="relative w-[360px] h-[480px] flex justify-center mr-8">
              <Image
                src="/img/customerImage1.png"
                alt={"Customer Image1"}
                width={360}
                height={480}
                className="w-[360px] h-[480px] object-cover"
              />
              {/* contents in image */}
              <div className="w-[312px] h-[194px] bottom-6 absolute border-[1px] border-solid border-[#ffffff] backdrop-blur-lg px-6 py-5">
                {/* stars */}
                <div className="flex mb-5">
                  <Image
                    src="/img/Star.png"
                    width={20}
                    height={20}
                    alt="star"
                    className="mr-1"
                  />
                  <Image
                    src="/img/Star.png"
                    width={20}
                    height={20}
                    alt="star"
                    className="mr-1"
                  />
                  <Image
                    src="/img/Star.png"
                    width={20}
                    height={20}
                    alt="star"
                    className="mr-1"
                  />
                  <Image
                    src="/img/Star.png"
                    width={20}
                    height={20}
                    alt="star"
                    className="mr-1"
                  />{" "}
                  <Image src="/img/Star.png" width={20} height={20} alt="star" />
                </div>
                <div className="text-white">
                  <h1 className="text-[30px] font-[600] mb-5">Alisa Hester</h1>
                  <h2 className="text-[18px] font-[600] mb-4">PM, Hourglass</h2>
                  <h3 className="text-[16px] font-[400]">Web Design Agency</h3>
                </div>
              </div>
            </div>

            {/* Image2 */}
            <div className="relative w-[360px] h-[480px] flex justify-center mr-8">
              <Image
                src="/img/customerImage2.png"
                alt={"Customer Image2"}
                width={360}
                height={480}
                className="w-[360px] h-[480px] object-cover"
              />
              {/* contents in image */}
              <div className="w-[312px] h-[278px] bottom-6 absolute border-[1px] border-solid border-[#ffffff] backdrop-blur-lg px-6 py-5">
                <div className="h-[84px] text-[18px] font-[600] text-[white] leading-[30px]">
                  <h1>“We’ve really sped up our workflow using GatherGram.”</h1>
                </div>
                {/* stars */}
                <div className="flex mb-5">
                  <Image
                    src="/img/Star.png"
                    width={20}
                    height={20}
                    alt="star"
                    className="mr-1"
                  />
                  <Image
                    src="/img/Star.png"
                    width={20}
                    height={20}
                    alt="star"
                    className="mr-1"
                  />
                  <Image
                    src="/img/Star.png"
                    width={20}
                    height={20}
                    alt="star"
                    className="mr-1"
                  />
                  <Image
                    src="/img/Star.png"
                    width={20}
                    height={20}
                    alt="star"
                    className="mr-1"
                  />{" "}
                  <Image src="/img/Star.png" width={20} height={20} alt="star" />
                </div>
                <div className="text-white">
                  <h1 className="text-[30px] font-[600] mb-5">Rich Wilson</h1>
                  <h2 className="text-[18px] font-[600] mb-4">
                    COO, Command+R
                  </h2>
                  <h3 className="text-[16px] font-[400]">
                    Web Development Agency
                  </h3>
                </div>
              </div>
            </div>

            {/* Image3 */}
            <div className="relative w-[360px] h-[480px] flex justify-center mr-8">
              <Image
                src="/img/customerImage3.png"
                alt={"Customer Image3"}
                width={360}
                height={480}
                className="w-[360px] h-[480px] object-cover"
              />
              {/* contents in image */}
              <div className="w-[312px] h-[194px] bottom-6 absolute border-[1px] border-solid border-[#ffffff] backdrop-blur-lg px-6 py-5">
                {/* stars */}
                <div className="flex mb-5">
                  <Image
                    src="/img/Star.png"
                    width={20}
                    height={20}
                    alt="star"
                    className="mr-1"
                  />
                  <Image
                    src="/img/Star.png"
                    width={20}
                    height={20}
                    alt="star"
                    className="mr-1"
                  />
                  <Image
                    src="/img/Star.png"
                    width={20}
                    height={20}
                    alt="star"
                    className="mr-1"
                  />
                  <Image
                    src="/img/Star.png"
                    width={20}
                    height={20}
                    alt="star"
                    className="mr-1"
                  />{" "}
                  <Image src="/img/Star.png" width={20} height={20} alt="star" />
                </div>
                <div className="text-white">
                  <h1 className="text-[30px] font-[600] mb-5">Annie Stanley</h1>
                  <h2 className="text-[18px] font-[600] mb-4">
                    Designer, Catalog
                  </h2>
                  <h3 className="text-[16px] font-[400]">UX Agency</h3>
                </div>
              </div>
            </div>

            {/* Image4 */}
            <div className="relative w-[360px] h-[480px] flex justify-center mr-8">
              <Image
                src="/img/customerImage4.png"
                alt={"Customer Image4"}
                width={360}
                height={480}
                className="w-[360px] h-[480px] object-cover"
              />
              {/* contents in image */}
              <div className="w-[312px] h-[194px] bottom-6 absolute border-[1px] border-solid border-[#ffffff] backdrop-blur-lg px-6 py-5">
                {/* stars */}
                <div className="flex mb-5">
                  <Image
                    src="/img/Star.png"
                    width={20}
                    height={20}
                    alt="star"
                    className="mr-1"
                  />
                  <Image
                    src="/img/Star.png"
                    width={20}
                    height={20}
                    alt="star"
                    className="mr-1"
                  />
                  <Image
                    src="/img/Star.png"
                    width={20}
                    height={20}
                    alt="star"
                    className="mr-1"
                  />
                  <Image
                    src="/img/Star.png"
                    width={20}
                    height={20}
                    alt="star"
                    className="mr-1"
                  />{" "}
                  <Image src="/img/Star.png" width={20} height={20} alt="star" />
                </div>
                <div className="text-white">
                  <h1 className="text-[30px] font-[600] mb-5">Johnny Bell</h1>
                  <h2 className="text-[18px] font-[600] mb-4">PM, Sisyphus</h2>
                  <h3 className="text-[16px] font-[400]">Machine Learning</h3>
                </div>
              </div>
            </div>

            {/* Image5 */}
            <div className="relative w-[360px] h-[480px] flex justify-center">
              <Image
                src="/img/customerImage5.png"
                alt={"Customer Image5"}
                width={360}
                height={480}
                className="w-[360px] h-[480px] object-cover"
              />
              {/* contents in image */}
              <div className="w-[312px] h-[194px] bottom-6 absolute border-[1px] border-solid border-[#ffffff] backdrop-blur-lg px-6 py-5">
                {/* stars */}
                <div className="flex mb-5">
                  <Image
                    src="/img/Star.png"
                    width={20}
                    height={20}
                    alt="star"
                    className="mr-1"
                  />
                  <Image
                    src="/img/Star.png"
                    width={20}
                    height={20}
                    alt="star"
                    className="mr-1"
                  />
                  <Image
                    src="/img/Star.png"
                    width={20}
                    height={20}
                    alt="star"
                    className="mr-1"
                  />
                  <Image
                    src="/img/Star.png"
                    width={20}
                    height={20}
                    alt="star"
                    className="mr-1"
                  />{" "}
                  <Image src="/img/Star.png" width={20} height={20} alt="star" />
                </div>
                <div className="text-white">
                  <h1 className="text-[30px] font-[600] mb-5">Mia Ward</h1>
                  <h2 className="text-[18px] font-[600] mb-4">
                    Fullstack Dev, Quo
                  </h2>
                  <h3 className="text-[16px] font-[400]">
                    Performance Marketer
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* buttons for slides */}
        <div className="flex mt-8">
          <button className="w-[56px] h-[56px] rounded-full border border-solid border-[#eaecf0] bg-white flex justify-center items-center mr-6" onClick={previousButton}>
            <Image
              src="/img/left.png"
              alt="left buttons for slides"
              width={14}
              height={14}
            />
          </button>

          <button className="w-[56px] h-[56px] rounded-full border border-solid border-[#eaecf0] bg-white flex justify-center items-center" onClick={nextButton}>
            <Image
              src="/img/right.png"
              alt="right buttons for slides"
              width={14}
              height={14}
            />
          </button>
        </div>
      </div>
    );
  };
