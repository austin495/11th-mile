import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../anim';
import CustomLink from './link';
import Curve from './curve';
import Image from 'next/image';
import Link from 'next/link';

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Projects",
    href: "#",
  },
  {
    title: "About Us",
    href: "#",
  },
  {
    title: "Insights",
    href: "#",
  },
  {
    title: "Contact",
    href: "#",
  },
]

export default function Nav() {

  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div 
      variants={menuSlide} 
      initial="initial" 
      animate="enter" 
      exit="exit" 
      className="h-[100vh] w-[700px] bg-[#0f0f0f] fixed right-0 top-0"
      >
       <div className="box-border h-full py-[100px] px-[50px] flex flex-row flex-wrap justify-between">
            <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className="flex flex-col text-[55px] gap-[12px] mt-[30px] w-[80%]">
                    {
                      navItems.map( (data, index) => {
                        return <CustomLink 
                        key={index} 
                        data={{...data, index}} 
                        isActive={selectedIndicator == data.href} 
                        setSelectedIndicator={setSelectedIndicator}
                        >
                        </CustomLink>
                      })
                    }
            </div>
            <div className="w-[20%] flex flex-col items-end justify-center gap-3">
                <p className="text-vertical uppercase font-sans font-normal text-[#636363] leading-[1em] tracking-wide block w-auto">Follow Us On</p>
                <Image
                        src="/arrow-down-gray.svg"
                        width={0}
                        height={20}
                        quality={100}
                        alt="Right arrow"
                        className="block h-[15%] w-auto mr-[4px]"
                    />
                <div className="flex flex-col gap-2">
                    <Image
                        src="/cluch.svg"
                        width={20}
                        height={20}
                        quality={100}
                        alt="Right arrow"
                    />
                    <Image
                        src="/dribble.svg"
                        width={20}
                        height={20}
                        quality={100}
                        alt="Right arrow"
                    />
                    <Image
                        src="/linkedin.svg"
                        width={20}
                        height={20}
                        quality={100}
                        alt="Right arrow"
                    />
                </div>
            </div>
            <div className="flex flex-col w-full justify-between text-[12px]">
                <div className="flex flex-row justify-between w-full pb-[5px] border-b-1 border-b-[#ffffff34]">
                    <Link
                        href="#"
                        className="group uppercase font-sans font-normal text-[15px] text-[#636363] leading-[1.4em] tracking-tight hover:text-[#fff] flex items-center gap-1"
                    >
                        Branding & Positioning
                        <Image
                            src="/circle-arrow-right.svg"
                            width={25}
                            height={25}
                            quality={100}
                            alt="Right arrow"
                            className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-200 ease-out group-hover:rotate-40"
                        />
                    </Link>
                    <Link
                        href="#"
                        className="group uppercase font-sans font-normal text-[15px] text-[#636363] leading-[1.4em] tracking-tight hover:text-[#fff] text-right flex items-center gap-1"
                    >
                        Physical & Digital Product Design
                        <Image
                            src="/circle-arrow-right.svg"
                            width={25}
                            height={25}
                            quality={100}
                            alt="Right arrow"
                            className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-200 ease-out group-hover:rotate-40"
                        />
                    </Link>
                </div>
                <div className="flex flex-row justify-between w-full pt-[5px]">
                    <Link
                        href="#"
                        className="group uppercase font-sans font-normal text-[16px] text-[#636363] leading-[1.4em] tracking-tight hover:text-[#fff] flex items-center gap-1"
                    >
                        Marketing Strategy & Execution
                        <Image
                            src="/circle-arrow-right.svg"
                            width={25}
                            height={25}
                            quality={100}
                            alt="Right arrow"
                            className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-200 ease-out group-hover:rotate-40"
                        />
                    </Link>
                    <Link
                        href="#"
                        className="group uppercase font-sans font-normal text-[16px] text-[#636363] leading-[1.4em] tracking-tight hover:text-[#fff] text-right flex items-center gap-1"
                    >
                        Schedule First Meeting
                        <Image
                            src="/circle-arrow-right.svg"
                            width={25}
                            height={25}
                            quality={100}
                            alt="Right arrow"
                            className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-200 ease-out group-hover:rotate-40"
                        />
                    </Link>
                </div>
            </div>
        </div>
        <Curve />
    </motion.div>
  )
}