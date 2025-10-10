import { useState } from 'react'

import Navbar from './components/Navbar.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Skills />
      <Contact/>
    </>
  )
}

export default App
