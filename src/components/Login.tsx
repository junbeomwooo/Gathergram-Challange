"use client";

import Image from "next/image";
import { useState } from "react";
import Cookies from "js-cookie";
import Link from "next/link";
import CustomSuccessAlert from "./CustomSuccessAlert";
import CustomWarningAlert from "./CustomWarningAlert";

// Images
import WeddingImage from "@/../public/img/weddingImage.png";
import secondLogoVector from "@/../public/img/secondLogoVector.png";
import GatherGramFont from "@/../public/img/GatherGramFont.png";
import GoogleLogo from "@/../public/img/googleLogo.png";
import FacebookLogo from "@/../public/img/facebookLogo.png";
import AppleLogo from "@/../public/img/appleLogo.png";
import Visible from "@/../public/img/visible.png";

export default function Login() {
  // state for visible password
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

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


  // funtion for login
  const loginMember = async (email: string, password: string) => {
    // API Endponits
    const URL = "https://oyster-app-tkav7.ondigitalocean.app/auth/login";

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const json = await response.json();
      console.log(json);
      console.log(response);
      
      // Successful Registration
      if (response.ok) {
        setSuccessAlertMessage("You have successfully logged in.");
        setIsSuccessAlertOpen(true);
        setEmailName(encodeURIComponent(email));

        Cookies.set("user", json.data.accessToken);

        // Failed Registration:
      } else {
        setWanringAlertMessage(json.message);
        setIsWarningAlertOpen(true);
      }
    } catch (error) {
      console.log(error);
    }
  };


  /** login account event */
  const onSubmitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const current = e.currentTarget;

    const email = current.email.value.trim().toLowerCase();
    const password = current.password.value.trim();

    /**  Regex validation */

    // required
    const valueRegex = /^(?!\s*$).+/;

    // email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    try {
      // Check if a value is entered
      if (!valueRegex.test(email)) {
        throw new Error("Please enter your email.");
      }

      if (!valueRegex.test(password)) {
        throw new Error("Please enter your password.");
      }

      // Check email format
      if (!emailRegex.test(email)) {
        throw new Error("Invalid email format.");
      }

      // check min 8 chars, 1 capital, 1 symbol, 1 number
      if (!passwordRegex.test(password)) {
        throw new Error(
          "Password must be at least 8 characters long and include at least one uppercase letter, one special character, and one number."
        );
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

    await loginMember(email, password);
  };
  return (

    <form
      className="w-full bg-white xl:flex 2xl:px-40 p-8 py-20 mt-[80px]"
      onSubmit={onSubmitLogin}
    >
      {/* Image */}
      <div className="relative 2xl:max-w-[720px] hidden xl:block">
        <Image
          src={WeddingImage}
          alt="wedding image"
          width={720}
          height={1024}
          className="w-full h-auto"
        />
        <div className="absolute inset-0 bg-pink-500 opacity-20 mix-blend-multiply" />
      </div>
      {/* Login */}
      <div className="m-auto w-full md:w-[573px] xl:w-[573px] xl:pl-10 3xl:pl-0">
        {/* Logo */}
        <div className="flex items-center justify-center mb-28">
          <Image
            src={secondLogoVector}
            alt="logo"
            width={47.69}
            height={59.37}
            className="w-[47.69px] h-[59.37px]"
          />
          <Image
            src={GatherGramFont}
            alt="logo font"
            width={101}
            height={38}
            className="w-[101px] h-auto ml-[11.87px]"
          />
        </div>
        {/* Get Started */}
        <div className="mb-10">
          <h1 className="text-[30px] font-[700] text-[#110D06] mb-4">
            Get Started
          </h1>
          <h4 className="text-[16px] font-[400] text-[#2e2e2e] leading-[22.4px] mt-[8px] sm:w-[456px]">
            Enter your email address below to login to existing account or sign
            up with new account.
          </h4>
        </div>

        {/* Input */}
        <div>
          <div>
            {/* email */}
            <h3 className="text-[16px] font-[600] text-[#110D06] mb-4">
              Email Address
            </h3>
            <input
              className="w-full h-[56px] rounded-lg border border-solid border-[#323232] text-[16px] font-[400] text-[#231f20] p-4 mb-8"
              placeholder="Enter email"
              type="email"
              name="email"
            />
          </div>
          {/* password */}
          <div className="relative">
            <h3 className="text-[16px] font-[600] text-[#110D06] mb-4">
              Password
            </h3>
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
              className="w-[19px] h-[18px] absolute right-6 top-[50px] hover:cursor-pointer"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            />
          </div>
          {/* button for login */}
          <button
            className="w-full h-[56px] bg-[#f5169c] text-white text-[16px] font-[600] rounded-lg mt-6"
            type="submit"
          >
            Get Started
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
          <div className="w-full h-[56px] flex justify-between gap-2 sm:gap-6 3xl:gap-0">
            {/* google */}
            <button
              className="w-1/3 2xl:w-[181px] h-full bg-[#ffffff] flex items-center justify-center border border-solid border-[#323232] rounded-lg"
              type="button"
            >
              <Image
                src={GoogleLogo}
                alt="google logo"
                width={16}
                height={16}
                className="w-[16px] h-[16px]"
              />
              <h3 className="text-[13px] sm:text-[16px] font-[600] text-[#323232] ml-3">
                Google
              </h3>
            </button>

            {/* facebook */}
            <button
              className="w-1/3 2xl:w-[181px] h-full bg-[#ffffff] flex items-center justify-center border border-solid border-[#323232] rounded-lg"
              type="button"
            >
              <Image
                src={FacebookLogo}
                alt="facebook logo"
                width={16}
                height={16}
                className="w-[16px] h-[16px]"
              />
              <h3 className="text-[13px] sm:text-[16px] font-[600] text-[#323232] ml-3">
                Facebook
              </h3>
            </button>

            {/* apple */}
            <button
              className="w-1/3 2xl:w-[181px] h-full bg-[#ffffff] flex items-center justify-center border border-solid border-[#323232] rounded-lg"
              type="button"
            >
              <Image
                src={AppleLogo}
                alt="apple logo"
                width={15.05}
                height={18.48}
                className="w-[15.05px] h-[18.48px] mb-1"
              />
              <h3 className="text-[13px] sm:text-[16px] font-[600] text-[#323232] ml-3">
                Apple
              </h3>
            </button>
          </div>
        </div>

        {/* sign up */}
        <div className="w-full h-[22px] flex justify-center items-center">
          <h4 className="text-[16px] font-[400] text-[#323232]">
            Don’t have an account?{" "}
            <Link
              href="/signup"
              className="text-[16px] font-[400] text-[#7e0c65]"
            >
              Sign up
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
