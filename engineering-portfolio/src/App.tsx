import Navbar from "./components/Navbar"
import ParallaxScroll from "./components/ParallaxScroll"
import Education from "./pages/Education"
import Experience from "./pages/Experience"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"
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
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
