import type { Metadata } from "next";
import "./globals.css";
import {Inter} from "next/font/google";
import Header from "../components/header/Header";
import Footer from "../components/footer/footer";

// Inter fonts
const inter = Inter({
  subsets: ["latin"], 
  weight: ["100","200","300","400","500","600","700","800","900"], 
});

// Metadata
export const metadata: Metadata = {
  title: "Gathergram",
  description: "Celebrate, Share, Remember All in One Place",
  icons: {
    icon: "/img/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
