import { motion } from "motion/react";
import { BADGES } from "../Constants";
import type { ProjectType } from "../Types"
import { zoomIn } from "../Utils/Motion";

type TechKeys = keyof typeof BADGES;

const Project = ({ title, description, img, githubLink, tags }: ProjectType) => {
    return (
        <motion.div variants={zoomIn({ delay: 0.2, duration: 0.5 })} initial="hidden" whileInView="show" className="Project">
            <div className="flex flex-row-reverse items-start justify-start">
                <img src={img} alt="project" className="w-[450px] rounded-t-2xl" />
                <a href={githubLink} target="_blank" className="g1 p-2 m-2 rounded-full absolute">
                    <img src="/Icons/github.png" alt="github" className="w-[30px]" />
                </a>
            </div>
            <div className="text-3xl font-bold">{title}</div>
            <div className="p-2 w-[400px] bg-[#050816] rounded-2xl m-2">{description}</div>
            <div className="Flex_Center w-full">
                <div className="grid grid-cols-3 gap-2">
                    {
                        tags.map((tech: TechKeys, index) => {
                            const bg_color: string = BADGES[tech];
                            return (
                                <div className={`Badge ${bg_color}`} key={index}>{tech}</div>
                            )
                        })
                    }
                </div>
            </div>
        </motion.div>
    )
}

export default Project