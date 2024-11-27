

import FirstSection from "./mainComponents/firstsection";
import SecondSection from "./mainComponents/secondsection";
import ThirdSection from "./mainComponents/thirdSection";
import FourthSection from "./mainComponents/fourthSection";


export default function Main() {
  return (
    <>
      {/* "Plan, Share, and Celebrate Your Big Day in One Place" */}
      <FirstSection />

      {/*  Our Features */}
      <SecondSection />

      {/* How It works */}
      <ThirdSection />

      {/* Plans that fit your scale */}
      <FourthSection />
    </>
  );
}
