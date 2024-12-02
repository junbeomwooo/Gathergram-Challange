import Image from "next/image";

import EventManagement from "@/../public/img/EventManagement.png";
import GuestInteraction from "@/../public/img/GuestInteraction.png";
import DonateContribute from "@/../public/img/DonateContribute.png";
import CustomLoveStoryPage from "@/../public/img/CustomLoveStoryPage.png";

export default function SecondSection() {
  return (
    <div id="features">
      <div className="w-full 2xl:h-[711px] mt-32">
        {/*title */}
        <div className="2xl:w-[821px] m-auto">
          <h1 className="font-[600] text-[48px] text-center">Our Features</h1>
          <h3 className="text-[18px] sm:text-[22px] font-[400] mt-10 text-center leading-[36px] px-8 lg:px-0">
            &quot;Easily create and manage your wedding events, from the
            ceremony to the reception.&quot;
          </h3>
        </div>

        {/* features key */}
        <div className="flex justify-center">
          <div className="2xl:w-[1640px] xl:h-[480px] h-full bg-[#212121] mt-24 xl:flex w-full">
            <div className="2xl:w-1/4 h-full px-10 pb-20 pt-48">
              <Image
                src={EventManagement}
                width={54.5}
                height={54.5}
                alt={"Event Management"}
                className="mb-10"
              />
              <h1 className="text-[30px] font-[600] text-white mb-8">
                Event Management
              </h1>
              <h3 className="text-[18px] font-[300] text-white">
                Increased conversion and expension on new markets Dynamic
                business devolopment.
              </h3>
            </div>
            <div className="2xl:w-1/4 2xl:h-[460px] px-10 pb-20 pt-[172px] bg-[#ffdef4] 2xl:mt-[20px] h-full">
              <Image
                src={GuestInteraction}
                width={56.56}
                height={60}
                alt={"Guest Intreratcion"}
                className="mb-10"
              />
              <h1 className="text-[30px] font-[600] text-black mb-8">
                Guest Interaction
              </h1>
              <h3 className="text-[18px] font-[300] text-black">
                Excute pay outs & refunds straight to your customer`s bank
                account via Finpay. Increase satisfaction and retention.
              </h3>
            </div>
            <div className="2xl:w-1/4 h-full px-10 pb-20 pt-48 bg-[#212121] ">
              <Image
                src={DonateContribute}
                width={78.34}
                height={52}
                alt={"Donate Contribute"}
                className="mb-10"
              />
              <h1 className="text-[30px] font-[600] text-white mb-8">
                Donate & Contribute
              </h1>
              <h3 className="text-[18px] font-[300] text-white">
                No cards or payment details insertation, no additional
                registration or app download by your customer`s.
              </h3>
            </div>
            <div className="2xl:w-1/4 h-full px-10 pb-20 pt-48 2xl:bg-[#212121] bg-[#ffdef4]  ">
              <Image
                src={CustomLoveStoryPage}
                width={63.4}
                height={54}
                alt={"Custom LoveS tory Page"}
                className="mb-10 invert 2xl:invert-0"
              />
              <h1 className="text-[27px] font-[600] 2xl:text-white mb-8 text-black">
                Custom Love Story Page
              </h1>
              <h3 className="text-[18px] font-[300] 2xl:text-white text-black">
                Personal informations is encrypted and protected by industry
                standard banking security.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
