import Header from "../Components/Header"
import { motion } from "motion/react"

const Hero = () => {
    return (
        <section id="#hero" className="w-full bg-[url('/Images/hero.png')]">
            <Header />
            <div className="relative w-full h-screen mx-auto">
                <div className="absolute inset-0 top-[90px] max-w-7xl mx-auto flex flex-row items-start gap-5 sm:px-16 px-6">
                    <div className="flex flex-col justify-center items-center mt-5">
                        <div className="w-5 h-5 rounded-full bg-[#915eff]" />
                        <div className="w-1 sm:h-80 h-40 g2" />
                    </div>
                    <div>
                        <h1 className="HeadText font-Lobster">
                            I'm
                            <span className="text-[#915eff] ml-5 font-Lobster">Mohamed</span>
                        </h1>
                        <p className="SubText font-Comic">I enjoy web development, I use tech stacks like MERN and PERN, I enjoy using 3D Visuals and creating Modern User Interfaces</p>
                        <img src="/Images/main.png" alt="hero" className="w-[20rem]" />
                    </div>
                </div>
                <div className="absolute top-[88vh] w-full flex justify-center items-center">
                    <a href="#about">
                        <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2">
                            <motion.div
                                className="w-3 h-3 rounded-full bg-white mb-1"
                                animate = {{
                                    y: [0, 24, 0]
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    repeatType: 'loop'
                                }}
                            />
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero