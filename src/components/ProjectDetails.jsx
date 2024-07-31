import React from 'react'

function ProjectDetails() {
    return (
        <div className='relative h-fit w-full flex flex-col   font-neuton'>

            <div className='relative h-[50vh] w-full flex flex-col mb-4  items-center justify-center '>
                <h1 className='w-full text-center text-7xl text-slate-50 font-bold z-10'>Project title</h1>
                <h1 className='text-3xl font-medium w-full max-[650px]:text-4xl z-10 text-center'>
                    Personaliesd portfolio
                </h1>
                <img src="https://picsum.photos/1280/1980" alt="" className='absolute w-full h-full bg-cover bg-center ' />
                <div className='w-[100%] h-[100%] absolute bg-blue-500/50 z-0'></div>
            </div>

            <div className='relative h-fit w-full flex flex-row max-[650px]:flex-col justify-center items-center'>
                <div className='w-[80%] h-fit px-[3%] py-[1%] mt-[2%] gap-6 flex flex-row justify-start bg-zinc-100 rounded-3xl shadow-xl max-[650px]:w-[95%] max-[650px]:h-fit max-[650px]:space-y-[1%] max-[650px]:gap-6 max-[650px]:p-3'>
                    <div className='relative h-[60vh] w-[50%] p-[2%]  max-[650px]:w-[100%] '>
                        <img className='w-full h-full shadow-lg ' src="https://picsum.photos/800/800" alt="img" />
                    </div>

                    <div className='relative h-[60vh] w-[50%]  p-[2%] max-[650px]:w-[100%] '>


                        <div className='relative w-full h-fit mt-6 '>
                            <h1 className='relative text-2xl max-[650px]:text-2xl text-gray-800'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, animi! Voluptatibus recusandae eos, ducimus rerum iusto quidem tempore. Perspiciatis laudantium qui non dolore velit placeat harum quas eius accusamus excepturi.
                            </h1>

                            <div className='relative w-full h-fit flex flex-row mt-7 gap-7'>
                                <button className='bg-gray-700 p-[1%] text-xl font-medium rounded-lg hover:bg-slate-50 hover:text-slate-900 hover:ring-2 hover:ring-slate-900/30 transition-all duration-400 text-white '>
                                    View code <i className="ri-github-fill ml-3 fill-white hover:text-black  "></i>
                                </button>

                                <button className='bg-gray-700 p-[1%] text-xl font-medium rounded-lg hover:bg-slate-50 hover:text-slate-900 hover:ring-2 hover:ring-slate-900/30 transition-all duration-400 text-white '>
                                    Visit <i className="ri-arrow-right-up-line ml-3 fill-white hover:text-black  "></i>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div className='relative h-[20vh] w-full flex flex-col mt-11  items-center justify-center bg-blue-800 '>
                <h1 className='w-full text-center text-5xl text-slate-50 font-bold '>Work flow</h1>
            </div>

            <div className='relative w-full h-fit flex flex-row '>
                <div className="relative w-[50%] h-[70vh] bg-blue-200 p-[2%]">
                    <img src="https://picsum.photos/id/2/800/800" className='w-full h-full relative bg-contain' alt="" />
                </div>
                <div className="relative w-[50%] h-[70vh] bg-blue-300 flex flex-col p-[2%] items-center justify-center">
                        <div className='w-[70%] h-[60%] flex flex-col'>
                                <h1 className='relative text-4xl font-semibold w-full text-left'>Lorem, ipsum dolor.</h1>
                                <ul className='list-disc list-inside text-gray-700 mt-4 text-3xl w-full text-left '>
                                    <li>Lorem, ipsum.</li>
                                    <li>Lorem, ipsum.</li>
                                    <li>Lorem, ipsum.</li>
                                    <li>Lorem, ipsum.</li>
                                </ul>
                        </div>

                </div>
            </div>

        </div>
    )
}

export default ProjectDetails