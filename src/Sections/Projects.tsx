import HeadTitle from "../Components/HeadTitle"
import Project from "../Components/Project"
import { PROJECTS } from "../Constants"

const Projects = () => {
    return (
        <section id="projects" className="w-full flex flex-col">
            <HeadTitle head="Projects" subHead="Here are some projects of mine" />
            <div className="Flex_Center w-full">
                <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
                    {
                        PROJECTS.map((project, index) => (
                            <Project key={index} {...project}/>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Projects