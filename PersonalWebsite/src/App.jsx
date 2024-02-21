import { useState } from 'react'
import './App.css'

import { Header } from './components/header/Header'
import { AboutMe } from './components/body/AboutMe'
import { TechSlideshow } from './components/body/TechSlideshow'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <AboutMe />
      <TechSlideshow />
    </>
  )
}

export default App
