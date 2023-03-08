// Notes: Find a better color for the icons


import React from 'react';
import {
  FaGit,
  FaPython,
  FaSwift,
  FaJsSquare,
  FaHtml5,
  FaCss3,
  FaReact
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTailwindcss,
 
  SiTypescript,
  SiCplusplus
} from 'react-icons/si';
import { AiOutlineConsoleSql } from 'react-icons/ai';
import Skill from '../components/skills_card';
import { motion } from 'framer-motion';


type Props = {};

export default function SkillsSection({}: Props) {
  return (
    
    <div className='w-screen h-full mb-40'>
     
     <h1 className="text-center p-10 text-6xl md:text-7xl font-extrabold
          text-transparent bg-clip-text
          from-[#f570f5] to-[#f570f5] via-[#ffe5fa]
          bg-gradient-to-l
          ">Skills</h1>
    
     {/* <motion.article
    
      initial={{
        x: -200,
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
    > */}
    <div className='grid items-center justify-center grid-flow-row grid-cols-2 grid-rows-6 px-5 text-center ease-out md:grid-cols-3 md:grid-rows-4 md:px-20 max-h-fit gap-y-10 lg:gap-y-20 justify-items-center lg:grid-rows-3 lg:grid-cols-4'>
      <Skill
          icon={<SiCplusplus size='70' color='ffe5fa'/>}
          title={'C++'}
        />
        
        <Skill
          icon={<FaPython size='70' color='ffe5fa'/>}
          title={'Python'}
        />
        <Skill
          icon={<FaJsSquare size='70' color='ffe5fa' />}
          title={'JavaScript'}
        />
        <Skill
          icon={<AiOutlineConsoleSql size='70' color='ffe5fa'/>}
          title={'SQL'}
        />
        <Skill
          icon={<FaSwift size='70' color='ffe5fa'/>}
          title={'Swift'}
        />
        <Skill
          icon={<SiTypescript size='70' color='ffe5fa'/>}
          title={'TypeScript'}
        />
        <Skill
          icon={<FaHtml5 size='70' color='ffe5fa'/>}
          title={'HTML5'}
        />
        <Skill
          icon={<FaCss3 size='70' color='ffe5fa'/>}
          title={'CSS3'}
        />
         <Skill
          icon={<SiTailwindcss size='70' color='ffe5fa'/>}
          title={'Tailwind CSS'}
        />
        <Skill
          icon={<FaReact size='70' color='ffe5fa'/>}
          title={'React.js'}
        />
        <Skill
          icon={<SiNextdotjs size='70' color='ffe5fa'/>}
          title={'Next.js'}
        />
        <Skill
          icon={<FaGit size='70' color='ffe5fa'/>}
          title={'Git'}
        />
      </div>
    {/* </motion.article> */}
    </div>
  );
}