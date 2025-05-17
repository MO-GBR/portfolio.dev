import { motion } from "motion/react";
import { BADGES } from "../Constants";
// import type { ProjectType } from "../Types"
import { zoomIn } from "../Utils/Motion";

// { title, description, img, link, tags }: ProjectType
type TechKeys = keyof typeof BADGES;

const Project = () => {
    return (
        <motion.div variants={zoomIn({ delay: 0.2, duration: 0.5 })} initial="hidden" whileInView="show" className="Project">
            <div className="flex flex-row-reverse items-start justify-start">
                <img src="/Images/hero.png" alt="project" className="w-[450px] rounded-t-2xl" />
                <a href="#" target="_blank" className="g1 p-2 m-2 rounded-full absolute">
                    <img src="/Icons/github.png" alt="github" className="w-[30px]" />
                </a>
            </div>
            <div className="text-3xl font-bold">Nike Landing Page</div>
            <div className="p-2 w-[400px] bg-[#050816] rounded-2xl m-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
            <div className="flex items-center justify-start gap-2 w-full">
                {
                    ['NextJS', 'React', 'GraphQL'].map((tech: TechKeys, index) => {
                        const bg_color: string = BADGES[tech];
                        return (
                            <div className={`Badge ${bg_color}`} key={index}>{tech}</div>
                        )
                    })
                }
            </div>
        </motion.div>
    )
}

export default Project