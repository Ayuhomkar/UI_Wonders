import React, { useState } from 'react'

function Navbar() {

    const [isNavOpen,setisNavOpen] = useState(false)
  return (
    <div className='sticky top-0 w-[100vw] h-[20vh] z-10 bg-gradient-to-r from-[#e7d3f7]/50 to-[#fce6ed]/50 backdrop-blur-lg flex flex-row items-center justify-between px-36 max-[650px]:h-[10vh] max-[650px]:px-2 max-[650px]:overflow-hidden'>

        {/* Logo */}
        <h2 className='relative w-fit font-semibold text-[2.5vmax] text-cyan-500 max-[650px]:text-[3vmax] max-[650px]:pl-4'>UI Wonders</h2>

        {/* Menu div */}
        <i className="ri-menu-3-line hidden max-[650px]:block pr-4 text-[3vmax]" onClick={()=> {setisNavOpen(!isNavOpen); console.log(isNavOpen)}}></i>
            <div className='Menu relative h-full w-[50%] flex flex-row items-center justify-around max-[650px]:hidden '> 
                <h3 className='relative w-fit font-medium text-gray-800 text-base cursor-pointer hover:text-cyan-500 duration-300'>
                    Home
                </h3>
                <h3 className='relative w-fit font-medium text-gray-800 text-base cursor-pointer hover:text-cyan-500 duration-300'>
                    About me
                </h3>
                <h3 className='relative w-fit font-medium text-gray-800 text-base cursor-pointer hover:text-cyan-500 duration-300'>
                    Projects
                </h3>
                <h3 className='relative w-fit font-medium text-gray-800 text-base cursor-pointer hover:text-cyan-500 duration-300'>
                    Contact 
                </h3>
            </div>

            <div className={`Mobile-menu w-[100%] absolute h-fit flex-col bg-white hidden max-[650px]:flex max-[650px]:items-center max-[650px]:gap-4 max-[650px]:top-[10vh] backdrop-blur-md  ${isNavOpen ? 'translate-x-0' : 'translate-x-[200%]'} duration-500 ease-in-out`}>
                    
            <h3 className='relative w-fit font-medium text-gray-800 text-[2vmax] cursor-pointer hover:text-cyan-500 duration-300'>
            Home
                </h3>
                <h3 className='relative w-fit font-medium text-gray-800 text-[2vmax] cursor-pointer hover:text-cyan-500 duration-300'>
                    About me
                </h3>
                <h3 className='relative w-fit font-medium text-gray-800 text-[2vmax] cursor-pointer hover:text-cyan-500 duration-300'>
                    Projects
                </h3>
                <h3 className='relative w-fit font-medium text-gray-800 text-[2vmax] cursor-pointer hover:text-cyan-500 duration-300'>
                    Contact 
                </h3>
            </div>
    </div>
  )
}

export default Navbar