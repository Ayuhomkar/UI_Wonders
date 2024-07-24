import React from 'react'
import pic from '../assets/coding-2.jpg'
import project3 from '../assets/coding-2.jpg'
import portfolio from '../assets/portfolio.png'
import eduhub from '../assets/Eduhub.png'
import Trata from '../assets/Trata.png'
import rover from '../assets/rover.jpg'


function Projects() {
    const project = [

        {
            img: portfolio,
            type: 'Portfolio',
            title: 'UI Wonders',
            role: 'Developer',
            tech: ["ReactJs", "MongoDB", "ExpressJS", "NodeJS", "Tailwind-CSS"],
            date: '2024'
        },

        {
            img: eduhub,
            type: 'Web development',
            title: 'Edu-Hub',
            role: 'Frontend development lead',
            tech: ["ReactJs", "MongoDB", "MERN stack", "Tailwind-CSS", "Figma","Socket.io"],
            date: '2024'
        },

        {
            img: Trata,
            type: 'AI-ML, IoT',
            title: 'Trata (Patented)',
            role: 'App frontend developer, embedded system dev',
            tech: ["ML", "Android", "Iot", "Firebase"],
            date: '2023'
        },

        {
            img: rover,
            type: 'IoT, Python',
            title: 'WallE Rover',
            role: 'Website development',
            tech: ["Python", "Streamlite", "IoT sensors", "Embeded systems"],
            date: '2022'
        }

    ]


    return (

        <div className='relative flex-wrap w-[100%] h-[80vh] bg-purple-100  flex backdrop-blur-lg flex-row items-center max-[650px]:h-fit max-[650px]:flex-col max-[650px]:justify-center font-neuton '>

            <h1 className='relative w-[100%] h-fit font-medium text-center text-[rgb(30,27,75)] text-6xl cursor-pointer max-[650px]:py-6'>My Projects</h1>

            <div className='relative flex-wrap flex-row w-full h-[80vh]   flex   items-center justify-around max-[650px]:flex-row max-[650px]:flex-wrap max-[650px]:h-fit max-[650px]:gap-5 '>

                {/* Project cards */}
               
                {
                    project.map((obj) => {
                        return (
                            <div className="relative group  cursor-pointer group overflow-hidden text-gray-50 h-[60%] w-[20%] rounded-2xl hover:duration-700 duration-700 max-[650px]:w-[80%] max-[650px]:h-[53vh]  ">
                                <div className="w-full h-full text-gray-800" style={{ backgroundImage: `url(${obj.img})`, backgroundSize: 'cover' }}>
                                    <div className="flex flex-row justify-between">
                                    </div>
                                </div>
                                <div className="absolute bg-gray-50 -bottom-[40%] w-full p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
                                    <span className="text-cyan-600 font-bold text-xl">{obj.type}</span>
                                    <span className="text-blue-950 font-bold text-3xl">{obj.title}</span>
                                    <p className="text-slate-900">Role:{obj.role}</p>
                                    <div className='relative w-full h-fit flex flex-row items-center flex-wrap gap-[2%]'>
                                        {
                                            obj.tech.map((t)=> {return <p className='text-slate-50 bg-slate-900 px-[2%] rounded-lg m-[1%]'>{t}</p> } )
                                        }

                                    </div>
                                    <div className='flex flex-row w-full h-fit items-center  gap-24 text-slate-900'>
                                        <h1>
                                            <i className="ri-calendar-check-line "></i> {obj.date}
                                        </h1>
                                        <h1 className='flex flex-row items-center hover:text-cyan-500 '>Show project <i className="ri-separator text-3xl font-thin pt-[5%] pl-1 "></i>
                                        </h1>
                                    </div>
                                </div>
                            </div>

                        )
                    })

                }



            </div>

        </div>
    )
}

export default Projects