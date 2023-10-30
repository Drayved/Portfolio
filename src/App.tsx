import Nav from "./components/Nav";
import Hero from "./components/Hero";
import "./styles/nav.css"
import "./styles/hero.css"
import "./styles/projects.css"
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
 
  return(
    <div>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
