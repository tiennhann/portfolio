import { MdEmail } from 'react-icons/md'
import { motion } from "motion/react"

const Hero = () => {
    const handleClick = () => {
        // This function will call when the button is clicked
        window.location.href = 'mailto:letiennhann21@gmail.com';
    }

    const container = (delay) => ({
        hidden: { y: 0, opacity: 0 },
        visible: { y: -150, opacity: 1, transition: { duration: 0.5, delay: delay } },
    });

    return (
        <div className='flex flex-col items-center justify-center h-screen text-center text-white p-6' >
            <motion.h1
                variants={container(0)}
                initial='hidden'
                animate='visible'
                className='text-6xl font-bold'
            >
                hi, i am  <span className='text-cyan-400'>nhan.</span>
            </motion.h1>

            <motion.h2
                variants={container(1)}
                initial='hidden'
                animate='visible'
                className='text-3xl mt-4'>I want to do something fun.
            </motion.h2>
            <motion.p
                variants={container(1.5)}
                initial='hidden'
                animate='visible'
                className='mt-6 max-w-md test-lg font-nunito text-xl '>
                I am a computer science student. I am fascinated by large-scale, high-impact products.
            </motion.p>
            <motion.button
                initial={{y: 0, opacity:0}}
                animate={{ y: -150, opacity: 2 }}
                transition={{duration: 0.5, delay: 2.5}}
                onClick={handleClick}
                className='text-xl mt-9 inline-flex items-center justify-center border border-cyan-400 text-cyan-400 py-3 px-4 rounded transition duration-300 hover:bg-cyan-400 hover:text-white'
            >
                <MdEmail className='mr-2 font-nunito' />
                coffee chat!    
            </motion.button>
        </div>
    )
}

export default Hero