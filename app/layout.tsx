import type { Metadata } from "next";
import { Lato, Bodoni_Moda } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Preloader from "@/components/preloader";
import SideBar from "@/components/side-bar";

const lato = Lato({
  variable: "--font-lato-sans",
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

const bodonoModa = Bodoni_Moda({
  variable: "--font-bodonimoda-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "11th Mile | Digital Agency",
  description: "Innovative web solutions and seamless user experiences built with cutting-edge technology. Explore now!",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  
  return (
    <html lang="en">
      <body
        className={`${lato.variable} ${bodonoModa.variable} antialiased text-white`}
      >
        <Preloader siteName="11th Mile" />
        {/* <Header /> */}
        <SideBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
