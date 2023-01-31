import React from 'react'
import {FaLinkedin, FaGithub, FaTwitter} from 'react-icons/fa'; 
import {AiOutlineMail} from 'react-icons/ai';

type Props = {}

export default function Footer({}: Props) {
const date = new Date().getFullYear();

  return (
    <footer className='pt-20 text-xs font-light tracking-tight '>
       
              
              
               <div className='text-[#f570f5] 
               text-xs text-center'> 
                  Copyright © {date} Maria Mercado
              </div>

              
    </footer>
            
  )
}

