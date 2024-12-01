"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaExclamationCircle } from "react-icons/fa";

export default function ErrorOMG() {
    const router = useRouter();
  return (
    <div
      style={{
        padding: "100px 30px 0 30px",
        height: "1000px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <FaExclamationCircle className="w-[100px] h-[100px] -mt-[100px] mb-[20px] text-[#EB44B2]"/>
      <h1 className="text-[40px] text-[#EB44B2]">Something went wrong</h1>
      <p
        style={{
          textAlign: "center",
          lineHeight: "30px",
          marginTop: "30px",
          fontSize: "16px",
        }}
      >
        There was a problem processing the request. Please try again. <br />To report an issue,
        <span>
          <Link
            href={"https://github.com/junbeomwooo"}
            style={{ color: "#EB44B2", marginLeft: "5px" }}
          >
            click here
          </Link>
        </span>
        .
      </p>
      <button
        style={{
          marginTop: "30px",
          width: "200px",
          height: "50px",
          backgroundColor: "#EB44B2",
          border: "none",
          color: "white",
          borderRadius: "4px",
          cursor: "pointer",
          transition: "transform 0.3s ease",
          transform: "scale(1)",
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        onClick={() => {router.push("/")}}
      >
        Return to main page
      </button>
    </div>
  );
}
