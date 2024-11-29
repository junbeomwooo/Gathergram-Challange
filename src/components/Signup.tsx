"use client";

import Image from "next/image";
import Link from "next/link";
import { use, useState } from "react";
import CustomWarningAlert from "./CustomWarningAlert";
import CustomSuccessAlert from "./CustomSuccessAlert";

// images
import WeddingImage from "@/../public/img/weddingImage.png";
import GoogleLogo from "@/../public/img/googleLogo.png";
import FacebookLogo from "@/../public/img/facebookLogo.png";
import AppleLogo from "@/../public/img/appleLogo.png";
import Visible from "@/../public/img/visible.png";
import ArrowBottom from "@/../public/img/Arrow - Bottom.png";

// countries image
import Canada from "@/../public/img/Canada.png";
import America from "@/../public/img/America.png";

export default function Signup() {
  // State for visible password
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // State for dropdown
  const [isCountryArrayOpen, setIsCountryArrayOpen] = useState(false);

  /** Error Custom */
  // State for Custom warning alert
  const [isWarningAlertOpen, setIsWarningAlertOpen] = useState(false);
  // Error which shows to user
  const [wanringAlertMessage, setWanringAlertMessage] = useState("");

  /** Success Custom */
  // State for Custom success alert
  const [isSuccessgAlertOpen, setIsSuccessAlertOpen] = useState(false);
  // Success alert which shows to user
  const [successAlertMessage, setSuccessAlertMessage] = useState("");

  // To pass the email value to the custom component and navigate when the button is clicked in the Custom Success Alert component.
  const [emailName, setEmailName] = useState("");

  // State for country code
  const [countryCode, setCountryCode] = useState({
    country: "Canada",
    code: "+1",
    src: Canada,
  });

  // Array containing country codes and informations
  const arrayCountryCodes = [
    { country: "United States", code: "+1", src: America },
    { country: "Canada", code: "+1", src: Canada },
  ];

  // function for create member
  const createMember = async (
    email: string,
    fullName: string,
    mobileNumber: string,
    password: string
  ) => {
    // API Endponits
    const URL = "https://oyster-app-tkav7.ondigitalocean.app/auth/register";

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: fullName,
          email: email,
          phoneNumber: mobileNumber,
          password: password,
        }),
      });

      const json = await response.json();

      // Successful Registration
      if (response.ok) {
        setSuccessAlertMessage("You have successfully registered.");
        setIsSuccessAlertOpen(true);
        setEmailName(encodeURIComponent(email));

        // Failed Registration:
      } else {
        setWanringAlertMessage(json.message);
        setIsWarningAlertOpen(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  /** Create account event */

  // The Figma design shows the Australian code, so I created phone numbers for multiple countries. However, the server only accepts phone numbers in the North American format, so I will exclude countries other than the USA and Canada.

  const onClickSumbit = async (e: any) => {
    e.preventDefault();

    const current = e.currentTarget;

    // remove spaces and converts to lowercase
    const email = current.email.value.trim().toLowerCase();
    const fullName = `${current.firstName.value} ${current.lastName.value}`;
    const mobileNumber = current.mobileNumber.value.trim();
    // `${countryCode.code}${current.mobileNumber.value}`.trim();
    const password = current.password.value.trim();

    /**  Regex validation */

    // required
    const valueRegex = /^(?!\s*$).+/;

    // email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // min 4 chars, max 50 chars
    const fullnameRegex = /^.{4,50}$/;

    const mobileNumberRegex =
      /^[2-9][0-9]{2}[-.● ]?[2-9][0-9]{2}[-.● ]?[0-9]{4}$/;

    // min 8 chars, 1 capital, 1 symbol, 1 number
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    // English
    const englishRegex = /^[a-zA-Z\s]+$/;

    // Regex try,catch
    try {
      // Check if a value is entered
      if (!valueRegex.test(email)) {
        throw new Error("Please enter your email.");
      }
      if (!valueRegex.test(fullName)) {
        throw new Error("Please enter your name.");
      }
      if (!valueRegex.test(current.mobileNumber.value)) {
        throw new Error("Please enter your mobile number.");
      }
      if (!valueRegex.test(password)) {
        throw new Error("Please enter your password.");
      }

      // Check email format
      if (!emailRegex.test(email)) {
        throw new Error("Invalid email format.");
      }

      // check min 4 chars, max 50 chars
      if (!fullnameRegex.test(fullName)) {
        throw new Error("Full name must be between 4 and 50 characters.");
      }

      // check mobile format
      if (!mobileNumberRegex.test(mobileNumber)) {
        throw new Error(
          "The phone number format must conform to the North American Numbering Plan (NANP)."
        );
      }

      // check min 8 chars, 1 capital, 1 symbol, 1 number
      if (!passwordRegex.test(password)) {
        throw new Error(
          "Password must be at least 8 characters long and include at least one uppercase letter, one special character, and one number."
        );
      }

      // check if it is in English
      if (!englishRegex.test(fullName)) {
        throw new Error("The name must be written in English");
      }
    } catch (error: unknown) {
      let errorMessage: string;

      if (error instanceof Error) {
        errorMessage = error.toString();
      } else if (typeof error === "string") {
        errorMessage = error;
      } else {
        errorMessage = "An unknown error occurred";
      }

      setWanringAlertMessage(errorMessage);
      setIsWarningAlertOpen(true);
      return;
    }

    await createMember(email, fullName, mobileNumber, password);
  };

  return (
    <form
      className="w-full h-auto bg-white xl:flex 2xl:px-40 p-8 py-20"
      onSubmit={onClickSumbit}
    >
      {/* Image */}
      <div className="relative 2xl:max-w-[720px] hidden xl:block h-full">
        <Image
          src={WeddingImage}
          alt="wedding image"
          width={720}
          height={1024}
          className="w-full h-auto"
        />
        <div className="absolute inset-0 bg-pink-500 opacity-20 mix-blend-multiply h-full" />
      </div>

      {/* Register */}
      <div className="m-auto w-full md:w-[573px] xl:w-[573px] xl:pl-10 3xl:pl-0">
        {/* Sign up */}
        <div className="mb-10">
          <h1 className="text-[30px] font-[700] text-[#110D06] mb-4">
            Sign up
          </h1>
          <h4 className="text-[16px] font-[400] text-[#2e2e2e] leading-[22.4px] mt-[8px] w-[456px]">
            Enter your details below to signup or sign in with existing account.
          </h4>
        </div>

        {/* Input */}
        <div>
          {/* email */}
          <div>
            <h3 className="text-[16px] font-[600] text-[#110D06] mb-4">
              Email Address
            </h3>
            <input
              className="w-full h-[56px] rounded-lg border border-solid border-[#323232] text-[16px] font-[400] text-[#231f20] p-4 mb-8"
              placeholder="Enter email"
              name="email"
            />
          </div>
          {/* first name */}
          <div>
            <h3 className="text-[16px] font-[600] text-[#110D06] mb-4">
              First Name
            </h3>
            <input
              className="w-full h-[56px] rounded-lg border border-solid border-[#323232] text-[16px] font-[400] text-[#231f20] p-4 mb-8"
              placeholder="Enter your first name"
              type="text"
              name="firstName"
            />
          </div>
          {/* last name */}
          <div>
            <h3 className="text-[16px] font-[600] text-[#110D06] mb-4">
              Last Name
            </h3>
            <input
              className="w-full h-[56px] rounded-lg border border-solid border-[#323232] text-[16px] font-[400] text-[#231f20] p-4 mb-8"
              placeholder="Enter your last name"
              type="text"
              name="lastName"
            />
          </div>
          {/* mobile Number */}
          <div className="relative">
            <h3 className="text-[16px] font-[600] text-[#110D06] mb-4">
              Mobile Number
            </h3>
            <input
              className="w-full h-[56px] rounded-lg border border-solid border-[#323232] text-[16px] font-[400] text-[#231f20] p-4 mb-8 pl-[90px]"
              type="number"
              name="mobileNumber"
            />
            {/* country code */}
            <div className="absolute flex top-[51.5px] left-4 items-center">
              <Image
                src={countryCode.src}
                alt={countryCode.country}
                width={24}
                height={17.33}
                className=" w-[24px] h-[17.33px] rounded-md"
              />
              <h3 className="text-[16px] font-[400] text-[#231f20] ml-3">
                {countryCode.code}
              </h3>
            </div>

            {/* arrow for toggle */}
            <button
              className="absolute right-4 top-[50px] flex justify-center items-center w-[20px] h-[20px]"
              onClick={() => setIsCountryArrayOpen(!isCountryArrayOpen)}
              type="button"
            >
              <Image
                src={ArrowBottom}
                alt="toggle country code drop down"
                width={9.33}
                height={4.67}
                className="w-[9.33px] h-[4.67px]"
              />
            </button>
            {isCountryArrayOpen && (
              <ul className="bg-white absolute w-full z-10 top-[81px] border-b border-l border-r border-solid border-black">
                {arrayCountryCodes.map((v, i) => {
                  return (
                    <li
                      key={i}
                      className="flex w-full px-4 py-2 hover:cursor-pointer"
                      onClick={() => {
                        setCountryCode(v);
                        setIsCountryArrayOpen(false);
                      }}
                    >
                      <Image
                        src={v.src}
                        alt={v.country}
                        width={24}
                        height={17.33}
                        className="w-[24px] h-[17.33px]"
                      />
                      <h3 className="text-[14px] font-[400] text-[#231f20] ml-3">
                        {v.country}
                      </h3>
                      <h4 className="text-[13px] font-[400] text-[#7c7c7c] ml-4">
                        {v.code}
                      </h4>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          {/* password */}
          <div className="relative">
            <h3 className="text-[16px] font-[600] text-[#110D06] mb-4">
              Password
            </h3>
            <h4 className="text-[16px] font-[300] text-[#323232] mb-4">
              Must be at least 6 characters
            </h4>
            <input
              className="w-full h-[56px] rounded-lg border border-solid border-[#323232] text-[16px] font-[400] text-[#231f20] p-4"
              placeholder="Enter password"
              type={isPasswordVisible ? "text" : "password"}
              name="password"
            />
            <Image
              src={Visible}
              alt="toggle password visibility"
              width={19}
              height={18}
              className="w-[19px] h-[18px] absolute right-6 top-[83px] hover:cursor-pointer"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            />
          </div>

          {/* terms and conditions */}
          <h5 className="text-[16px] font-[400] leading-[22.4px] text-[#323232] mt-8">
            By signing up, I agree to the{" "}
            <span className="font-[500] text-[#247faf] underline underline-offset-2 hover:cursor-pointer">
              terms and conditions
            </span>{" "}
            and have read the &nbsp;
            <span className="font-[500] text-[#247faf] underline underline-offset-2 hover:cursor-pointer">
              privacy policy
            </span>
          </h5>
          {/* button for Sign up */}
          <button
            className="w-full h-[56px] bg-[#f5169c] text-white text-[16px] font-[600] rounded-lg mt-6"
            type="submit"
          >
            Sign up
          </button>
        </div>

        {/* sns */}
        <div className="w-[573]px h-[165px]">
          {/* - or - */}
          <div className=" w-[178px] h-[19px] flex justify-between items-center m-auto my-10">
            <hr className="border border-solid border-[#a0a0a0] w-[64px]" />
            <h3 className="text-[16px] font-[400] text-[#2f2f2f]">Or</h3>
            <hr className="border border-solid border-[#a0a0a0] w-[64px]" />
          </div>

          {/* buttons for sns */}
          <div className="w-full h-[56px] flex justify-between gap-6 3xl:gap-0">
            {/* google */}
            <button className="w-1/3 2xl:w-[181px] h-full bg-[#ffffff] flex items-center justify-center border border-solid border-[#323232] rounded-lg">
              <Image
                src={GoogleLogo}
                alt="google logo"
                width={16}
                height={16}
                className="w-[16px] h-[16px]"
              />
              <h3 className="text-[16px] font-[600] text-[#323232] ml-3">
                Google
              </h3>
            </button>

            {/* facebook */}
            <button className="w-1/3 2xl:w-[181px] h-full bg-[#ffffff] flex items-center justify-center border border-solid border-[#323232] rounded-lg">
              <Image
                src={FacebookLogo}
                alt="facebook logo"
                width={16}
                height={16}
                className="w-[16px] h-[16px]"
              />
              <h3 className="text-[16px] font-[600] text-[#323232] ml-3">
                Facebook
              </h3>
            </button>

            {/* apple */}
            <button className="w-1/3 2xl:w-[181px] h-full bg-[#ffffff] flex items-center justify-center border border-solid border-[#323232] rounded-lg">
              <Image
                src={AppleLogo}
                alt="apple logo"
                width={15.05}
                height={18.48}
                className="w-[15.05px] h-[18.48px] mb-1"
              />
              <h3 className="text-[16px] font-[600] text-[#323232] ml-3">
                Apple
              </h3>
            </button>
          </div>
        </div>

        {/* sign up */}
        <div className="w-full h-[22px] flex justify-center items-center">
          <h4 className="text-[16px] font-[400] text-[#323232]">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-[16px] font-[400] text-[#7e0c65]"
            >
              Sign in
            </Link>
          </h4>
        </div>
      </div>

      {/* custom warning alert  */}
      {isWarningAlertOpen && (
        <CustomWarningAlert
          message={wanringAlertMessage}
          setIsWarningAlertOpen={setIsWarningAlertOpen}
        />
      )}

      {/* custon success alert */}
      {isSuccessgAlertOpen && (
        <CustomSuccessAlert
          message={successAlertMessage}
          setIsSuccessAlertOpen={setIsSuccessAlertOpen}
          emailName={emailName}
        />
      )}
    </form>
  );
}
