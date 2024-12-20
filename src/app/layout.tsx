import type { Metadata } from "next";

import "./globals.css";

import Header from "./components/header";
import Footer from "./components/footer";
//import "bootstrap-icons/font/booststrap-icons.css"
import "bootstrap-icons/font/bootstrap-icons.css";
import { Heebo , Inter } from "next/font/google";

/*
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
*/
const heebo = Heebo(
  {subsets: ["latin"],
   weight: ["400", "700", "900"]
  });
const inter = Inter(
  {subsets: ["latin"],
   weight: ["400", "700"],
   variable:'--font-inter',
  });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${heebo.className} ${inter.className} `}
      ><Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
