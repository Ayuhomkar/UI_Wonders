import React from 'react'
import Mern from '../assets/Mern.png'
import Cyber from '../assets/Cyber.jpg'
import ESD from '../assets/ESD.jpeg'
import { Element } from 'react-scroll'

function WorkExp() {
    return (

        <Element name='WorkExp'>

            < div className='relative w-[100%] h-fit  flex flex-col items-start justify-start px-36 pt-16 pb-24 gap-4  max-[650px]:m-0 max-[650px]:p-0 max-[650px]:items-center  max-[650px]:justify-center max-[650px]:h-fit max-[650px]:pb-5 max-[650px]:gap-[1%] bg-[#F8F8FF] font-neuton ' >

                <h1 className='relative w-[100%] font-medium text-center text-[rgb(30,27,75)] text-6xl cursor-pointer  max-[650px]:text-[5.4vmax]  max-[650px]:pt-[10%] '>Work Experience
                </h1>


                {/* All 3 cards main div */}

                <div className='relative w-[100%] h-fit  flex flex-row items-start justify-evenly px-36 mt-4 max-[650px]:p-0  max-[650px]:gap-5 max-[650px]:w-[100%] max-[650px]:flex-col max-[650px]:items-center max-[650px]:h-fit max-[650px]:pb-[5%] '>

                    {/* Card div-1 */}

                    <div
                        className="relative transform transition duration-300 hover:scale-125 rounded-lg shadow-lg h-72 w-56 mt-8 scale-110 hover:shadow-xl bg-white max-[650px]:w-[55vw] max-[650px]:h-[80vw] max-[650px]:hover:scale-100 max-[650px]:scale-x-125"
                    >
                        <div>
                            <img src={Mern} alt="MERN stack" className=' w-[100%] h-[100%] p-2 max-[650px]:pb-0' />
                        </div>

                        <div className="px-4 pt-2 flex flex-col">
                            <h2 className="font-semibold text-[1.2vmax] max-[650px]:text-[2.3vmax]">MERN Stack Developer Intern</h2>
                            <h2 className='text-sm max-[650px]:text-[1.8vmax]'>(Feb 2024 - April 2024)</h2>
                            <h2 className='text-base max-[650px]:text-[2.2vmax]'>Worked on a full stack project 'EduHub' using MERN stack</h2>


                        </div>
                    </div>


                    {/* Card div-2 */}

                    <div
                        className="relative transform transition duration-300 hover:scale-125 rounded-lg shadow-lg h-72 w-56 mt-8 scale-110 hover:shadow-xl bg-white max-[650px]:w-[55vw] max-[650px]:h-[80vw] max-[650px]:hover:scale-100 max-[650px]:scale-x-125"
                    >
                        <div>
                            <img src={Cyber} alt="Cyber Security" className=' w-[100%] h-[90%] p-2 pb-0 ' />
                        </div>

                        <div className="px-4 pt-2 flex flex-col">
                            <h2 className="font-semibold text-[1.2vmax] w-[100%]     max-[650px]:text-[2.3vmax]">Cyber Security Intern</h2>
                            <h2 className='text-sm max-[650px]:text-[1.8vmax]'>(March 2022 - May 2022)</h2>
                            <h2 className='text-base max-[650px]:text-[2.2vmax] '>Worked on Cyber Security projects like SQL injection, Password cracking, vulnerability checking</h2>


                        </div>
                    </div>

                    {/*
                Card div-3*/}

                    <div
                        className="relative transform transition duration-300 hover:scale-125 rounded-lg shadow-lg h-72 w-56 mt-8 scale-110 hover:shadow-xl bg-white max-[650px]:w-[55vw] max-[650px]:h-[80vw] max-[650px]:hover:scale-100 max-[650px]:scale-x-125"
                    >
                        <div>
                            <img src={ESD} alt="ESD" className=' w-[100%] h-[100%] p-2 max-[650px]:pb-0' />
                        </div>

                        <div className="px-3 pt-2 flex flex-col">
                            <h2 className="font-semibold text-[1.2vmax] max-[650px]:text-[2.3vmax]">Employability Skills Development</h2>
                            <h2 className='text-sm max-[650px]:text-[1.8vmax]'>(2021)</h2>
                            <h2 className='text-base max-[650px]:text-[2.2vmax] '>Attended Employability Skills Development internship arranged in collage</h2>

                        </div>
                    </div>


                </div>




            </div>

        </Element>

    )
}
export default WorkExp