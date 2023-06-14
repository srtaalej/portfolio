// Notes: Fix-layout, make sun change to moon on click

import React, {useState} from 'react';
import Link from 'next/link';
import {AiOutlineMenu, AiOutlineClose, AiOutlineMail} from 'react-icons/ai';

import {FaLinkedin, FaGithub, FaTwitter} from 'react-icons/fa';
import { animate } from 'framer-motion';


type Props = {
}

export default function Navbar(props: Props) {

  const [linkColor, setLinkColor] = useState('#1f2937')
  
  const[nav, setNav] = useState(true);
  const handleNav= ()=>{
    setNav(!nav)    
  }




  return (



    
    <div className='flex flex-row w-screen h-20 bg-transparent
    z-50 justify-between items-center rounded-full shadow-lg shadow-[#f570f5]'>
     
     <div className='flex flex-wrap items-center justify-between w-full p-10'>
      <Link href='/' className=' text-4xl ease-in duration-200
      md:text-5xl font-extrabold text-transparent bg-clip-text 
       from-[#f570f5] to-[#f570f5] via-[#fb8463] bg-gradient-to-l'>
        Maria Mercado
      </Link>
      
     
      <ul className='space-x-5 hidden md:flex uppercase
        text-sm font-lightbold text-transparent bg-clip-text 
        from-[#f570f5] to-[#f570f5] via-[#fb8463] bg-gradient-to-l'>
        <Link href='/about' className='hover:text-[#f5bae9] ease-in duration-200'>
          About
        </Link>
        <Link href='/skills' className='hover:text-[#f5bae9] ease-in duration-200'>
          Skills
        </Link>
        <Link href='/projects' className='hover:text-[#f5bae9] ease-in duration-200'>
          Projects
        </Link>
        <Link href='/contacts' className='hover:text-[#f5bae9] ease-in duration-200'>
          Contact
        </Link>
        </ul>
      
            
          {/* this is the menu icon */}
          <div
            onClick={handleNav}
            className='md:hidden'
          >
            <AiOutlineMenu size={20} color='f570f5'/>
          </div>
          </div>
    

      {/* this is the menu that pops up when you click on the menu icon */}
        <div>      
        <div className={!nav ? 'md:hidden fixed left-0 top-0 w-full h-full bg-white/60': ''}>  {/*black part */}

        {/* white part where actual menu is */}
        <div className={!nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md-w-[45%] h-max bg-black p-10 ease-in duration 500': 'hidden top-0 p-10 ease-in duration 500'}>
          <div> {/* logo and x */}
            <div className= 'flex items-center justify-end w-full px-5'>
            {/* <Link href='/' className='text-3xl font-light uppercase text-transparent bg-clip-text p-5
            from-[#f570f5] to-[#f570f5] via-[#fb8463] bg-gradient-to-l'>
            </Link> */}
                <div onClick={handleNav} className='rounded-full shadow-md shadow-[#f570f5] hover:shadow-lg hover:shadow-[#f570f5] duration-300 bg-transparent p-3 cursor-pointer'>
                  <AiOutlineClose size={15} color='ffe5fa'/>
                </div> 
            
            </div>
          </div>
          <div className= 'flex w-full uppercase items-center justify-between px-10 font-light text-lg text-transparent bg-clip-text from-[#fb8463] to-[#f570f5] bg-gradient-to-t'>
                <ul>
                  <Link href='/about' >
                    <li className='py-6 text-l'>About Me</li>
                  </Link>
                  <Link href='/skills' >
                    <li className='py-6 text-l '>Skills</li>
                  </Link>
                  <Link href='/projects' >
                    <li className='py-6 text-l '>Projects</li>
                  </Link>
                  <Link href='/contacts' >
                    <li className='py-6 text-l '>Contact</li>
                  </Link>
                </ul>
          </div>
                <div className='px-10 py-40'>
                  <p className= 'text-l uppercase tracking-widest flex w-full items-center justify-between font-light text-lg text-transparent bg-clip-text from-[#fb8463] to-[#f570f5] bg-gradient-to-t'>Let&apos;s Connect</p>
                  {/* parent div*/} 
                  <div className= 'flex item-center justify-between my-4 w-full sm:w-[80%]'>
                    <div className='rounded-full shadow-lg shadow-[#f570f5] p-3 cursor-pointer hover:scale-185 ease-in duration 500'> 
                      <Link href='https://www.linkedin.com/in/mariamerk/'>
                        <FaLinkedin size={20} color='ffe5fa'/>
                      </Link>
                    </div>
                    <div className='rounded-full shadow-lg shadow-[#f570f5] p-3 cursor-pointer hover:scale-185 ease-in duration 500'> 
                      <Link href='https://github.com/srtaalej'>
                        <FaGithub size={20} color='ffe5fa'/>
                      </Link>
                    </div>
                    <div className='rounded-full shadow-lg shadow-[#f570f5] p-3 cursor-pointer hover:scale-185 ease-in duration 500'> 
                      <Link href='/contacts'> 
                        <AiOutlineMail size={20} color='ffe5fa'/>
                      </Link>
                    </div>
                    <div className='rounded-full shadow-lg shadow-[#f570f5] p-3 cursor-pointer hover:scale-185 ease-in duration 500'> 
                      <Link href='https://twitter.com/srtalej'>
                        <FaTwitter size={20} color='ffe5fa'/>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>

  </div>
  )
}


