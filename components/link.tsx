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
            className="relative flex items-center"
            onMouseEnter={() => {
                console.log('Hovering:', href);
                setSelectedIndicator(href)
            }}
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
                className="absolute left-[-30px] top-1/2 -translate-y-1/2 text-[#E35839]"
            >
                <Image
                    src="/arrow-right-big.svg"
                    width={20}
                    height={20}
                    quality={100}
                    alt="Right arrow"
                />
            </motion.span>
            <Link
                href={href}
                className="uppercase font-sans font-semibold text-[#636363] leading-[1.4em] tracking-tight hover:text-[#E35839] border-b-1 border-b-[#ffffff34] w-full"
            >
                {title}
            </Link>
        </motion.div>
    )
  }