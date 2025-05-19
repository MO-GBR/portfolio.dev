import { motion, useScroll, useTransform } from "motion/react"
import { NAV_LINKS } from "../Constants"
import { useState } from "react";

const Header = () => {
    const [ toggle, setToggle ] = useState(false);
    const { scrollY } = useScroll();
    const background = useTransform(scrollY, [0, 1000], ['transparent', '#050816'])
    return (
        <motion.header style={{
            backgroundColor: background
        }}>
            <nav className="w-full max-md:hidden">
                <ul className="Flex_Around w-full">
                    {
                        NAV_LINKS.map((link, index) => (
                            <li key={index}>
                                <a href={link.href} className="Nav_Link">{link.title}</a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
            <div className="w-[90%] items-center justify-end hidden max-md:flex" onClick={() => setToggle(!toggle)}>
                <div className="p-1 border border-[#2ef2ff] rounded-full w-fit cursor-pointer">
                    <img src="/Icons/magic.svg" alt="menu" />
                </div>
            </div>
            {
                toggle && (
                    <nav className="w-[90%] absolute top-15 bg-violet-950 rounded-2xl">
                        <ul className="Flex_Around gap-5 p-2 w-full flex-col">
                            {
                                NAV_LINKS.map((link, index) => (
                                    <li key={index}>
                                        <a href={link.href} className="Nav_Link">{link.title}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                )
            }
        </motion.header>
    )
}

export default Header