import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import gsap from 'gsap';

interface ModalState {
  active: boolean;
  index: number;
}

interface Service {
  src: string;
  color: string;
  title?: string; 
}

interface ModalProps {
  modal: ModalState;
  services: Service[];
}

const scaleAnimation = {
    initial: {scale: 0, x:"-50%", y:"-50%"},
    enter: {scale: 1, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
    closed: {scale: 0, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}
}

export default function Modal({modal, services}: ModalProps) {
  const { active, index } = modal;
  const modalContainer = useRef(null);

  useEffect( () => {
    //Move Container
    let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {duration: 0.8, ease: "power3"})
    let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {duration: 0.8, ease: "power3"})

    const handleMouseMove = (e: MouseEvent) => {
      const { pageX, pageY } = e;
      xMoveContainer(pageX)
      yMoveContainer(pageY)
    }

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [])

  return (
    <>
        <motion.div
            // ref={modalContainer}
            variants={scaleAnimation}
            initial="initial"
            animate={active ? "enter" : "closed"}
            className="h-[350px] w-[400px] absolute rounded-[5%] overflow-hidden pointer-events-none flex items-center justify-center"
        >
            <div
                style={{top: index * -100 + "%"}}
                className="w-full h-full rounded-[10%] absolute transition-[top 0.5s cubic-bezier(0.76, 0, 0.24, 1)]"
            >
            {
                services.map( (service, index) => {
                const { src, color } = service
                return <div className="w-full h-full rounded-[10%] flex items-center justify-center" style={{backgroundColor: color}} key={`modal_${index}`}>
                    {/* <Image 
                    src={`/${src}`}
                    width={300}
                    height={0}
                    alt="image"
                    className="h-auto"
                    /> */}
                    <video
                        autoPlay
                        loop
                        muted
                        className="object-cover h-full w-full"
                    >
                        <source src={`/${src}`} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                })
            }
            </div>
        </motion.div>
    </>
  )
}