import React from 'react'
import coding from '../assets/coding-2.jpg'
import cv from '../assets/Ayusha_Homkar_CV.pdf'
import { Element } from 'react-scroll'

function AboutMe() {
  return (
    
    <Element name='AboutMe'>


    < div className='relative flex-wrap w-[100%] h-[80vh] bg-gradient-to-b from-[#F8F8FF] via-purple-100 to-purple-100  flex backdrop-blur-lg flex-row items-center max-[650px]:h-fit max-[650px]:flex-col max-[650px]:justify-center font-neuton '>

    {/* bg-gradient-to-br from-rose-100 via-purple-200 to-purple-200          from-rose-50  */}

    {/* Left div about pic*/}

    <div className='relative w-[50%] h-full  flex flex-col items-start pt-24 pl-20 pr-20 gap-4 max-[650px]:p-0 max-[650px]:w-[100%] max-[650px]:h-[50%] max-[650px]:p-[4%]'>
        {/* img to be upload */}
        <img src={coding} alt="img" />
    </div>


    {/* right div about info*/}

    <div className='relative w-[50%] h-full  flex flex-col items-start  gap-4 max-[650px]:w-[100%] max-[650px]:  '>

        <h3 className='relative w-[100%] font-medium text-[rgb(30,27,75)] text-6xl cursor-pointer pt-20 pl-2 max-[650px]:pt-7 max-[650px]:text-center max-[650px]:text-[5.6vmax]'>About Me</h3>

        <h3 className='relative w-[70%] h-fit  flex flex-col items-start pt-6 gap-4  text-3xl max-[650px]:w-[100%] max-[650px]:text-[2.8vmax] max-[650px]:px-[9%] max-[650px]:text-center'>
            Creative & Innovative Front-End Developer
        </h3>

        <h3 className='relative w-[70%] h-fit  flex flex-col items-start pt-4 gap-4  text-xl max-[650px]:w-[100%] max-[650px]:px-[5%] max-[650px]:text-justify max-[650px]:text-[2.3vmax]'>
            Passionate Computer Science graduate with expertise in HTML, CSS, JavaScript, React, and MongoDB. I specialize in crafting seamless user experiences and have contributed to cutting-edge projects like a patented crop prediction system using machine learning and the EduHub online education platform.I thrive on turning complex problems into elegant solutions and am always eager to embrace new challenges.
        </h3>
        {/* right buttons about div */}
        <div className='relative h-fit  flex flex-row items-start  gap-12 pt-5 max-[650px]:w-[100%] max-[650px]:p-[5%] max-[650px]:justify-center'>
            {/* //[#f92a68] */}
            <button className="bg-[#f9634f] text-[#ffe9f0] border border-[#fac8d7] border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group max-[650px]:text-[2.5vmax] text-[1.3vmax]">
                <span className="bg-[#f9abc3] shadow-[#fba8c1] absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                Contact me
            </button>


            <button className="bg-violet-950 text-violet-200 border border-violet-300 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group max-[650px]:text-[2.4vmax] text-[1.2vmax]">
                <span className="bg-violet-400 shadow-violet-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                <a href={cv} download={true}>Download CV</a> 
            </button>
        </div>


    </div>



</div>

</Element>

  )
}

export default AboutMe