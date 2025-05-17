import { motion } from "motion/react"
import type { SkillCardType } from "../Types"

const SkillCard = ({ title, img }: SkillCardType) => {
    return (
        <motion.div initial={{
            scale: 1
        }} whileHover={{
            scale: 1.1
        }} className="Skill_Card">
            <img src={img} alt={title} className="w-[7rem]" />
            <p className="text-white font-bold">{title}</p>
        </motion.div>
    )
}

export default SkillCard