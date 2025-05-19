import HeadTitle from "../Components/HeadTitle"
import Skill from "../Components/Skill"
import { TECHNOLOGIES } from "../Constants"

const Skills = () => {
    return (
        <section id="skills">
            <HeadTitle head="My Skills" subHead="Here are some of my skills" />
            <div className='flex flex-row flex-wrap justify-center gap-10'>
                {
                    TECHNOLOGIES.map((tech, index) => (
                        <div key={index} className='w-fit'>
                            <Skill img={tech.img} name={tech.name} />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Skills