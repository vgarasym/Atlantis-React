import React from 'react'
import { motion } from 'framer-motion'
import logo from '../assets/school-logos/Atlantis-Logo.png'

const Navbar = () => {
  return (
    <motion.nav
        style={{ zIndex: 10, position: 'absolute', display: 'flex', justifyContent: 'space-between', width: '100%'}}
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.1, type: 'spring', stiffness: 120, duration: 3}}
    >
        <div className='absolute hidden sm:flex sm:justify-between md:w-full z-10'>
            <a href="/"><img src={logo} alt="" className='w-[60px] h-auto md:w-[70px] m-2'/></a>
            <div className='flex justify-end items-center m-4 space-x-12 text-2xl font-serif text-white'>
                <a href="/"><motion.button whileHover={{scale: 1.2}} transition={{ delay: 0.1, type: 'spring', stiffness: 120 }}>Home</motion.button></a>
                <a href="/"><motion.button whileHover={{scale: 1.2}} transition={{ delay: 0.1, type: 'spring', stiffness: 120 }}>About</motion.button></a>
                <a href="/"><motion.button whileHover={{scale: 1.2}} transition={{ delay: 0.1, type: 'spring', stiffness: 120 }}>Services</motion.button></a>
                <a href="/"><motion.button whileHover={{scale: 1.2}} transition={{ delay: 0.1, type: 'spring', stiffness: 120 }}>Projects</motion.button></a>
            </div>
            <motion.div
                whileHover={{ scale: 1.2, x: -10}}
                transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
            >
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded-full font-serif'>Contact</button>
            </motion.div>
        </div>
    </motion.nav>
  )
}

export default Navbar