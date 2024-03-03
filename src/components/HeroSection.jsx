import React from 'react'
import { motion } from 'framer-motion'
import linkoping from '../assets/campus/linkoping.jpg'
import france from '../assets/campus/campus1.jpeg'
import france2 from '../assets/campus/france2.jpg'
import lyon from '../assets/campus/Lyon.jpeg'
import sweden from '../assets/campus/sweden1.jpeg'
import { TypeAnimation } from 'react-type-animation'

const HeroSection = () => {

  return (
    <>
      <img src={linkoping} alt="" className='w-full h-[120vh] object-cover brightness-[30%]'/>
      <main className='w-full h-screen absolute top-0 left-0'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center'>
            <h1 className='sm:text-5xl text-3xl font-bold text-center text-white font-serif'>Welcome to the Atlantis Dual Degree Program</h1>
        </div>
      </main>
      <TypeAnimation
          className='font-serif sm:mt-8 sm:top-[50%] sm:left-[50%] sm:-translate-x-1/2 sm:-translate-y-1/2 text-base sm:text-2xl'
          sequence={[
          // Same substring at the start will only be typed out once, initially
          'DePaul University',
          2000, // wait 1s before replacing "Mice" with "Hamsters"
          'Linköping University',
          2000,
          'Western Illinois University',
          2000,
          'BBA INSEEC University',
          2000
        ]}
        wrapper="span"
        speed={50}
        style={{ display: 'flex', position: 'absolute', top: '55%', left: '50%', transform: 'translate(-50%, -50%)', paddingTop: '50px', color: 'white'}}
        repeat={Infinity}
        />
    </>
  )
}

export default HeroSection