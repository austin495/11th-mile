'use client';
import { Marquee } from "@/components/marquee";
import { useScroll, useTransform, motion, useInView} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import dynamic from "next/dynamic";
import SmoothScroll from "@/components/smoothScroll";
import Projects from "@/components/projects";
import Image from "next/image";
import Lenis from "lenis";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { BackgroundLines } from "@/components/background-lines";

const Earth = dynamic(() => import('@/components/earth'), {
  ssr: false,
  loading: () => <img className="h-full" src="/placeholder.png"></img>
})

const testimonials = [
  {
    id: 1,
    logo: "/testimonial-logo.svg",
    text: "Using testing to find out what improves user outcomes the most",
    name: "Ken Marks",
    title: "VP of Product Management",
    image: "/olo.44ee0e4e.webp",
  },
  {
    id: 2,
    logo: "/testimonial-logo.svg",
    text: "How Wise uses measurable observation to build products",
    name: "Hazel Muhtar",
    title: "Director of Product Analytics",
    image: "/olo.44ee0e4e.webp",
  },
  {
    id: 3,
    logo: "/testimonial-logo.svg",
    text: "Understanding the power of knowing your customer",
    name: "Guy Barkat",
    title: "Product Manager of Growth",
    image: "/olo.44ee0e4e.webp",
  },
];

const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

export default function Home() {
    const container = useRef<HTMLDivElement | null>(null);
    const container1 = useRef<HTMLDivElement | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const slidesToShow = 3;
    const totalSlides = extendedTestimonials.length;
    const slideWidth = 100 / slidesToShow;

    const { scrollYProgress: scrollYProgressContainer } = useScroll({
      target: container,
      offset: ['start start', 'end end'],
    });

    const { scrollYProgress: scrollYProgressContainer1 } = useScroll({
      target: container1,
      offset: ['start start', 'end end'],
    });

    const scale = useTransform(scrollYProgressContainer, [0, 1], [1, 1.3]);

    useEffect(() => {
      const lenis = new Lenis();

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      const animationFrameId = requestAnimationFrame(raf);

      return () => {
        cancelAnimationFrame(animationFrameId); // Cleanup on unmount
      };
    }, []);

    useEffect(() => {
      const splide = new Splide(".splide", {
        autoScroll: {
          speed: 1,
        },
        type: "loop",
        perPage: 3,
        gap: "1rem",
        drag: "free",
        focus: "center",
        autoplay: true,
        pauseOnHover: false,
        arrows: false,
        pagination: false,
      });

      splide.mount({ AutoScroll });

      return () => {
        splide.destroy();
      };
    }, []);

  return (
    <main>
      <section className="hero h-[100vh] pt-[150px] pb-[50px] mt-[-130px]">
        <div className="flex flex-col h-full max-w-[1440px] m-auto">
          <div className="w-[60%] h-full flex flex-col justify-between items-start gap-10">
            <div className="flex flex-col justify-baseline items-start gap-10 w-full">
              <h1 className="text-8xl font-sans font-medium tracking-tight leading-[1.1em]">
                <MaskText
                  styles={{ 
                    maskText: "uppercase",
                    lineMask: "overflow-hidden",
                  }}
                  title="We are a digital agency that"
                />
                
                <MaskText
                  styles={{ 
                    maskText: "",
                    lineMask: "overflow-hidden font-mono font-medium",
                  }}
                  title="excellence."
                />
              </h1>
              <div className="relative inline-flex items-center justify-center gap-4 mt-[15px] group">
                <div
                  className="absolute inset-0 duration-1000 opacity-60 transitiona-all bg-gradient-to-r from-[#ff5a35c2] to-white rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200">
                </div>
                  <a
                    href="#"
                    title="payment"
                    className="group relative inline-flex items-center justify-center text-base rounded-xl bg-gray-900 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
                    role="button"
                  >
                    Learn More
                    <svg
                      className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
                      fill="none"
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      aria-hidden="true"
                    >
                      <path className="transition opacity-0 group-hover:opacity-100" d="M0 5h7"></path>
                      <path className="transition group-hover:translate-x-[5px]" d="M1 1l4 4-4 4"></path>
                    </svg>
                  </a>
              </div>
            </div>
            <div className="flex flex-row gap-4 pl-2">
              <div className="w-[1px] h-[120px] bg-[#8d8d8d] relative">
                <div className="bg-white h-[80%] w-[1px] absolute animate-line-move"></div>
              </div>
              <span
                className="text-[18px] font-sans font-light uppercase w-[60%] block"
              >
                Scroll to explore
              </span>
            </div>
          </div>  
        </div>
      </section>

      <section className="marquee overflow-hidden py-[80px] flex flex-col gap-10">
        <Marquee gap={30} speed={300}>
          <div className="flex gap-12">
            <p className="text-8xl font-sans font-bold uppercase text__stroke">-</p>
            <p className="text-8xl font-sans font-bold uppercase text-stroke">Accessibility</p>
            <p className="text-8xl font-sans font-bold uppercase text__stroke">-</p>
            <p className="text-8xl font-sans font-bold uppercase text-stroke">Websites</p>
            <p className="text-8xl font-sans font-bold uppercase text__stroke">-</p>
            <p className="text-8xl font-sans font-bold uppercase text-stroke">usability</p>
          </div>
        </Marquee>
        <Marquee gap={30} speed={400}>
          <div className="flex gap-12">
            <p className="text-8xl font-sans font-bold uppercase text__stroke">-</p>
            <p className="text-8xl font-sans font-bold uppercase text-stroke">amazing sites</p>
            <p className="text-8xl font-sans font-bold uppercase text__stroke">-</p>
            <p className="text-8xl font-sans font-bold uppercase text-stroke">online store</p>
            <p className="text-8xl font-sans font-bold uppercase text__stroke">-</p>
            <p className="text-8xl font-sans font-bold uppercase text-stroke">amazing sites</p>
          </div>
        </Marquee>
        <Marquee gap={30} speed={400}>
          <div className="flex gap-12">
            <p className="text-8xl font-sans font-bold uppercase text__stroke">-</p>
            <p className="text-8xl font-sans font-bold uppercase text-stroke">app</p>
            <p className="text-8xl font-sans font-bold uppercase text__stroke">-</p>
            <p className="text-8xl font-sans font-bold uppercase text-stroke">identity</p>
            <p className="text-8xl font-sans font-bold uppercase text__stroke">-</p>
            <p className="text-8xl font-sans font-bold uppercase text-stroke">development</p>
          </div>
        </Marquee>
      </section>

      <section
        ref={container}
        className="relative m-auto h-[200vh] pt-[50px]"
      >
        <div className="sticky top-0 overflow-hidden h-[100vh]">
              <motion.div style={{scale}} className="w-[100%] h-[100%] px-[150px] top-0 absolute flex items-center justify-center">
                <div className="w-full h-full relative">
                  <video
                    autoPlay
                    loop
                    muted
                    className="object-cover"
                  >
                    <source src="/bg-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </motion.div>
        </div>
      </section>

      <section className="text-center pt-[100px] flex flex-col items-center gap-5">
        <MaskText
          styles={{ 
            maskText: "text-6xl font-sans font-bold",
            lineMask: "overflow-hidden",
          }}
          title="What We Do"
        />
        <p className="text-2xl font-sans font-light">Implementing ambitious visions by unraveling the most exciting version of your brand.</p>
      </section>

      <section>
        <SmoothScroll>
          <main className="h-[60vw] my-0 relative flex items-center justify-center">
            <Earth />
            <Projects />
          </main>
        </SmoothScroll>
      </section>

      <div ref={container1} className="relative h-[300vh]">
        <Section1 scrollYProgress={scrollYProgressContainer1} />
        <Section2 scrollYProgress={scrollYProgressContainer1} />
        <Section3 scrollYProgress={scrollYProgressContainer1} />
      </div>

      <section className="testimonial py-[100px] flex flex-col items-center gap-10">
        <div className="max-w-[1440px] m-auto flex flex-col items-center gap-10">
          <MaskText
              styles={{ 
                maskText: "text-6xl font-sans font-semibold text-center w-[60%] leading-[1.2em]",
                lineMask: "overflow-hidden",
              }}
              title="Teams like yours are building from their product data"
            />
        </div>
        <div className="splide w-full">
          <div className="splide__track">
            <ul className="splide__list">
              {testimonials.map((testimonial) => (
                <li key={testimonial.id} className="splide__slide">
                  <div
                    className={`p-5 bg-white rounded-[20px] shadow-lg h-full flex flex-row items-center`}
                  >
                    <div className="text-left w-[50%]">
                      <Image
                        src={testimonial.logo}
                        alt={`${testimonial.name} logo`}
                        width={50}
                        height={50}
                        className="mb-4"
                      />
                      <p className="text-gray-800 mb-4 text-3xl font-sans font-medium">{testimonial.text}</p>
                      <p className="font-sans text-lg text-gray-600">{testimonial.name}</p>
                      <p className="font-sans text-sm text-gray-500">{testimonial.title}</p>
                      <a href="#" className="font-sans text-[#FF5935] mt-4 inline-flex items-center">
                        Watch Video →
                      </a>
                    </div>
                    <div className="testimonial-image w-[50%] relative">
                      <Image
                        src={testimonial.image}
                        alt={`${testimonial.name} logo`}
                        width={500}
                        height={50}
                        quality={100}
                        className="w-full h-full object-cover rounded-[20px]"
                      />
                      <a href="#" className="text-white inline-flex items-center bg-[#FF5935] w-[28%] h-[22%] rounded-full justify-center p-[10px] absolute bottom-[20px] left-[30px]">
                        <svg
                          className="w-full h-full"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-[50px]">
        <div className="max-w-[1440px] m-auto flex flex-col items-center gap-15">
          <div className="flex flex-col items-center gap-10">
            <MaskText
              styles={{ 
                maskText: "text-6xl font-sans font-bold text-center leading-[1.2em]",
                lineMask: "overflow-hidden",
              }}
              title="Join over 20,000+ companies who accelerated their growth with Mixpanel"
            />
          </div>

          <div className="relative">
            <BackgroundLines className="flex flex-row items-center justify-between gap-x-10 gap-y-30 flex-wrap p-20 bg-[#ffffff0e] border-1 border-[#ffffff54] rounded-[40px] text-[#fff] backdrop:blur-8xl">
              <div className="w-[61%] flex flex-col gap-5">
                <p className="text-[18px] font-sans font-normal uppercase leading-[1.2em] tracking-wide">Cnsumer Tech</p>
                <p className="text-[38px] font-sans font-normal">Mixpanel enables our product managers and designers to uncover and focus on larger opportunities for product discovery and improvement.</p>
                <p className="text-[18px] font-sans font-normal"><strong>Sid Arora</strong>, Head of Data Products - Analytics and Experimentation</p>
              </div>
              <div className="w-[35%] flex flex-col items-center justify-center">
                <Image
                  src="/yelp.svg"
                  alt="Mixpanel Logo"
                  width={200}
                  height={50}
                  className="w-[80%] h-auto"
                />
              </div>
              <div className="w-[20%]">
                <p className="text-[18px] font-sans font-normal">More industry customers</p>
              </div>
              <div className="w-[76%] flex flex-row items-center justify-between gap-5">
                <Image
                  src="/uber.svg"
                  alt="Mixpanel Logo"
                  width={200}
                  height={50}
                  className="w-[12%] h-auto"
                />
                <Image
                  src="/zip.svg"
                  alt="Mixpanel Logo"
                  width={200}
                  height={50}
                  className="w-[12%] h-auto"
                />
                <Image
                  src="/viber.svg"
                  alt="Mixpanel Logo"
                  width={200}
                  height={50}
                  className="w-[12%] h-auto"
                />
                <Image
                  src="/resy.svg"
                  alt="Mixpanel Logo"
                  width={200}
                  height={50}
                  className="w-[12%] h-auto"
                />
              </div>
            </BackgroundLines>
          </div>
        </div>
      </section>

      <section className="py-[100px]">
        <div className="call-to-action_main">
          <div className="inner-wraper max-w-[1440px] m-auto flex flex-col items-center justify-center gap-5">
            <MaskText
              styles={{ 
                maskText: "text-[45px] font-sans font-semibold w-[40%] text-center leading-[1.2em]",
                lineMask: "overflow-hidden",
              }}
              title="Accelerate your team's content creation process."
            />
            <p className="text-[18px] font-sans font-normal">Join over 20,000+ companies who accelerated their growth with Mixpanel</p>
            <div className="relative inline-flex items-center justify-center gap-4 mt-[15px] group">
              <div
                className="absolute inset-0 duration-1000 opacity-60 transitiona-all bg-gradient-to-r from-[#ff5a35c2] to-white rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200">
              </div>
                <a
                  href="#"
                  title="payment"
                  className="group relative inline-flex items-center justify-center text-base rounded-xl bg-gray-900 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
                  role="button"
                >
                  Learn More
                  <svg
                    className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
                    fill="none"
                    width="10"
                    height="10"
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
      </section>
    </main>
  );
}


const Section1 = ({scrollYProgress}: {scrollYProgress: any} ) => {

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  return (
    <motion.div style={{scale, rotate}} className="sticky top-0 h-screen flex flex-col items-center justify-center w-full z-10">
      <section className="project1 bg-[#fff0dd] relative overflow-hidden py-[100px] text-black w-full h-full flex items-center justify-center">
        <div className="flex flex-row items-center justify-between gap-10 max-w-[1440px] m-auto">
          <div className="w-[50%] h-full flex flex-col justify-center items-start gap-5">
            <MaskText
              styles={{ 
                maskText: "text-8xl font-sans font-bold leading-[1.2em]",
                lineMask: "overflow-hidden",
              }}
              title="Project1"
            />
            <p className="text-[20px] font-sans font-normal">Implementing ambitious visions by unraveling the most exciting version of your brand. Implementing ambitious visions by unraveling the most exciting version of your brand. Implementing ambitious visions by unraveling the most exciting version of your brand.</p>
            <div className="relative inline-flex items-center justify-center gap-4 mt-[15px] group">
              <div
                className="absolute inset-0 duration-1000 opacity-60 transitiona-all bg-gradient-to-r from-[#ff5a35c2] to-white rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200">
              </div>
                <a
                  href="#"
                  title="payment"
                  className="group relative inline-flex items-center justify-center text-base rounded-xl bg-gray-900 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
                  role="button"
                >
                  Learn More
                  <svg
                    className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
                    fill="none"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    aria-hidden="true"
                  >
                    <path className="transition opacity-0 group-hover:opacity-100" d="M0 5h7"></path>
                    <path className="transition group-hover:translate-x-[5px]" d="M1 1l4 4-4 4"></path>
                  </svg>
                </a>
            </div>
          </div>
          <div className="w-[50%] h-full relative">
            <Image
              src="/67b5fd508a980a86eedb2cad_home.png"
              width={300}
              height={100}
              quality={100}
              alt="Project 1 Image"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
    </motion.div>
  )
}

const Section2 = ({scrollYProgress}: {scrollYProgress: any} ) => {

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 0])
  return (
    <motion.div style={{scale, rotate}} className="sticky top-0 h-screen flex flex-col items-center justify-center w-full z-20">
      <section className="project1 bg-[#181818] relative overflow-hidden py-[100px] text-white w-full h-full flex items-center justify-center">
        <div className="flex flex-row items-center justify-between gap-10 max-w-[1440px] m-auto">
          <div className="w-[50%] h-full flex flex-col justify-center items-start gap-5">
            <MaskText
              styles={{ 
                maskText: "text-8xl font-sans font-bold leading-[1.2em]",
                lineMask: "overflow-hidden",
              }}
              title="Project2"
            />
            <p className="text-[20px] font-sans font-normal">Implementing ambitious visions by unraveling the most exciting version of your brand. Implementing ambitious visions by unraveling the most exciting version of your brand. Implementing ambitious visions by unraveling the most exciting version of your brand.</p>
            <div className="relative inline-flex items-center justify-center gap-4 mt-[15px] group">
              <div
                className="absolute inset-0 duration-1000 opacity-60 transitiona-all bg-gradient-to-r from-[#ff5a35c2] to-white rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200">
              </div>
                <a
                  href="#"
                  title="payment"
                  className="group relative inline-flex items-center justify-center text-base rounded-xl bg-gray-900 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
                  role="button"
                >
                  Learn More
                  <svg
                    className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
                    fill="none"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    aria-hidden="true"
                  >
                    <path className="transition opacity-0 group-hover:opacity-100" d="M0 5h7"></path>
                    <path className="transition group-hover:translate-x-[5px]" d="M1 1l4 4-4 4"></path>
                  </svg>
                </a>
            </div>
          </div>
          <div className="w-[50%] h-full relative">
            <Image
              src="/67b5fd508a980a86eedb2cad_home.png"
              width={300}
              height={100}
              quality={100}
              alt="Project 1 Image"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
    </motion.div>
  )
}

const Section3 = ({scrollYProgress}: {scrollYProgress: any} ) => {

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0])
  return (
    <motion.div style={{scale, rotate}} className="sticky top-0 h-screen flex flex-col items-center justify-center w-full z-30">
      <section className="project1 bg-[#FF5935] relative overflow-hidden py-[100px] text-black w-full h-full flex items-center justify-center">
        <div className="flex flex-row items-center justify-between gap-10 max-w-[1440px] m-auto">
          <div className="w-[50%] h-full flex flex-col justify-center items-start gap-5">
            <MaskText
              styles={{ 
                maskText: "text-8xl font-sans font-bold leading-[1.2em]",
                lineMask: "overflow-hidden",
              }}
              title="Project3"
            />
            <p className="text-[20px] font-sans font-normal">Implementing ambitious visions by unraveling the most exciting version of your brand. Implementing ambitious visions by unraveling the most exciting version of your brand. Implementing ambitious visions by unraveling the most exciting version of your brand.</p>
            <div className="relative inline-flex items-center justify-center gap-4 mt-[15px] group">
              <div
                className="absolute inset-0 duration-1000 opacity-60 transitiona-all bg-gradient-to-r from-[#ff5a35c2] to-white rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200">
              </div>
                <a
                  href="#"
                  title="payment"
                  className="group relative inline-flex items-center justify-center text-base rounded-xl bg-gray-900 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
                  role="button"
                >
                  Learn More
                  <svg
                    className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
                    fill="none"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    aria-hidden="true"
                  >
                    <path className="transition opacity-0 group-hover:opacity-100" d="M0 5h7"></path>
                    <path className="transition group-hover:translate-x-[5px]" d="M1 1l4 4-4 4"></path>
                  </svg>
                </a>
            </div>
          </div>
          <div className="w-[50%] h-full relative">
            <Image
              src="/67b5fd508a980a86eedb2cad_home.png"
              width={300}
              height={100}
              quality={100}
              alt="Project 1 Image"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export function MaskText({ styles, title }: { styles: any, title: string }) {

  const body = useRef(null);
  const isInView = useInView(body, {once: true, margin: "0px 0px -10% 0px"})

  const animation = {
    initial: {y: "100%"},
    enter: (i: number) => ({y: "0", transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1],  delay: 0.075 * i}})
  }

  return(
    <div ref={body} className={styles.maskText}>
      <div className={styles.lineMask}>
        <motion.p custom={0} className="m-0" variants={animation} initial="initial" animate={isInView ? "enter" : ""}>
          {title}
        </motion.p>
      </div>
    </div>
  )
}