import React from 'react';
import Proj from '../components/proj_card';

import { SiNextdotjs, SiReact, SiMongodb, SiExpress, SiNodedotjs } from 'react-icons/si';
import { useRouter } from 'next/router';

type Props = {};

export default function Projects({}: Props) {
  const router = useRouter()
  const handleClick = () => {
    router.push('https://momostudios.co/')
  }
  return (
    <div className="flex flex-col items-center justify-center w-screen h-full mb-40">
        <h1 className="text-center py-10 text-6xl lg:text-7xl font-extrabold
        text-transparent bg-clip-text
        from-[#f570f5] to-[#f570f5] via-[#ffe5fa] bg-gradient-to-l
        ">Projects</h1>
            
        {/*  hover:text-transparent hover:bg-clip-text 
        hover:from-[#561ab1] hover:to-[#561ab1]
        hover:via-[#fb8463] hover:bg-gradient-to-l 
        */}
            
            <div className='flex flex-col md:px-5 lg:flex-row'>
               
                <a href='https://momostudios.co/' target="_blank" rel="noopener noreferrer" className='pb-10 md:px-5'>
                <Proj 
                title='Film Maker&apos;s Website'
                dateStarted='February 2022'
                points={[
                'Modern, animated components styled in Tailwind CSS',
                'Next.js for optimized Server Side rendering',
                'TypeScript for increased developer experience',
                ]}
                skillsEng={['Next.js', 'React.js']}
                icon={[
                <SiNextdotjs key={1} size={40} color='f89de8'/>,
                <SiReact key={2} size={40} color='f89de8'/>,
                ]}
                />
                </a>

                <div className='md:px-5 '>
                <Proj 
                title='Opportunity Tracker'
                dateStarted='March 2023'
                points={[
                'A web app that allows students to find, apply, and track opportunities.', 'Node.js for backend development', 'Express.js for routing', 'MongoDB for database'
                ]}
                skillsEng={['Node.js', 'Express.js', 'MongoDB']}
                icon={[
                <SiNodedotjs key={1} size={40} color='f89de8'/>,
                <SiExpress key={2} size={40} color='f89de8'/>,
                <SiMongodb key={3} size={40} color='f89de8'/>,
                ]}
                />
                </div>
                

                
            </div>
    </div>
    );
  }
