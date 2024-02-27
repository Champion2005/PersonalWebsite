import './App.css'

import { Header } from './components/header/Header'
import { AboutMe } from './components/body/AboutMe'
import { TechExperience } from './components/body/TechExperience'
import { Projects } from './components/body/Projects'

function App() {

  return (
    <>
      <Header />
      <AboutMe />
      <TechExperience />
      <Projects />
    </>
  )
}

export default App
