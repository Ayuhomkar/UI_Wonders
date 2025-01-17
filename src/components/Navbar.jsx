import React, { useState } from 'react';
import axios from 'axios';
import {Link} from 'react-scroll';

function Navbar() {
    const [isNavOpen, setisNavOpen] = useState(false);
    const [isDrawerOpen, setisDrawerOpen] = useState(false);
    const [email,setEmail ] = useState("");
    const [subject,setSubject ] = useState("");
    const [msg,setMsg ] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://ui-wonders-backend.vercel.app/send-email', {
                email,
                subject,
                msg
            });
            alert('Mail sent successfully');
            console.log(response)
            setEmail('');
            setSubject('');
            setMsg('');
            setisDrawerOpen(false);
        } catch (error) {
            // console.error('Error sending email', error);
            alert('Failed to send message');
        }
    };


    return (
        <div>
            <div className='sticky top-0 w-[100%] h-[20vh] z-10 bg-gradient-to-r from-[#e7d3f7]/50 to-[#fce6ed]/50 backdrop-blur-lg flex flex-row items-center justify-between px-36 max-[650px]:h-[10vh] max-[650px]:px-2 font-neuton '>
                {/* Logo */}
                <h2 className='relative w-fit font-[500] text-[2.5vmax] text-cyan-500 max-[650px]:text-[3.5vmax] max-[650px]:pl-4 font-audiowide'>UI Wonders</h2>

                {/* Menu div */}
                <i className="ri-menu-3-line hidden max-[650px]:block pr-4 text-[3vmax]" onClick={() => { setisNavOpen(!isNavOpen); console.log(isNavOpen) }}></i>
                <div className='Menu relative h-full w-[50%] flex flex-row items-center justify-around max-[650px]:hidden '>
                    <Link to='home' smooth={true} duration={500} className='relative w-fit font-medium text-gray-800 text-xl cursor-pointer hover:text-cyan-500 duration-300'>
                        Home
                    </Link>
                    <Link to='AboutMe' smooth={true} duration={500} className='relative w-fit font-medium text-gray-800 text-xl cursor-pointer hover:text-cyan-500 duration-300'>
                        About me
                    </Link>
                    <Link to='Projects' smooth={true} duration={500} className='relative w-fit font-medium text-gray-800 text-xl cursor-pointer hover:text-cyan-500 duration-300'>
                        Projects
                    </Link>
                    <h3 className='relative w-fit font-medium text-gray-800 text-xl cursor-pointer hover:text-cyan-500 duration-300' onClick={() => setisDrawerOpen(true)}>
                        Contact
                    </h3>
                </div>

                {/* Mob menue */}

                {isNavOpen && <div className={`Mobile-menu w-[40vw] absolute right-0 h-[22vh] flex-col hidden max-[650px]:flex max-[650px]:items-center max-[650px]:gap-4 max-[650px]:top-[10vh] backdrop-blur-md max-[650px]:duration-500 max-[650px]:bg-[#fdf4ff] max-[650px]:transition-all max-[650px]:ease-in-out ${isNavOpen ? 'max-[650px]:translate-x-0' : 'max-[650px]:-translate-x-4'}`}>
                    <Link to='home' smooth={true} duration={500} className='relative w-fit font-medium text-gray-800 text-[2.5vmax] cursor-pointer hover:text-cyan-500 duration-300'>
                        Home
                    </Link>
                    <Link to='AboutMe' smooth={true} duration={500} className='relative w-fit font-medium text-gray-800 text-[2.5vmax] cursor-pointer hover:text-cyan-500 duration-300'>
                        About me
                    </Link>
                    <Link to='Projects' smooth={true} duration={500} className='relative w-fit font-medium text-gray-800 text-[2.5vmax] cursor-pointer hover:text-cyan-500 duration-300'>
                        Projects
                    </Link>
                    <h3 className='relative w-fit font-medium text-gray-800 text-[2.5vmax] cursor-pointer hover:text-cyan-500 duration-300' onClick={() => setisDrawerOpen(true)}>
                        Contact
                    </h3>
                </div>}
            </div>

            {/* Contact me Drawer section */}

            <div id="drawer-contact" className={` fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'} bg-white w-80 dark:bg-gray-800 font-neuton `} tabindex="-1" aria-labelledby="drawer-contact-label">
                <h5 id="drawer-label" className="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
                    <svg className="w-4 h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                    Contact me
                </h5>
                <button type="button" aria-controls="drawer-contact" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => setisDrawerOpen(false)}>
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close menu</span>
                </button>
                <form className="mb-6">
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
                        <input type="text" id="subject" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Let us know how we can help you" required onChange={(e)=>{setSubject(e.target.value)}} value={subject}/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                        <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..." onChange={(e)=>{setMsg(e.target.value)}} value={msg}></textarea>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block " onClick={(e)=>handleSubmit(e)}>Send Mail</button>
                </form>
               
            </div>
        </div>
    );
}

export default Navbar;
