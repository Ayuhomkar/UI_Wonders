import React, { useState, useEffect } from 'react'
import { FlipWords } from './flip-words'
import './blobs.css'
import Ayusha from '../assets/pic-5.jpg'



function HomePage() {

    const words = ['Web Developer', 'UI/UX Designer', 'Frontend Developer', 'MERN Developer']

    const [circle1Position, setCircle1Position] = useState({ x: 100, y: 400 });
    const [circle2Position, setCircle2Position] = useState({ x: 150, y: 300 });





    return (

        // Main div


        <div className='relative w-[100vw] h-fit overflow-x-hidden max-[650px]:flex max-[650px]:flex-col overflow-y-hidden font-neuton'>


            {/* background circle div */}


            <div
                className="absolute top-[-50%] left-[50%] h-full w-full bg-gradient-to-r from-[#f179ad] to-[#c667f6] blur-lg -z-10"
                style={{
                    clipPath: `circle(${circle1Position.x}px at ${circle1Position.x}px ${circle1Position.y}px)`,
                    animation: 'move 10s linear infinite',
                    transform: 'scale(0.5)'
                }}
            />
            <div
                className="absolute top-[30%] left-[15%] h-full w-full bg-gradient-to-r from-[#f179ad] to-[#c667f6] blur-lg -z-10 "
                style={{
                    clipPath: `circle(${circle2Position.x}px at ${circle2Position.x}px ${circle2Position.y}px)`,
                    animation: 'move 5s linear infinite',
                }}
            />


            {/* hello first front div */}

            < div className='relative flex-wrap w-[100vw] h-[80vh] bg-gradient-to-r from-[#f2eaf8]/70 to-[#fef5f8]/70 backdrop-blur-lg flex flex-row items-center justify-start max-[650px]:flex-col-reverse max-[650px]:flex-nowrap max-[650px]:h-[110vh]   '>


                {/* Left text div */}

                <div className='relative w-[50%] h-full  flex flex-col items-start justify-center pl-36 gap-4   max-[650px]:w-[100%] max-[650px]:pl-2 max-[650px]:h-[100%]  '>
                    <h3 className='relative w-fit font-medium text-blue-950 text-3xl cursor-pointer  '> <i className='ri-separator text-4xl'></i> Hello</h3>
                    <h1 className='relative w-fit font-medium text-blue-950 text-7xl cursor-pointer max-[650px]:text-[5.5vmax] font-neuton'>I'm <span className='text-[#fb7da5]'>Ayusha</span> Homkar</h1>

                    <h1 className='relative font-medium text-6xl cursor-pointer max-[650px]:text-[4.8vmax] font-neuton z-50 '><FlipWords className=' text-cyan-500 max-[650px]:text-cyan-500 z-50 w-fit p-0' words={words} duration={1600} /> </h1>
                    {/* text-[#48b1f1] */}

                    <h3 className='relative w-fit font-medium text-blue-950 pt-2 pb-2 text-[1.6vmax] cursor-pointer max-[650px]:mb-[3%] max-[650px]:px-[3%] max-[650px]:text-justify max-[650px]:mr-2 max-[650px]:text-[2.5vmax]'>
                        A <span className='font-bold font-neuton '>Computer Science</span>  graduate, has played key roles in innovative projects like a patented crop prediction system and the Edu-Hub platform. With a focus on front-end development and UI/UX design. My skills fuels my drive to create impactful and user-friendly digital solutions.
                    </h3>

                    <button className="relative w-[25%] h-[7%] flex flex-row items-center justify-center mt-4    bg-red-300 hover:bg-red-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:text-white shadow-white transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce max-[650px]:h-[12%] max-[650px]:w-[26vw] max-[650px]:m-[5%] max-[650px]:p-[2%] max-[650px]:text-[2.4vmax] text-[1.4vmax]">
                        <a href='mailto:ayushahomkar@gmail.com'> Hire Me! </a>
                    </button>


                </div>




                {/* Right img div */}



                <div className='relative w-[50%] h-full  flex flex-col items-start justify-center pl-32 pt-6 gap-4  max-[650px]:w-[100%] max-[650px]:p-0 max-[650px]:items-start max-[650px]:justify-start max-[650px]:h-[100%]  '>
                    <img src={Ayusha} alt="My profile photo" className='w-[80%] h-fit opacity-90 max-[650px]:w-[100%] max-[650px]:h-[98%] ' />

                </div>




            </div>
        </div >

    )
}

export default HomePage