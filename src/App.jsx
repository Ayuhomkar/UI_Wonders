import { useState } from 'react'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import WorkExp from './components/WorkExp'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Skills from './components/Skills'
import ProjectDetails from './components/ProjectDetails'



function App() {

  return (
    <>
    <Navbar/>
    
    <HomePage/>
    <WorkExp/>
    <AboutMe/>
    <Projects/>
    <Skills/>
    {/* <ProjectDetails/> */}
    </>
  )
}

export default App
