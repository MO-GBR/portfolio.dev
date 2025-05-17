import HeadTitle from "../Components/HeadTitle"
import Project from "../Components/Project"

const Projects = () => {
    return (
        <section className="w-full flex flex-col">
            <HeadTitle head="Projects" subHead="Here are some projects of mine" />
            <Project />
        </section>
    )
}

export default Projects