import React from 'react'
import logo from '../assets/images/logo.png';
import { FaLinkedin } from 'react-icons/fa6';
import { FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const Navbar = () => {
    return (
        <nav className='bg-dark  flex items-center justify-between py-4 px-8'>
            <div className='flex items-center'>
                <a href='#home'>
                    <img className='w-16 h-16 mr-4' src={logo} alt='logo' />
                </a>
                
                <div className='ml-8 flex items-center gap-4 text-xl'>
                    <a href='#home' className='text-white hover:text-teal-400'>home</a>
                    <a href='#about' className='text-white hover:text-teal-400'>about</a>
                    <a href='#experience' className='text-white hover:text-teal-400'>experience</a>
                    <a href='#project' className='text-white hover:text-teal-400'>projects</a>
                </div>
            </div>

            <div className='m-8 flex items-center justify-center gap-4 text-3xl'>
                <a href='mailto:letiennhann21@gmail.com' className='text-white hover:text-teal-400'><MdEmail /></a>
                <a href='https://github.com/tiennhann' target='_blank' rel='noopener noreferrer' className='text-white hover:text-teal-400'><FaGithubSquare /></a>
                <a href='https://www.linkedin.com/in/nhan-le-00n00/' target='_blank' rel='noopener noreferrer' className='text-white hover:text-teal-400'><FaLinkedin /></a>
                
            </div>
        </nav>
    );

};

export default Navbar