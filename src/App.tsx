import Nav from "./components/Nav";
import Hero from "./components/Hero";
import "./styles/nav.css"
import "./styles/hero.css"
import "./styles/projects.css"
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
 
  return(
    <>
      <Nav />
      <Hero />
      <About />
      <Projects />
    </>
  )
}

export default App
