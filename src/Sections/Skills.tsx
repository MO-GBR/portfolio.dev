import Ball from "../Components/Canvas/Ball"
import HeadTitle from "../Components/HeadTitle"
import { TECHNOLOGIES } from "../Constants"

const Skills = () => {
    return (
        <>
            <HeadTitle head="My Skills" subHead="Here are some of my skills" />
            <div className='flex flex-row flex-wrap justify-center gap-10'>
                {
                    TECHNOLOGIES.map((tech, index) => (
                        <div key={index} className='w-fit'>
                            <Ball img={tech} />
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Skills