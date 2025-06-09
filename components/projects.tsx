'use client';
import { useState } from 'react';
import Descriptions from './descriptions';
import Titles from './titles';

const data = [
    {
        title: "BRANDING",
        description: "We define who you are and how you stand out. Through research and strategy, we position your business effectively and create a cohesive brand identity, while ensuring consistency and alignment with your goals.",
        speed: 0.5
    },
    {
        title: "PRODUCT DESIGN",
        description: "We turn your ideas into products people love. From strategy to UX/UI design for websites, e-commerce, apps, and physical products, we create functional, appealing designs that perform.",
        speed: 0.5
    },
    {
        title: "MARKETING STRATEGY",
        description: "We create marketing strategies that deliver results. Through targeted campaigns, SEO, CRO, and content marketing, we optimize your presence and engage your audience to grow your business.",
        speed: 0.67
    },
    {
        title: "WEB DEVELOPMENT",
        description: "We build websites that are fast, secure, and scalable. Our team specializes in front-end and back-end development, ensuring your site is user-friendly and optimized for performance.",
        speed: 0.67
    },
    {
        title: "CONTENT CREATION",
        description: "We create compelling content that resonates with your audience. From copywriting to video production, we tell your story in a way that engages and converts, enhancing your brand's visibility.",
        speed: 0.67
    }
]

export default function Projects() {

    const [selectedProject, setSelectedProject] = useState<number | null>(null);
    
    return (
        <div className="absolute z-1 w-full">
            <Titles data={data} setSelectedProject={setSelectedProject} />
            <Descriptions data={data} selectedProject={selectedProject} />
        </div>
    )
}