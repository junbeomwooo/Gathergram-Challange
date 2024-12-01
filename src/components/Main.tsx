import FirstSection from "./mainComponents/firstSection";
import SecondSection from "./mainComponents/secondSection";
import ThirdSection from "./mainComponents/thirdSection";
import FourthSection from "./mainComponents/fourthSection";
import FifthSection from "./mainComponents/fifthSection";
import SixthSection from "./mainComponents/sixthSection";
import SeventhSection from "./mainComponents/seventhSection";
import EighthSection from "./mainComponents/eighthSection";

export default function Main() {
  return (
    <div className="max-w-[1921px] m-auto mt-[80px]">
      {/* "Plan, Share, and Celebrate Your Big Day in One Place" */}
      <FirstSection />

      {/*  Our Features */}
      <SecondSection />

      {/* How It works */}
      <ThirdSection />

      {/* Plans that fit your scale */}
      <FourthSection />

      {/* Don't just take our word for it */}
      <FifthSection />

      {/* Frequently asked questions */}
      <SixthSection />

      {/* Ready to Plan Your Wedding? */}
      <SeventhSection />

      {/* Contact Us */}
      <EighthSection />
    </div>
  );
}
