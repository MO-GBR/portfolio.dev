import { motion } from "motion/react"
import { slideIn } from "../Utils/Motion"
import PlanetCanvas from "../Components/Canvas/Planet"
import ContactForm from "../Components/Form"

const Contact = () => {
    return (
        <section
            id="contact"
            className="w-full overflow-hidden Flex_Center min-h-screen max-md:flex-col"
        >
            <motion.div
                variants={slideIn({ direction: "left", type: "tween", delay: 0.2, duration: 1})}
                initial="hidden"
                whileInView="show"
                className="h-[60vh] w-full"
            >
                <PlanetCanvas />
            </motion.div>
            <motion.div
                variants={slideIn({ direction: "right", type: "tween", delay: 0.2, duration: 1})}
                initial="hidden"
                whileInView="show"
                className="h-fit w-full my-5 Flex_Center"
            >
                <ContactForm />
            </motion.div>
        </section>
    )
}

export default Contact