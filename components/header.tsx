'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { MaskText } from "@/app/page";
import { AnimatePresence, motion } from "framer-motion";

const data = [
    {
        title: "LinkedIn",
        href: "#"
    },
    {
        title: "Behance",
        href: "#"
    },
    {
        title: "Clutch",
        href: "#"
    }
];

const socialVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeIn", delay: i * 0.1 },
  }),
};

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const scrollContainer = document.documentElement; // Lenis often uses <html> as the scroll container

        if (isOpen) {
            // Add no-scroll class to html instead of body
            scrollContainer.classList.add('no-scroll');
            // Optionally disable Lenis scrolling if you have access to the instance
            // Example: lenis.stop(); // Uncomment if you have Lenis instance
        } else {
            scrollContainer.classList.remove('no-scroll');
            // Example: lenis.start(); // Uncomment if you have Lenis instance
        }

        // Cleanup on unmount
        return () => {
            scrollContainer.classList.remove('no-scroll');
            // Example: lenis.start(); // Uncomment if you have Lenis instance
        };
    }, [isOpen]);

  return (
    <div className="flex justify-between items-center max-w-[1300px] m-auto py-[40px]">
        <div className="flex items-center justify-between gap-[20px] w-full z-99999">
            <div>
                <Image src="/11thMile-logo.png" alt="11th Mile Logo" width={150} height={50} quality={100} />
            </div>
            <div 
                className="nav__breadcrems flex flex-col items-end gap-[6px] w-[2%] hover:cursor-pointer"
                onClick={toggleMenu}
            >
                <div className={`bg-white w-[100%] h-[3px] ${isOpen ? 'transform translate-x-[10%] translate-y-[100%] rotate-[-45deg] transition-transform duration-700 ease-in-out' : 'transition-transform duration-700 ease-in-out'}`}></div>
                <div className={`bg-white w-[80%] h-[3px] ${isOpen ? 'transform translate-x-[0px] translate-y-[-240%] rotate-[45deg] transition-transform duration-700 ease-in-out' : 'transition-transform duration-700 ease-in-out'}`}></div>
            </div>
        </div>

        <div 
            className={`nav__menu fixed left-0 top-0 w-[100%] h-[100vh] z-[99] bg-[#0f0f0f] pt-40 pb-10 transition-transform duration-700 ease-in-out [transform-style:preserve-3d] block overflow-hidden
                ${ isOpen 
                    ? '[transform:translate3d(0%,0%,0px)_rotateZ(0deg)]' 
                    : '[transform:translate3d(0px,-110%,0px)_scale3d(1,1,1)_rotateX(0deg)_rotateY(0deg)_rotateZ(0deg)_skew(0deg,0deg)]'
                }`}
        >
            <div className="flex justify-between items-center max-w-[1300px] m-auto h-full">
                <div className="flex flex-col items-start justify-between h-full w-[60%]">
                    <div className="flex flex-col items-start gap-[20px]">
                        {isOpen && (
                            <Link 
                                href="#" 
                                className="text-white font-sans font-medium uppercase hover:bg-transparent text-8xl p-0 gap-0 border-0 hover:text-white hover:cursor-pointer"
                            >
                                <MaskText
                                    styles={{ 
                                        maskText: "",
                                        lineMask: "overflow-hidden",
                                    }}
                                    title="home"
                                />
                            </Link>
                        )}
                        {isOpen && (
                            <Link 
                                href="#" 
                                className="text-white font-sans font-medium uppercase hover:bg-transparent text-8xl p-0 gap-0 border-0 hover:text-white hover:cursor-pointer"
                            >
                                <MaskText
                                    styles={{ 
                                        maskText: "",
                                        lineMask: "overflow-hidden",
                                    }}
                                    title="Projects"
                                />
                            </Link>
                        )}
                        {isOpen && (
                            <Link 
                                href="#" 
                                className="text-white font-sans font-medium uppercase hover:bg-transparent text-8xl p-0 gap-0 border-0 hover:text-white hover:cursor-pointer"
                            >
                                <MaskText
                                    styles={{ 
                                        maskText: "",
                                        lineMask: "overflow-hidden",
                                    }}
                                    title="About Us"
                                />
                            </Link>
                        )}
                        {isOpen && (
                            <Link 
                                href="#" 
                                className="text-white font-sans font-medium uppercase hover:bg-transparent text-8xl p-0 gap-0 border-0 hover:text-white hover:cursor-pointer"
                            >
                                <MaskText
                                    styles={{ 
                                        maskText: "",
                                        lineMask: "overflow-hidden",
                                    }}
                                    title="Insights"
                                />
                            </Link>
                        )}
                    </div>
                    <div className="flex flex-row items-center gap-[40px] mt-[40px">
                        <AnimatePresence>
                            {isOpen &&
                            data.map((item, index) => (
                                <motion.div
                                key={item.title}
                                className="text-white font-sans font-medium"
                                variants={socialVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                custom={index}
                                >
                                <Link href={item.href} target="_blank" rel="noopener noreferrer" className="text-[#ffffffce]">
                                    {item.title}
                                </Link>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
                <div className="flex flex-col justify-between h-full w-[40%] relative">
                    <div className="flex flex-col items-start justify-center gap-[20px] h-[60%] before:content-[''] before:h-[100vh] before:w-[1px] before:bg-[#8d8d8d] before:absolute before:left-[-50px] before:top-[-160px] z-10">
                        <div className="relative inline-flex items-center justify-center gap-4 mt-[15px] group">
                            <div
                                className="absolute">
                            </div>
                                <a
                                    href="#"
                                    title="payment"
                                    className="group relative inline-flex items-center justify-center text-[24px] font-sans font-normal text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-gray-600/30"
                                    role="button"
                                >
                                    Branding & Positioning  
                                    <svg
                                        className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
                                        fill="none"
                                        width="15"
                                        height="15"
                                        viewBox="0 0 10 10"
                                        aria-hidden="true"
                                    >
                                        <path className="transition opacity-0 group-hover:opacity-100" d="M0 5h7"></path>
                                        <path className="transition group-hover:translate-x-[5px]" d="M1 1l4 4-4 4"></path>
                                    </svg>
                                </a>
                        </div>
                        <div className="relative inline-flex items-center justify-center gap-4 mt-[15px] group">
                            <div
                                className="absolute">
                            </div>
                                <a
                                    href="#"
                                    title="payment"
                                    className="group relative inline-flex items-center justify-center text-[24px] font-sans font-normal text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-gray-600/30"
                                    role="button"
                                >
                                    Physical & Digital Product Design
                                    <svg
                                        className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
                                        fill="none"
                                        width="15"
                                        height="15"
                                        viewBox="0 0 10 10"
                                        aria-hidden="true"
                                    >
                                        <path className="transition opacity-0 group-hover:opacity-100" d="M0 5h7"></path>
                                        <path className="transition group-hover:translate-x-[5px]" d="M1 1l4 4-4 4"></path>
                                    </svg>
                                </a>
                        </div>
                        <div className="relative inline-flex items-center justify-center gap-4 mt-[15px] group">
                            <div
                                className="absolute">
                            </div>
                                <a
                                    href="#"
                                    title="payment"
                                    className="group relative inline-flex items-center justify-center text-[24px] font-sans font-normal text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-gray-600/30"
                                    role="button"
                                >
                                    Marketing Strategy & Execution
                                    <svg
                                        className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
                                        fill="none"
                                        width="15"
                                        height="15"
                                        viewBox="0 0 10 10"
                                        aria-hidden="true"
                                    >
                                        <path className="transition opacity-0 group-hover:opacity-100" d="M0 5h7"></path>
                                        <path className="transition group-hover:translate-x-[5px]" d="M1 1l4 4-4 4"></path>
                                    </svg>
                                </a>
                        </div>
                    </div>
                    <div className="relative before:content-[''] before:h-[1px] before:w-[150%] before:bg-[#8d8d8d] before:absolute before:left-[-50px] before:top-[-160px] z-10">
                        <div className="relative inline-flex items-center justify-center gap-4 mt-[15px] group">
                            <div
                                className="absolute">
                            </div>
                                <a
                                    href="#"
                                    title="payment"
                                    className="group relative inline-flex items-center justify-center text-[24px] font-sans font-light text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-gray-600/30"
                                    role="button"
                                >
                                    Schedule First Meeting
                                    <svg
                                        className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
                                        fill="none"
                                        width="15"
                                        height="15"
                                        viewBox="0 0 10 10"
                                        aria-hidden="true"
                                    >
                                        <path className="transition opacity-0 group-hover:opacity-100" d="M0 5h7"></path>
                                        <path className="transition group-hover:translate-x-[5px]" d="M1 1l4 4-4 4"></path>
                                    </svg>
                                </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}