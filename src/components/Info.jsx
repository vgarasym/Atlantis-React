import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Reveal } from '../components/Reveal'


const Info = () => {
  return (
    <>
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25 }}
        >
            <div className='bg-blue-500 h-full w-full'>
                <h1 className='text-6xl font-serif text-center pt-20'>Atlantis Separates You From the Crowd</h1>
                <p className='text-center text-2xl font-serif p-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.25 }}
                    className='text-center text-2xl font-serif p-10'
                >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum laboriosam enim tenetur temporibus quaerat neque perspiciatis eius fuga aliquid ut. Atque suscipit voluptatibus nam quod quae hic repellendus? Omnis, excepturi!
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.25 }}
                    className='text-center text-2xl font-serif p-10'
                >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum laboriosam enim tenetur temporibus quaerat neque perspiciatis eius fuga aliquid ut. Atque suscipit voluptatibus nam quod quae hic repellendus? Omnis, excepturi!
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.25 }}
                    className='text-center text-2xl font-serif p-10'
                >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum laboriosam enim tenetur temporibus quaerat neque perspiciatis eius fuga aliquid ut. Atque suscipit voluptatibus nam quod quae hic repellendus? Omnis, excepturi!
                </motion.p>
            </div>
        </motion.div>
    </>
  )
}

export default Info