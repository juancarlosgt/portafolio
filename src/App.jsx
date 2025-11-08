import { useState } from 'react'

import Navbar from './components/Navbar.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Projects from './components/Projects.jsx'
import Hero from './components/Hero.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact/>
    </>
  )
}

export default App
