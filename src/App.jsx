import { useState } from 'react'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import WorkExp from './components/WorkExp'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Skills from './components/Skills'
import ProjectDetails from './components/ProjectDetails'
import portfolio from './assets/portfolio.png'
import { Routes, Route } from 'react-router-dom'



function App() {

  const [projectId, setprojectId] = useState(0);

  const projects = [

    {
      img: portfolio,
      type: 'Portfolio',
      title: 'UI Wonders',
      role: 'Developer',
      tech: ["ReactJs", "MongoDB", "ExpressJS", "NodeJS", "Tailwind-CSS"],
      date: '2024',
      link: 'https://github.com/Ayuhomkar/UI_Wonders/tree/main',
      description:
        "UI Wonders is a responsive personal portfolio website designed to showcase my projects, skills, and experience. The website features a modern and sleek design, utilizing ReactJS for the dynamic user interface and Tailwind CSS for styling. The backend is powered by MongoDB, ExpressJS, and NodeJS, ensuring efficient data management and communication. This project demonstrates my ability to create aesthetically pleasing and functional web applications, adhering to mobile-first design principles to provide an optimal viewing experience across various devices."
      ,
      points: [
        "Technologies Used: ReactJS, MongoDB, ExpressJS, NodeJS, Tailwind CSS",
        "Role: Developer",
        "Implemented RESTful APIs for seamless data handling between frontend and backend",
        "Followed best practices for code organization and maintainability",
        "Hosted on GitHub for source code sharing and collaboration"
      ]
    },

    
    {
      img: portfolio,
      type: 'Web dev',
      title: 'hahahahah',
      role: 'me my self and I',
      tech: ["ReactJs", "MongoDB", "ExpressJS", "NodeJS", "Tailwind-CSS"],
      date: '2024',
      link: 'https://github.com/Ayuhomkar/UI_Wonders/tree/main',
      description:
        "UI Wonders is a responsive personal portfolio website designed to showcase my projects, skills, and experience. The website features a modern and sleek design, utilizing ReactJS for the dynamic user interface and Tailwind CSS for styling. The backend is powered by MongoDB, ExpressJS, and NodeJS, ensuring efficient data management and communication. This project demonstrates my ability to create aesthetically pleasing and functional web applications, adhering to mobile-first design principles to provide an optimal viewing experience across various devices."
      ,
      points: [
        "Technologies Used: ReactJS, MongoDB, ExpressJS, NodeJS, Tailwind CSS",
        "Role: Developer",
        "Implemented RESTful APIs for seamless data handling between frontend and backend",
        "Followed best practices for code organization and maintainability",
        "Hosted on GitHub for source code sharing and collaboration"
      ]
    }


  ]

  const toggleproject = (id) => {
    setprojectId(id)
    console.log(id)
  }


  return (
    <>
      <Navbar />
      <Routes>
        <Route element={  <>
        <HomePage />
        <WorkExp />
        <AboutMe />
        <Projects toggleproject={toggleproject} />
        <Skills />
        </>
      } path='/'/>
        
       
        <Route element={<ProjectDetails project={projects[projectId]} />} path='/projectDetail' />
      </Routes>
    </>
  )
}

export default App
