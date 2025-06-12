'use client';
import { useScroll, useTransform, motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import dynamic from "next/dynamic";
import SmoothScroll from "@/components/smoothScroll";
import Image from "next/image";
import Lenis from "lenis";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { BackgroundLines } from "@/components/background-lines";
import React from "react";
import { GoogleGeminiEffect } from "@/components/google-gemini-effect";
import Services from "@/components/services";
import Modal from "@/components/modal";
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { InfiniteMovingCards } from '@/components/infinite-moving-cards';

const Earth = dynamic(() => import('@/components/earth'), {
  ssr: false,
  loading: () => <img className="h-full" src="/placeholder.png"></img>
})

interface Testimonial {
  id: number;
  logo: string;
  text: string;
  name: string;
  title: string;
  image: string;
  video: string;
}

interface ModalState {
  active: boolean;
  index: number;
}

interface Service {
  title: string;
  discription: string;
  src: string;
  color: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    logo: "/testimonial-logo.svg",
    text: "Using testing to find out what improves user outcomes the most",
    name: "Ken Marks",
    title: "VP of Product Management",
    image: "/olo.44ee0e4e.webp",
    video: "/branding.mp4",
  },
  {
    id: 2,
    logo: "/testimonial-logo.svg",
    text: "How Wise uses measurable observation to build products",
    name: "Hazel Muhtar",
    title: "Director of Product Analytics",
    image: "/olo.44ee0e4e.webp",
    video: "/branding.mp4",
  },
  {
    id: 3,
    logo: "/testimonial-logo.svg",
    text: "Understanding the power of knowing your customer",
    name: "Guy Barkat",
    title: "Product Manager of Growth",
    image: "/olo.44ee0e4e.webp",
    video: "/branding.mp4",
  },
  {
    id: 4,
    logo: "/testimonial-logo.svg",
    text: "Understanding the power of knowing your customer",
    name: "Guy Barkat",
    title: "Product Manager of Growth",
    image: "/olo.44ee0e4e.webp",
    video: "/branding.mp4",
  },
];

const services: Service[] = [
  {
    title: "Branding & Positioning",
    discription: "We define who you are and how you stand out. Through research and strategy, we position your business effectively and create a cohesive brand identity, while ensuring consistency and alignment with your goals.",
    src: "branding.mp4",
    color: "#000000"
  },
  {
    title: "Digital & Physical Product Design",
    discription: "We turn your ideas into products people love. From strategy to UX/UI design for websites, e-commerce, apps, and physical products, we create functional, appealing designs that perform.",
    src: "product-design.mp4",
    color: "#8C8C8C"
  },
  {
    title: "Marketing Strategy & Execution",
    discription: "We create marketing strategies that deliver results. Through targeted campaigns, SEO, CRO, and content marketing, we optimize your presence and engage your audience to grow your business.",
    src: "marketing.mp4",
    color: "#EFE8D3"
  }
]

const testimonialsSec = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
    src: "/google-logo.png",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
    src: "/google-logo.png",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
    src: "/google-logo.png",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
    src: "/google-logo.png",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
    src: "/google-logo.png",
  },
];

export default function Home() {
  const container = useRef<HTMLDivElement | null>(null);
  const container1 = useRef<HTMLDivElement | null>(null);
  const [modal, setModal] = useState<ModalState>({ active: false, index: 0 });
  const [playingVideoId, setPlayingVideoId] = useState<string | number | null>(null);

  const handlePlayVideo = (testimonialId: string | number) => {
    setPlayingVideoId(testimonialId);
  };

  const handleVideoEnded = () => {
    setPlayingVideoId(null);
  };

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
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    const splide = new Splide(".splide", {
      type: "slide",
      perPage: 3,
      gap: "1rem",
      drag: "free",
      focus: "center",
      autoplay: false,
      pauseOnHover: false,
      arrows: false,
      pagination: false,
      cloneStatus: false,
      clone: 0,
    });

    splide.mount();

    return () => {
      splide.destroy();
    };
  }, []);

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
 
  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0.01, 1.2]);

  return (
    <main>
      <section className="h-[100vh] pt-[150px] pb-[50px] mt-[-130px] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full z-[-1]">
          <Image
            src="/11th-mile-black.png"
            alt="Hero Background"
            width={1200}
            height={800}
            className="w-[40%] h-auto object-cover absolute top-30 right-40 max-w-[1300px]"
          />
        </div>
        <div className="flex flex-col h-full max-w-[1300px] m-auto z-1">
          <div className="w-[60%] h-full flex flex-col justify-between items-start gap-10">
            <div className="flex flex-col justify-baseline items-start gap-10 w-full">
              <div className="flex flex-col gap-5 w-[90%]">
                <MaskText
                  styles={{
                    maskText: "text-8xl font-sans font-medium tracking-tight leading-[1.1em] capitalize",
                    lineMask: "overflow-hidden",
                  }}
                  title="We are a digital agency that"
                />

                <MaskText
                  styles={{
                    maskText: "text-7xl",
                    lineMask: "overflow-hidden font-mono font-medium",
                  }}
                  title="Excellence."
                />
              </div>
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

      <section
        ref={container}
        className="relative m-auto h-[200vh] pt-[100px]"
      >
        <div className="sticky top-0 overflow-hidden h-[100vh]">
          <motion.div style={{ scale }} className="w-[100%] h-[100%] px-[150px] top-0 absolute flex items-center justify-center">
            <div className="w-full h-full relative">
              <video
                autoPlay
                loop
                muted
                className="object-cover"
              >
                <source src="/intro.mp4" type="video/mp4" />
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
            <div className="flex items-center justify-center absolute w-full max-w-[1300px] z-1">
              <div className="w-full flex flex-col items-center justify-center">
                {
                  services.map( (project, index) => {
                    return <Services index={index} title={project.title} discription={project.discription} setModal={setModal} key={index}/>
                  })
                }
              </div>
              <Modal modal={modal} services={services}/>
            </div>
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
                  <div className="p-5 bg-white rounded-[20px] shadow-lg h-full flex flex-row items-center">
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
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handlePlayVideo(testimonial.id);
                        }}
                        className="font-sans text-[#FF5935] mt-4 inline-flex items-center"
                      >
                        Watch Video →
                      </a>
                    </div>
                    <div className="testimonial-image w-[50%] h-full relative">
                      {playingVideoId === testimonial.id ? (
                        <video
                          src={testimonial.video}
                          className="w-full h-full object-cover rounded-[20px]"
                          autoPlay
                          onEnded={handleVideoEnded}
                        />
                      ) : (
                        <>
                          <Image
                            src={testimonial.image}
                            alt={`${testimonial.name} image`}
                            width={500}
                            height={50}
                            quality={100}
                            className="w-full h-full object-cover rounded-[20px]"
                          />
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              handlePlayVideo(testimonial.id);
                            }}
                            className="text-white inline-flex items-center bg-[#FF5935] w-[28%] h-[20%] rounded-full justify-center p-[10px] absolute bottom-[20px] left-[30px]"
                          >
                            <svg
                              className="w-full h-full"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-[50px]">
        <div className="max-w-[1300px] m-auto flex flex-col items-center gap-15">
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
            <BackgroundLines className="flex flex-row items-center justify-between gap-x-10 gap-y-10 flex-wrap p-20 bg-[#ffffff0e] border-1 border-[#ffffff54] rounded-[40px] text-[#fff] backdrop:blur-8xl">
              <div className="w-[61%] flex flex-col gap-5 z-1">
                <p className="text-[18px] font-sans font-normal uppercase leading-[1.2em] tracking-wide">Cnsumer Tech</p>
                <p className="text-[38px] font-sans font-normal">Mixpanel enables our product managers and designers to uncover and focus on larger opportunities for product discovery and improvement.</p>
                <p className="text-[18px] font-sans font-normal"><strong>Sid Arora</strong>, Head of Data Products - Analytics and Experimentation</p>
              </div>
              <div className="w-[35%] flex flex-col items-center justify-center z-1">
                <Image
                  src="/google-reviews-logo.svg"
                  alt="Mixpanel Logo"
                  width={200}
                  height={50}
                  className="w-[80%] h-auto"
                />
              </div>
              <div className="w-[100%]">
                <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
                  <InfiniteMovingCards
                    items={testimonialsSec}
                    direction="right"
                    speed="slow"
                  />
                </div>
              </div>
            </BackgroundLines>
          </div>
        </div>
      </section>

      <section className="py-[0px]">
        {/* <div className="call-to-action_main">
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
        </div> */}

        <div
          className="h-[200vh] w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 pb-60 overflow-clip"
          ref={ref}
        >
          <GoogleGeminiEffect
            pathLengths={[
              pathLengthFirst,
              pathLengthSecond,
              pathLengthThird,
              pathLengthFourth,
              pathLengthFifth,
            ]}
          />
        </div>
      </section>

      <section className="pb-[100px]">
        <div className=" max-w-[1300px] m-auto flex flex-row bg-[#ffffff] backdrop-blur-[40px] rounded-[50px]">          
          <div className="w-[40%] flex flex-col gap-10 p-[50px] bg-[#ff5935] rounded-l-[50px]">
            <div className="flex flex-col gap-2">
              <MaskText
                styles={{
                  maskText: "text-[45px] text-[#181818] font-sans font-bold leading-[1.2em]",
                  lineMask: "overflow-hidden",
                }}
                title="let's Discuss Your Project"
              />
              <p className="font-sans font-normal text-[16px] text-[#0000008a]">Let's turn your vision into measurable online results today.</p>
            </div>
            <div>
              <form action="" className="flex flex-row flex-wrap justify-between gap-x-2 gap-y-4">
                <div className="w-[49%] flex flex-col gap-1">
                  <label
                    htmlFor="firstName"
                    className="text-[14px] text-[#000000b9] font-sans font-normal"
                  >
                    First Name
                  </label>
                  <Input 
                    id="firstName"
                    className="text-[#181818] rounded-[5px] border-[#00000059] focus-visible:ring-[0px] focus-visible:border-[#181818] focus-visible:border-[2px] p-[20px]"
                  />
                </div>
                <div className="w-[49%] flex flex-col gap-1">
                  <label
                    htmlFor="lastName"
                    className="text-[14px] text-[#000000b9] font-sans font-normal"
                  >
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    className="text-[#181818] rounded-[5px] border-[#00000059] focus-visible:ring-[0px] focus-visible:border-[#181818] focus-visible:border-[2px] p-[20px]"
                  />
                </div>
                <div className="w-[49%] flex flex-col gap-1">
                  <label
                    htmlFor="email"
                    className="text-[14px] text-[#000000b9] font-sans font-normal"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    className="text-[#181818] rounded-[5px] border-[#00000059] focus-visible:ring-[0px] focus-visible:border-[#181818] focus-visible:border-[2px] p-[20px]"
                  />
                </div>
                <div className="w-[49%] flex flex-col gap-1">
                  <label
                    htmlFor="phone"
                    className="text-[14px] text-[#000000b9] font-sans font-normal"
                  >
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    className="text-[#181818] rounded-[5px] border-[#00000059] focus-visible:ring-[0px] focus-visible:border-[#181818] focus-visible:border-[2px] p-[20px]"
                  />
                </div>
                <div className="w-[100%] flex flex-col gap-1">
                  <label
                    htmlFor="company"
                    className="text-[14px] text-[#000000b9] font-sans font-normal"
                  >
                    Company
                  </label>
                  <Input
                    id="Company"
                    className="text-[#181818] rounded-[5px] border-[#00000059] focus-visible:ring-[0px] focus-visible:border-[#181818] focus-visible:border-[2px] p-[20px]"
                  />
                </div>
                <div className="w-[100%] flex flex-col gap-1">
                  <label
                    htmlFor="message"
                    className="text-[14px] text-[#000000b9] font-sans font-normal"
                  >
                    What Can We Help You?
                  </label>
                  <Textarea
                    id="message"
                    className="text-[#181818] min-h-30 rounded-[5px] border-[#00000059] focus-visible:ring-[0px] focus-visible:border-[#181818] focus-visible:border-[2px] p-[20px]"
                    rows={10}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="relative inline-flex items-center justify-center gap-4 mt-[15px] group">
                    <div
                      className="absolute inset-0 duration-1000 opacity-60 transitiona-all bg-gradient-to-r from-[#ff5a35c2] to-white rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200">
                    </div>
                    <button
                      type="submit"
                      className="group relative inline-flex items-center justify-center text-base rounded-[5px] bg-gray-900 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30 hover:cursor-pointer"
                      role="button"
                    >
                      Submit Now
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
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="w-[60%] p-[50px] flex flex-col justify-center items-center">
            <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1f38FHNWf6DJvNwnvQbbVhhOiQnkPE-P5kRp8y4v8C3RxAz1X2SaBqiAnTx59A5WtYDe06AOfJ?gv=true" width="100%" height="600"></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}


const Section1 = ({ scrollYProgress }: { scrollYProgress: any }) => {

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  return (
    <motion.div style={{ scale, rotate }} className="sticky top-0 h-screen flex flex-col items-center justify-center w-full z-10">
      <section className="project1 bg-[#fff0dd] relative overflow-hidden py-[100px] text-black w-full h-full flex items-center justify-center">
        <div className="flex flex-row items-center justify-between gap-10 max-w-[1300px] m-auto">
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
          <div className="w-[40%] h-[400px] relative">
            <div className="w-full h-full relative">
              <video
                autoPlay
                loop
                muted
                className="object-cover rounded-[20px] h-full w-full"
              >
                <source src="/intro.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

const Section2 = ({ scrollYProgress }: { scrollYProgress: any }) => {

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 0])
  return (
    <motion.div style={{ scale, rotate }} className="sticky top-0 h-screen flex flex-col items-center justify-center w-full z-20">
      <section className="project1 bg-[#181818] relative overflow-hidden py-[100px] text-white w-full h-full flex items-center justify-center">
        <div className="flex flex-row items-center justify-between gap-10 max-w-[1300px] m-auto">
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
          <div className="w-[40%] h-[400px] relative">
            <div className="w-full h-full relative">
              <video
                autoPlay
                loop
                muted
                className="object-cover rounded-[20px] h-full w-full"
              >
                <source src="/product-design.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

const Section3 = ({ scrollYProgress }: { scrollYProgress: any }) => {

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0])
  return (
    <motion.div style={{ scale, rotate }} className="sticky top-0 h-screen flex flex-col items-center justify-center w-full z-30">
      <section className="project1 bg-[#FF5935] relative overflow-hidden py-[100px] text-black w-full h-full flex items-center justify-center">
        <div className="flex flex-row items-center justify-between gap-10 max-w-[1300px] m-auto">
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
          <div className="w-[40%] h-[400px] relative">
            <div className="w-full h-full relative">
              <video
                autoPlay
                loop
                muted
                className="object-cover rounded-[20px] h-full w-full"
              >
                <source src="/branding.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export function MaskText({ styles, title }: { styles: any, title: string }) {

  const body = useRef(null);
  const isInView = useInView(body, { once: true, margin: "0px 0px -10% 0px" })

  const animation = {
    initial: { y: "100%" },
    enter: (i: number) => ({ y: "0", transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i } })
  }

  return (
    <div ref={body} className={styles.maskText}>
      <div className={styles.lineMask}>
        <motion.p custom={0} className="m-0" variants={animation} initial="initial" animate={isInView ? "enter" : ""}>
          {title}
        </motion.p>
      </div>
    </div>
  )
}