import { MaskText } from "@/app/page";
import { Facebook, Instagram, Linkedin, Mail, MapPinHouse, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#181818] pt-[100px] pb-[30px]">
            <div className="footer-main max-w-[1440px] m-auto flex flex-col gap-15">
                <div className="flex flex-row justify-between items-start">
                    <div className="w-[25%]">
                        <Image
                            src={"/11thMile-logo.png"}
                            alt="Logo"
                            width={150}
                            height={150}
                            quality={100}
                        />
                    </div>
                    <div className="w-[25%] flex flex-col gap-5">
                        <MaskText
                            styles={{ 
                                maskText: "text-[20px] font-sans font-semibold text-[#ffffffc5] underline underline-offset-3 decoration-[#FF5935]",
                                lineMask: "overflow-hidden",
                            }}
                            title="What we do"
                        />
                        <ul className="flex flex-col gap-3 font-sans font-normal">
                            <li>Marketing Strategy & Execution</li>
                            <li>Branding & Positioning</li>
                            <li>Digital & Physical Product Design</li>
                        </ul>
                    </div>
                    <div className="w-[25%] flex flex-col gap-5">
                        <MaskText
                            styles={{ 
                                maskText: "text-[20px] font-sans font-semibold text-[#ffffffc5] underline underline-offset-3 decoration-[#FF5935]",
                                lineMask: "overflow-hidden",
                            }}
                            title="Company"
                        />
                        <ul className="flex flex-col gap-3 font-sans font-normal">
                            <li>Home</li>
                            <li>Projects</li>
                            <li>About Us</li>
                            <li>Insights</li>
                            <li>Careers</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="w-[25%] flex flex-col gap-5">
                        <MaskText
                            styles={{ 
                                maskText: "text-[20px] font-sans font-semibold text-[#ffffffc5] underline underline-offset-3 decoration-[#FF5935]",
                                lineMask: "overflow-hidden",
                            }}
                            title="Contact Us"
                        />
                        <p className="text-[18px] font-sans font-normal text-[#ffffffc5]">11th Mile is a premier Florida digital agency, our adept experts are dedicated to enhancing engagement and elevating website conversions.</p>
                        <ul className="flex flex-col gap-3 font-sans font-normal">
                            <li className="flex flex-row gap-2"><Mail /> info@11thmile.com</li>
                            <li className="flex flex-row gap-2"><Phone /> +1 (123) 456-7890</li>
                            <li className="flex flex-row gap-2"><MapPinHouse /> dummy, address, Street, City, State & Zip code</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center pt-[20px] border-t border-[#ffffff1a]">
                    <div>
                        <p className="text-[14px] font-sans font-normal">© Copyright 2024 All Rights Reserved.</p>
                    </div>
                    <div>
                        <ul className="flex flex-row gap-5">
                            <li className="w-10 h-10 flex justify-center items-center bg-[#FF5935] p-2 rounded-full hover:bg-[#ff5a35da] hover:cursor-pointer">
                                <Facebook className="w-6 h-6" />
                            </li>
                            <li className="w-10 h-10 flex justify-center items-center bg-[#FF5935] p-2 rounded-full hover:bg-[#ff5a35da] hover:cursor-pointer">
                                <Instagram className="w-6 h-6" />
                            </li>
                            <li className="w-10 h-10 flex justify-center items-center bg-[#FF5935] p-2 rounded-full hover:bg-[#ff5a35da] hover:cursor-pointer">
                                <Linkedin className="w-6 h-6" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}