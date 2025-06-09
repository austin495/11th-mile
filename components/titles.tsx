import React, { useRef } from 'react'
import { useScroll, motion, useTransform, useMotionTemplate } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  speed: number;
}

interface TitlesProps {
  data: Project[];
  setSelectedProject: (index: number | null) => void;
}

interface TitleProps {
  data: Project & { i: number };
  setSelectedProject: (index: number | null) => void;
}

export default function Titles( { data, setSelectedProject }: TitlesProps ) {

  return (
    <div className="w-full border-t border-solid border-[#b8ac9940]">
        {
            data.map( (project: Project, i: number) => {
                return <Title key={i} data={{...project, i}} setSelectedProject={setSelectedProject}/>
            })
        }
    </div>
  )
}

function Title( { data, setSelectedProject }: TitleProps ) {

    const { title, speed, i } = data;
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', `${25 / speed}vw end`]
    })

    const clipProgress = useTransform(scrollYProgress, [0,1], [100, 0]);
    const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

    return (
        <div ref={container} className="border-b border-solid border-[#b8ac9940] cusrsor-default relative z-2">
            <div 
                className="title-wraper inline-block pl-[10%]"
                onMouseOver={() => {setSelectedProject(i)}}
                onMouseLeave={() => {setSelectedProject(null)}}
            >
                <motion.p style={{clipPath: clip}} className="font-sans tracking-tight">
                    {title}
                </motion.p>
                <p className="font-sans tracking-tight">
                    {title}
                </p>
            </div>
        </div>
    )
}