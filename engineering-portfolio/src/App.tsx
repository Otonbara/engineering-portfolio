import Navbar from "./components/Navbar"
import ParallaxScroll from "./components/ParallaxScroll"
import Education from "./pages/Education"
import Experience from "./pages/Experience"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Publications from "./pages/Publications"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import "./App.css"

function App() {

  return (
    <>
      <Navbar />
      <ParallaxScroll />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Publications />
      <Contact />
      <Footer />
    </>
  )
}

export default App
