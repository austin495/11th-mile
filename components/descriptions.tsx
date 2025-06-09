import React from 'react'

interface Project {
  title: string;
  description: string;
  speed: number;
}

interface DescriptionsProps {
  data: Project[];
  selectedProject: number | null;
}

export default function Descriptions( { data, selectedProject }: DescriptionsProps ) {

    const crop = (string:  string, maxLength: number) => {
        return string.substring(0, maxLength);
    }
    
    return (
        <div className="absolute top-[3px] h-full w-full z-2 pointer-events-none">
            {
                data.map( (project: Project, i: number) => {
                    const { title, description } = project;
                    return (
                    <div 
                        key={i} 
                        className="bg-[#FF5935] flex justify-center items-center gap-5 clip"
                        style={{clipPath: selectedProject == i ? "inset(0 0 0)" : "inset(50% 0 50%"}}
                    >
                        <p>{title}</p>
                        <p>{description}</p>
                    </div>
                    )
                })
            }
        </div>
    )
}