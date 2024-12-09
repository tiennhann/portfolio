import React from 'react'
import { MdEmail } from 'react-icons/md'

const Hero = () => {
    const handleClick = () => {
        // This function will call when the button is clicked
        window.location.href = 'mailto:letiennhann21@gmail.com';
    }
    return (
        <div className='flex flex-col items-center justify-center h-screen text-center text-white p-6'>
            <h1 className='text-6xl font-bold'>hi, i am  <span className='text-teal-400'>nhan.</span></h1>
            <h2 className='text-3xl mt-4'>I want to do something fun.</h2>
            <p className='mt-6 max-w-xl test-lg'>
                I'm a computer science student. I'm fascinated by large-scale, high-impact products.
            </p>
            <buton
                onClick={handleClick}
                className='mt-8 inline-flex items-center justify-center border border-teal-400 text-teal-400 py-2 px-4 rounded transition duration-300 hover:bg-teal-400 hover:text-white'
            >
                <MdEmail className='mr-2' />
                hello there!    
            </buton>
            

        </div>
    )
}

export default Hero