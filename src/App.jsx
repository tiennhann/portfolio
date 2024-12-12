import React from 'react'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';


function App (){
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-gray-600 selection:text-neutral-300 font-nunito'>
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <div id='home'><Hero /></div>
        <div id='about'><About /></div>
        <div id='experience'><Experience /></div>
        <div id='projects'><Projects /></div>
      </div>
      
    </div>
  )
}

export default App