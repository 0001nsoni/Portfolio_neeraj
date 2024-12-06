
import "./app.scss"
import Hero from "./components/hero/Hero"
import NavBar from './components/navbar/NavBar'

import Parallax from "./components/parallax/Parallax"
import About from "./components/About/About"
import Projects from "./components/projects/Projects"
import Contact from "./components/contact/Contact"
import Cursor from "./components/cursor/Cursor"
import Skills from "./components/skills/Skills"
// import Education from "./components/education/Education"


function App() {


  return (
    <>
<Cursor/>
      <section id="Homepage"><NavBar /> 
      <Hero />
      </section>
      <section id="Parallax1" ><Parallax type="services" /></section>
      <section id="About"><About/></section>
      <section id="Parallax"><Parallax type="portfolio" /></section>
      <Projects id="Project" />
      
      <section id="Skills"><Skills/></section> 
      {/* <section id="Education">Education</section> */}
      <section id="Contact"><Contact/></section>

       {/* <Test/>  */}
    </>
  )
}

export default App
