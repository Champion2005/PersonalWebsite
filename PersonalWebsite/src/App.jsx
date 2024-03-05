import './App.css'

import { Header } from './components/header/Header'
import { AboutMe } from './components/body/AboutMe'
import { TechExperience } from './components/body/TechExperience'
import { Projects } from './components/body/Projects'
import { Footer } from './components/footer/Footer'

function App() {

  return (
    <>
      <Header />
      <AboutMe />
      <TechExperience />
      <Projects />
      <Footer />
    </>
  )
}

export default App
