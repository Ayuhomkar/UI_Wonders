import React from 'react'
import coding from '../assets/coding-2.jpg'

function AboutMe() {
  return (

    < div className='relative flex-wrap w-[100vw] h-[70vh] bg-gradient-to-b from-white via-purple-100 to-purple-100  flex backdrop-blur-lg flex-row items-center '>

    {/* bg-gradient-to-br from-rose-100 via-purple-200 to-purple-200          from-rose-50  */}

    {/* Left div about pic*/}

    <div className='relative w-[50%] h-full  flex flex-col items-start pt-32 pl-20 pr-20 gap-4 max-[650px]:p-0'>
        {/* img to be upload */}
        <img src={coding} alt="img" />
    </div>


    {/* right div about info*/}

    <div className='relative w-[50%] h-full  flex flex-col items-start  gap-4   '>

        <h3 className='relative w-[100%] font-medium text-[rgb(30,27,75)] text-5xl cursor-pointer pt-32 pl-2'>About Me</h3>

        <h3 className='relative w-[70%] h-fit  flex flex-col items-start pt-6 gap-4  text-xl  '>
            Creative & Innovative Front-End Developer
        </h3>

        <h3 className='relative w-[70%] h-fit  flex flex-col items-start pt-4 gap-4  text-base  '>
            Passionate Computer Science graduate with expertise in HTML, CSS, JavaScript, React, and MongoDB. I specialize in crafting seamless user experiences and have contributed to cutting-edge projects like a patented crop prediction system using machine learning and the EduHub online education platform.I thrive on turning complex problems into elegant solutions and am always eager to embrace new challenges.
        </h3>
        {/* right buttons about div */}
        <div className='relative h-fit  flex flex-row items-start  gap-12 pt-7 '>
            {/* //[#f92a68] */}
            <button className="bg-[#f9634f] text-[#ffe9f0] border border-[#fac8d7] border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                <span className="bg-[#f9abc3] shadow-[#fba8c1] absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                Contact me
            </button>


            <button className="bg-violet-950 text-violet-200 border border-violet-300 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                <span className="bg-violet-400 shadow-violet-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                Download CV
            </button>
        </div>


    </div>



</div>
  )
}

export default AboutMe