import Link from 'next/link';
import { motion } from 'framer-motion';
import { slide, scale, arrowSlide } from '../anim';
import Image from 'next/image';

interface LinkData {
  title: string;
  href: string;
  index: number;
}

interface CustomLinkProps {
  data: LinkData;
  isActive: boolean;
  setSelectedIndicator: (href: string) => void;
}

export default function CustomLink({data, isActive, setSelectedIndicator}: CustomLinkProps) {
    const { title, href, index} = data;
  
    return (
        <motion.div
            className="relative flex items-center border-b-1 border-b-[#ffffff34] overflow-hidden"
            onMouseEnter={() => {
                console.log('Hovering:', href);
                setSelectedIndicator(href);
            }}
            onMouseLeave={() => console.log('Hover ended:', href)}
            custom={index}
            variants={slide}
            initial="initial"
            animate="enter"
            exit="exit"
            whileHover="hover"
        >
            <motion.span
                variants={arrowSlide}
                initial="initial"
                className="absolute left-[0px]"
            >
                <Image
                src="/arrow-right-big.svg"
                width={200}
                height={20}
                quality={100}
                alt="Right arrow"
                />
            </motion.span>
            <Link
                href={href}
                className="group uppercase font-sans font-semibold text-[#636363] leading-[1.4em] tracking-tight hover:text-[#E35839] flex"
            >
                {/* <Image
                    src="/arrow-right-big.svg"
                    width={200}
                    height={20}
                    quality={100}
                    alt="Right arrow"
                    className="mr-2 -translate-x-[200px] group-hover:translate-x-0 transition-transform duration-300 ease-out"
                /> */}
                {title}
            </Link>
        </motion.div>
    )
  }