import React from 'react'
import portfolio from '../assets/portfolio.png'
import eduhub from '../assets/Eduhub.png'
import Trata from '../assets/Trata.png'
import rover from '../assets/rover.jpg'
import { Element } from 'react-scroll'
import { useNavigate } from 'react-router-dom'


function Projects(props) {

    const navi=useNavigate()


    const project = [

        {
            img: portfolio,
            type: 'Portfolio',
            title: 'UI Wonders',
            role: 'Developer',
            tech: ["ReactJs", "MongoDB", "ExpressJS", "NodeJS", "Tailwind-CSS"],
            date: '2024',
            link:'https://github.com/Ayuhomkar/UI_Wonders/tree/main'
        },

        {
            img: eduhub,
            type: 'Web development',
            title: 'Edu-Hub',
            role: 'Frontend development lead',
            tech: ["ReactJs", "MongoDB", "MERN stack", "Tailwind-CSS", "Figma", "Socket.io"],
            date: '2024',
            link:'https://github.com/Ayuhomkar/Edu-Hub.git'
        },

        {
            img: Trata,
            type: 'AI-ML, IoT',
            title: 'Trata (Patented)',
            role: 'App frontend developer, embedded system dev',
            tech: ["ML", "Android", "Iot", "Firebase"],
            date: '2023',
            link:'https://youtu.be/7YcE06znHCg?feature=shared'
        },

        {
            img: rover,
            type: 'IoT, Python',
            title: 'WallE Rover',
            role: 'Website development',
            tech: ["Python", "Streamlite", "IoT sensors", "Embeded systems"],
            date: '2022',
            link:'https://github.com/Ayuhomkar/WallE-rover'
        }

    ]

    function changeProject(){
        navi('/projectDetail')
        
    }


    return (

        <Element name='Projects'>

            <div className='relative flex-wrap w-[100%] h-[80vh] bg-purple-100  flex backdrop-blur-lg flex-row items-center max-[650px]:h-fit max-[650px]:flex-col max-[650px]:justify-center font-neuton '>

                <h1 className='relative w-[100%] h-fit font-medium text-center text-[rgb(30,27,75)] text-6xl cursor-pointer max-[650px]:py-6'>My Projects</h1>

                <div className='relative flex-wrap flex-row w-full h-[80vh]   flex   items-center justify-around max-[650px]:flex-row max-[650px]:flex-wrap max-[650px]:h-fit max-[650px]:gap-5 '>

                    {/* Project cards */}

                    {
                        project.map((obj,idx) => {
                            return (
                                <div className="relative group  cursor-pointer group overflow-hidden text-gray-50 h-[60%] w-[20%] rounded-2xl hover:duration-700 duration-700 max-[650px]:w-[80%] max-[650px]:h-[52vh]  ">
                                    <div className="w-full h-full text-gray-800" style={{ backgroundImage: `url(${obj.img})`, backgroundSize: 'cover' }}>
                                        <div className="flex flex-row justify-between">
                                        </div>
                                    </div>
                                    <div className="absolute bg-gray-50 -bottom-[40%] w-full p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
                                        <span className="text-cyan-600 font-bold text-xl max-[650px]:text-4xl max-[650px]:flex max-[650px]:flex-row max-[650px]:items-center max-[650px]:justify-between ">{obj.type}    <i className="ri-arrow-down-s-line hidden max-[650px]:block "></i> </span>
                                        <span className="text-blue-950 font-bold text-3xl">{obj.title}</span>
                                        <p className="text-slate-900">Role:{obj.role}</p>
                                        <div className='relative w-full h-fit flex flex-row items-center flex-wrap gap-[2%]'>
                                            {
                                                obj.tech.map((t) => { return <p className='text-slate-50 bg-slate-900 px-[2%] rounded-lg m-[1%]'>{t}</p> })
                                            }

                                        </div>
                                        <div className='flex flex-row w-full h-fit items-center  gap-24 text-slate-900'>
                                            <h1>
                                                <i className="ri-calendar-check-line "></i> {obj.date}
                                            </h1>
                                            < a onClick={()=>{changeProject(); props.toggleproject(idx)}} className='flex flex-row items-center hover:text-cyan-500 '>Show project <i className="ri-separator text-3xl font-thin pt-[5%] pl-1 "></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            )
                        })

                    }



                </div>

            </div>

        </Element>
    )
}

export default Projects