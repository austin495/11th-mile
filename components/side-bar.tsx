'use client'
import { useState } from 'react';
import Image from "next/image";
import { AnimatePresence } from 'framer-motion';
import Nav from './nav';

export default function SideBar() {
    const [isActive, setIsActive] = useState(true);

    const toggleMenu = () => {
        setIsActive(!isActive);
    }

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
                    <div className={`bg-white w-[100%] h-[3px] ${isActive ? 'transform translate-x-[10%] translate-y-[100%] rotate-[-45deg] transition-transform duration-700 ease-in-out' : 'transition-transform duration-700 ease-in-out'}`}></div>
                    <div className={`bg-white w-[80%] h-[3px] ${isActive ? 'transform translate-x-[0px] translate-y-[-240%] rotate-[45deg] transition-transform duration-700 ease-in-out' : 'transition-transform duration-700 ease-in-out'}`}></div>
                </div>
            </div>

            <AnimatePresence mode="wait">
                {isActive && <Nav />}
            </AnimatePresence>
        </div>
    )
}