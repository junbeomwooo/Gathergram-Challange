"use client";

import { useRouter } from "next/navigation";
import { useEffect,useState } from "react";
import CustomWarningAlert from "./CustomWarningAlert";
import Cookies from "js-cookie";

export default function MemberPage({
  email,
}: {
  email: string;
}) {
  const userEmail = decodeURIComponent(email);
  // State for Custom warning alert
  const [isWarningAlertOpen, setIsWarningAlertOpen] = useState(false);
  // Error which shows to user
  const [wanringAlertMessage, setWanringAlertMessage] = useState("");

  const router = useRouter();

  useEffect(() => {
    const cookie = Cookies.get("user");

    if (!cookie) {
      setIsWarningAlertOpen(true);
      setWanringAlertMessage("You need to be logged in to view this content.")
    }
  },[]);

  return (
    <>
      <div className="w-full h-[1024px] bg-white] 2xl:px-40 p-8 py-20 mt-[130px]">
        <div className="flex justify-center w-full ">
          <div className="text-center md:w-[650px]">
            <h1 className="text-[60px] sm:text-[80px] font-[600] text-[#F5169c]">WELCOME</h1>
            <h2 className="text-[40px] font-[500] text-[#ff00a2] mt-6">
              TO THE GATHERGRAM{" "}
            </h2>
            <h2 className="text-[20px] font-[400] mt-20 leading-[27px] text-[#475467]">
              Congratulations on becoming a member! We’re excited to be part of
              your special journey.
            </h2>
            <h3 className="text-[16px] font-[400] mt-10">
              Your email is{" "}
              <strong className="text-[#645bfe] font-[500]">{userEmail}</strong>
            </h3>
            <h3 className="mt-10 text-[16px] font-[400] leading-[25px]">
              Create unforgettable memories with a personalized wedding platform
              for you and your guests.
            </h3>
            <h2 className="text-[#645bfe] font-[600] mt-20 leading-[28px]">
              At GatherGram, plan, share, and celebrate your big day all in one
              place.
            </h2>
            <button
              type="button"
              className="w-full h-[55px] bg-[#f5169c] rounded-2xl text-white text-[18px] font-[400] mt-14"
              onClick={() => router.push("/")}
            >
              Go to main page
            </button>
          </div>
        </div>
      </div>

      {isWarningAlertOpen && <CustomWarningAlert message={wanringAlertMessage} setIsWarningAlertOpen={setIsWarningAlertOpen}/>}
    </>
  );
}
