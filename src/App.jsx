import { useState } from 'react'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import WorkExp from './components/WorkExp'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'

function App() {

  return (
    <>
    <Navbar/>
    <HomePage/>
    <WorkExp/>
    <AboutMe/>
    {/* <Projects/> */}
    </>
  )
}

export default App
