import Footer from "./Components/Footer"
import About from "./Sections/About"
import Certifications from "./Sections/Certifications"
import Contact from "./Sections/Contact"
import Hero from "./Sections/Hero"
import Projects from "./Sections/Projects"
import Skills from "./Sections/Skills"

const App = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <Contact/>
      <Footer />
    </div>
  )
}

export default App