import { motion } from "motion/react"
import type { CertificationType } from "../Types"
import { zoomIn } from "../Utils/Motion"

const Certification = ({ img, title, description, link }: CertificationType) => {
    return (
        <motion.div variants={zoomIn({ delay: 0.2, duration: 0.5 })} initial="hidden" whileInView="show" className="Certification">
            <div className="Flex_Center">
                <img src={img} alt="certification" className="w-[450px] rounded-t-2xl" />
                <div className="absolute">
                    <div className="w-full flex items-center justify-end">
                        <a href={link} className="g1 p-2 rounded-full" target="_blank">
                            <img src="/Icons/open.svg" alt="open" />
                        </a>
                    </div>
                    <p className="bg-black/95 p-3 rounded-xl mt-2 max-w-[350px] w-fit max-h-[140px] h-fit opacity-0 hover:opacity-100 max-md:text-sm">{description}</p>
                </div>
            </div>
            <div className="p-3 text-center font-bold">
                {title}
            </div>
        </motion.div>
    )
}

export default Certification