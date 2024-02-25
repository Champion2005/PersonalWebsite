import { useState } from 'react'
import './App.css'

import { Header } from './components/header/Header'
import { AboutMe } from './components/body/AboutMe'
import { TechExperience } from './components/body/TechExperience'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <AboutMe />
      <TechExperience />
    </>
  )
}

export default App
