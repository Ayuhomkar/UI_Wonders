import React from 'react'
import react from '../assets/react.svg'
import Js from '../assets/Javascript.png'
import Mongodb from '../assets/Mongodb.png'
import Expressjs from '../assets/Expressjs.png'
import Nodejs from '../assets/Nodejs.png'
import Tailwind from '../assets/Tailwind.png'
import SQL from '../assets/SQL.png'
import HTML from '../assets/html.png'
import CSS from '../assets/CSS.png'
import Java from '../assets/Java.png'
import OOP from '../assets/OOP.png'
import Git from '../assets/Git.png'
import Python from '../assets/Python.png'
import SDLC from '../assets/SDLC.png'
import Streamlit from '../assets/Streamlit.png'
import Wordpress from '../assets/Wordpress.png'
import Figma from '../assets/Figma.png'
import Jira from '../assets/Jira.png'
import Iot from '../assets/IoT.png'
import Firebase from '../assets/Firebase.png'
import C from '../assets/C prog.png'






function Skills() {
    return (
        <div className='relative flex-wrap w-[100%] h-fit bg-purple-100  flex backdrop-blur-lg flex-col items-center pt-7 pb-16 max-[650px]:h-fit max-[650px]:flex-col max-[650px]:justify-center font-neuton  '>

            <h1 className='relative w-[100%] h-fit font-medium text-center text-[rgb(30,27,75)] text-6xl cursor-pointer max-[650px]:mb-2 '>Skills</h1>


            {/* skills white page */}

            <div className='w-[70%] h-fit px-[3%] py-[1%] mt-[2%] gap-6 flex flex-row flex-wrap justify-start bg-zinc-100 rounded-3xl shadow-xl max-[650px]:w-[95%] max-[650px]:h-fit max-[650px]:space-y-[1%] max-[650px]:gap-6 max-[650px]:p-3  '>

                {/*Category-1 */}

                <div className='relative w-[100%] h-fit p-[1%]  flex flex-col '>
                    <h1 className='font-bold text-[4vh] mb-2 md:text-3xl pl-2 my-2 border-l-4 border-teal-400 '>Web development</h1>

                    {/* skills div*/}
                    <div className='w-[100%] h-full flex flex-row  flex-wrap space-y-6 items-center p-0  '>

                        {/* individual skills */}
                        <div className='relative w-[25%] h-fit flex flex-row items-center px-[2%] mt-6 max-[650px]:w-[50%] '>
                            <img src={react} alt="React" className='bg-contain relative w-[20%] h-full' />
                            <h1 className='text-3xl font-[300] w-[80%] pl-[10%] text-slate-950 max-[650px]:text-2xl'> React Js  <hr className='border-gray-700' /> </h1>
                        </div>

                        <div className='relative w-[25%] h-fit flex flex-row items-center px-[2%] max-[650px]:w-[50%]'>
                            <img src={Js} alt="JS" className='bg-contain relative w-[20%] h-full' />
                            <h1 className='text-3xl font-[300] w-[80%] pl-[10%] text-slate-950 max-[650px]:text-2xl'> JavaScript <hr className='border-gray-700' /> </h1>
                        </div>

                        <div className='relative w-[25%] h-fit flex flex-row items-center px-[2%] max-[650px]:w-[50%] '>
                            <img src={Tailwind} alt="Tailwind" className='bg-contain relative w-[20%] h-full' />
                            <h1 className='text-3xl font-[300] w-[80%] pl-[10%] text-slate-950 max-[650px]:text-2xl'>Tailwind <hr className='border-gray-700' /> </h1>
                        </div>

                        <div className='relative w-[25%] h-fit flex flex-row items-center px-[2%] max-[650px]:w-[50%] '>
                            <img src={HTML} alt="HTML" className='bg-contain relative w-[20%] h-full' />
                            <h1 className='text-3xl font-[300] w-[80%] pl-[10%] text-slate-950 max-[650px]:text-2xl'>HTML 5 <hr className='border-gray-700' /> </h1>
                        </div>

                        <div className='relative w-[25%] h-fit flex flex-row items-center px-[2%] max-[650px]:w-[50%] '>
                            <img src={CSS} alt="CSS" className='bg-contain relative w-[20%] h-full' />
                            <h1 className='text-3xl font-[300] w-[80%] pl-[10%] text-slate-950 max-[650px]:text-2xl'>CSS 3 <hr className='border-gray-700' /> </h1>
                        </div>


                        <div className='relative w-[25%] h-fit flex flex-row items-center px-[2%] max-[650px]:w-[50%] '>
                            <img src={Mongodb} alt="Mongodb" className='bg-contain relative w-[20%] h-full' />
                            <h1 className='text-3xl font-[300] w-[80%] pl-[10%] text-slate-950 max-[650px]:text-2xl'>Mongodb<hr className='border-gray-700' /> </h1>
                        </div>

                        <div className='relative w-[25%] h-fit flex flex-row items-center px-[2%] max-[650px]:w-[50%] '>
                            <img src={Nodejs} alt="NodeJs" className='bg-contain relative w-[20%] h-full' />
                            <h1 className='text-3xl font-[300] w-[80%] pl-[10%] text-slate-950 max-[650px]:text-2xl'>Node Js <hr className='border-gray-700' /> </h1>
                        </div>

                        <div className='relative w-[25%] h-fit flex flex-row items-center px-[2%] max-[650px]:w-[50%] '>
                            <img src={Expressjs} alt="ExpressJs" className='bg-contain relative w-[20%] h-full' />
                            <h1 className='text-3xl font-[300] w-[80%] pl-[10%] text-slate-950 max-[650px]:text-2xl'>ExpressJs <hr className='border-gray-700' /> </h1>
                        </div>

                        <div className='relative w-[25%] h-fit flex flex-row items-center px-[2%] max-[650px]:w-[50%] '>
                            <img src={Streamlit} alt="Streamlit" className='bg-contain relative w-[20%] h-full' />
                            <h1 className='text-3xl font-[300] w-[80%] pl-[10%] text-slate-950 max-[650px]:text-2xl'>Streamlit <hr className='border-gray-700' /> </h1>
                        </div>

                        <div className='relative w-[25%] h-fit flex flex-row items-center px-[2%] max-[650px]:w-[50%] '>
                            <img src={Wordpress} alt="Wordpress" className='bg-contain relative w-[20%] h-full' />
                            <h1 className='text-3xl font-[300] w-[80%] pl-[10%] text-slate-950 max-[650px]:text-2xl'>Wordpress <hr className='border-gray-700' /> </h1>
                        </div>

                        <div className='relative w-[25%] h-fit flex flex-row items-center px-[2%] max-[650px]:w-[50%] '>
                            <img src={Figma} alt="Figma" className='bg-contain relative w-[20%] h-full' />
                            <h1 className='text-3xl font-[300] w-[80%] pl-[10%] text-slate-950 max-[650px]:text-2xl'>Figma <hr className='border-gray-700' /> </h1>
                        </div>

                    </div>
                </div>

                {/* category-2 */}

                <div className='relative w-[100%] h-fit p-[1%]  flex flex-col '>
                    <h1 className='font-bold text-[4vh] mb-2 md:text-3xl pl-2 my-2 border-l-4 border-lime-400  '>Programming languages</h1>

                    <div className='w-[100%] h-full flex flex-row  flex-wrap space-y-6 items-center p-0 '>

                        <div className='relative w-[25%] h-fit flex flex-row items-center px-[2%] mt-6 max-[650px]:w-[50%] '>
                            <img src={Java} alt="Java" className='bg-contain relative w-[20%] h-full' />
                            <h1 className='text-3xl font-[300] w-[80%] pl-[10%] text-slate-950 max-[650px]:text-2xl'>Java <hr className='border-gray-700' /> </h1>
                        </div>



                        <div className='relative w-[25%] h-fit flex flex-row items-center px-[2%] max-[650px]:w-[50%] '>
                            <img src={Python} alt="Python" className='bg-contain relative w-[20%] h-full' />
                            <h1 className='text-3xl font-[300] w-[80%] pl-[10%] text-slate-950 max-[650px]:text-2xl'>Python <hr className='border-gray-700' /> </h1>
                        </div>

                        <div className='relative w-[35%] h-fit flex flex-row items-center px-[2%] max-[650px]:w-[65%] '>
                            <img src={C} alt="C" className='bg-contain relative w-[20%] h-full' />
                            <h1 className='text-3xl font-[300] w-[80%] pl-[10%] text-slate-950 max-[650px]:text-2xl max-[650px]:text-nowrap'>C Programming <hr className='border-gray-700' /> </h1>
                        </div>

                    </div>

                </div>

                {/*Category-3 */}

                <div className='relative w-[100%] h-fit p-[1%]  flex flex-col '>
                    <h1 className='font-bold text-[4vh] mb-2 md:text-3xl pl-2 my-2 border-l-4 border-orange-400  '>Database</h1>

                    <div className='w-[100%] h-full flex flex-row  flex-wrap space-y-6 items-center p-0  '>


                        <div className='relative w-[25%] h-fit flex flex-row items-center px-[2%] mt-6 max-[650px]:w-[50%] '>
                            <img src={Mongodb} alt="Mongodb" className='bg-contain relative w-[20%] h-full' />
                            <h1 className='text-3xl font-[300] w-[80%] pl-[10%] text-slate-950 max-[650px]:text-2xl'>Mongodb<hr className='border-gray-700' /> </h1>
                        </div>

                        <div className='relative w-[25%] h-fit flex flex-row items-center px-[2%] max-[650px]:w-[50%] '>
                            <img src={SQL} alt="SQL" className='bg-contain relative w-[20%] h-full' />
                            <h1 className='text-3xl font-[300] w-[80%] pl-[10%] text-slate-950 max-[650px]:text-2xl'>MySQL <hr className='border-gray-700' /> </h1>
                        </div>



                        <div className='relative w-[25%] h-fit flex flex-row items-center px-[2%] max-[650px]:w-[50%]  '>
                            <img src={Firebase} alt="Firebase" className='bg-contain relative w-[20%] h-full' />
                            <h1 className='text-3xl font-[300] w-[80%] pl-[10%] text-slate-950 max-[650px]:text-2xl'>Firebase<hr className='border-gray-700' /> </h1>
                        </div>

                    </div>

                </div>

                {/*Category-4 */}

                <div className='relative w-[100%] h-fit p-[1%]  flex flex-col '>
                    <h1 className='font-bold text-[4vh] mb-2 md:text-3xl pl-2 my-2 border-l-4 border-cyan-400  '>Tools</h1>

                    <div className='w-[100%] h-full flex flex-row  flex-wrap space-y-6 items-center p-0 '>


                        <div className='relative w-[25%] h-fit flex flex-row items-center px-[2%] mt-6 max-[650px]:w-[50%] '>
                            <img src={Git} alt="Git" className='bg-contain relative w-[20%] h-full' />
                            <h1 className='text-3xl font-[300] w-[80%] pl-[10%] text-slate-950 max-[650px]:text-2xl'>GitHub <hr className='border-gray-700' /> </h1>
                        </div>

                        <div className='relative w-[25%] h-fit flex flex-row items-center px-[2%] max-[650px]:w-[50%] '>
                            <img src={Jira} alt="Jira" className='bg-contain relative w-[20%] h-full' />
                            <h1 className='text-3xl font-[300] w-[80%] pl-[10%] text-slate-950 max-[650px]:text-2xl'>Jira <hr className='border-gray-700' /> </h1>
                        </div>


                    </div>

                </div>


                {/*Category-5 */}

                <div className='relative w-[100%] h-fit p-[1%]  flex flex-col '>
                    <h1 className='font-bold text-[4vh] mb-2 md:text-3xl pl-2 my-2 border-l-4 border-emerald-400 '>Other skills</h1>

                    <div className='w-[100%] h-full flex flex-row  flex-wrap space-y-6 items-center p-0 '>

                        <div className='relative w-[25%] h-fit flex flex-row items-center px-[2%] mt-6 max-[650px]:w-[50%]'>
                            <img src={OOP} alt="OOP" className='bg-contain relative w-[20%] h-full' />
                            <h1 className='text-3xl font-[300] w-[80%] pl-[10%] text-slate-950 max-[650px]:text-2xl'>OOP <hr className='border-gray-700' /> </h1>
                        </div>

                        <div className='relative w-[25%] h-fit flex flex-row items-center px-[2%] max-[650px]:w-[50%] '>
                            <img src={SDLC} alt="SDLC" className='bg-contain relative w-[20%] h-full' />
                            <h1 className='text-3xl font-[300] w-[80%] pl-[10%] text-slate-950 max-[650px]:text-2xl'>SDLC <hr className='border-gray-700' /> </h1>
                        </div>

                        <div className='relative w-[25%] h-fit flex flex-row items-center px-[2%] max-[650px]:w-[50%] '>
                            <img src={Iot} alt="Iot" className='bg-contain relative w-[20%] h-full' />
                            <h1 className='text-3xl font-[300] w-[80%] pl-[10%] text-slate-950 max-[650px]:text-2xl'>IoT <hr className='border-gray-700' /> </h1>
                        </div>

                    </div>

                </div>







            </div>

        </div>

    )
}

export default Skills