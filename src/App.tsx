import Nav from "./components/Nav";
import Hero from "./components/Hero";
import "./styles/nav.css"
import "./styles/hero.css"
import "./styles/projects.css"
import "./styles/particles.css"
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticleAnimation from "./components/ParticleAnimation";

function App() {
 
  return(
    <div>
      <div className="fixed z-0">
        <ParticleAnimation />
      </div>
      <div className="relative z-50">
        <Nav />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
      
    </div>
  )
}

export default App
