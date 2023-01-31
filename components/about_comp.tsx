import React, {useState} from 'react';
import { motion } from 'framer-motion';
import AboutCard from '../components/about_card';
import Link from 'next/link';

type Props = {}

export default function About({}: Props) {
  const[nav, setNav] = useState(false);
  const handleNav= ()=>{
    setNav(!nav) 
  }

  const [darkMode, setDarkMode] = React.useState(false)
  
  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode)
}

  return (
    <div className="z-50 flex flex-col items-center justify-center w-screen h-full mb-40">
       {/* change the I ams to I'ms */}
   
      <h1 className="text-center p-10 text-6xl md:text-7xl font-extrabold
          text-transparent bg-clip-text
          from-[#f570f5] to-[#f570f5] via-[#ffe5fa]
          bg-gradient-to-l
          ">
            About
      </h1>
      <Link href='/contacts'>
      <AboutCard/>
      </Link>
      
    </div>
 
  )
}