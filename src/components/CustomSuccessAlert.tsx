"use client";

import { FaRegCheckCircle } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function CustomSuccessAlert({
  message,
  setIsSuccessAlertOpen,
  emailName,
}: {
  message: any;
  setIsSuccessAlertOpen: React.Dispatch<React.SetStateAction<boolean>>;
  emailName: string;
}) {
  const msg = message;

  const router = useRouter();

  return (
    <div className="w-[500px] h-[330px] fixed bg-white text-black rounded-2xl left-1/2 top-1/4 transform -translate-x-1/2 z-40 pt-6 px-6 border border-solid m-auto">
      <FaRegCheckCircle className="w-[60px] h-[60px] text-[#eb44b2] m-auto" />
      <div className="ml-4 mt-4 text-center">
        <h1 className="text-[25px] mt-6">Success</h1>
        <h3 className="text-[16px] mt-6 leading-[25px] h-[90px]">{msg}</h3>
        <hr className="" />

        <button
          type="button"
          className="w-48 h-12 bg-[#eb44b2] rounded-full text-white mt-[12px]"
          onClick={() => {
            setIsSuccessAlertOpen(false);
            router.push(`member/${emailName}`);
          }}
        >
          I understand
        </button>
      </div>

      <FiX
        className="w-[30px] h-[30px] text-[#eb44b2] absolute top-[15px] right-[20px] hover:cursor-pointer"
        onClick={() => {
          setIsSuccessAlertOpen(false);
          router.push(`member/${emailName}`);
        }}
      />
    </div>
  );
}
