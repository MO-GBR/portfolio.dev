import HeadTitle from "../Components/HeadTitle"
import SkillCard from "../Components/SkillCard"
import { SKILLS } from "../Constants"

const About = () => {
    return (
        <section id="about" className="w-full Flex_Center flex-col">
            <HeadTitle head="Who Am I" subHead="Overview" />
            <p className="w-[90%] p-3 text-white">
                I am a self-taught full-stack web developer
                <br />
                I use the most modern technologies out there to create a stunning website that capture atention, make you say WOW! this is a great one.
                <br />
                Here is what makes a website alive modern and clean design, a killer seo and copywriting, using modern tech stack to create it.
                <br />
                Well, I can do all of that.
            </p>
            <div className="w-full Flex_Around my-5">
                <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5">
                    {
                        SKILLS.map((card, index) => (
                            <SkillCard key={index} title={card.title} img={card.img} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default About