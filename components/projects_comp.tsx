import React from 'react';
import Proj from '../components/proj_card';

import { SiNextdotjs, SiReact, SiCplusplus, SiTensorflow, } from 'react-icons/si';

type Props = {};

export default function Projects({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center w-screen pb-40 h-max">
        <h1 className="text-center py-10 text-6xl md:text-7xl font-extrabold
        text-transparent bg-clip-text
        from-[#f570f5] to-[#f570f5] via-[#ffe5fa] bg-gradient-to-l
        ">Projects</h1>
            
        {/*  hover:text-transparent hover:bg-clip-text 
        hover:from-[#561ab1] hover:to-[#561ab1]
        hover:via-[#fb8463] hover:bg-gradient-to-l 
        */}
            
            <div className='flex flex-col md:px-5 lg:flex-row'>
               
                <div className='pb-10 md:px-5'>
                <Proj 
                title='Portfolio Website'
                dateStarted='December 2022 - Present'
                points={[
                'Modern, animated components styled in Tailwind CSS',
                'Next.js for optimized Server Side rendering',
                'TypeScript React for increased developer experience',
                ]}
                skillsEng={['Next.js', 'React.js']}
                icon={[
                <SiNextdotjs key={1} size={40} color='f89de8'/>,
                <SiReact key={2} size={40} color='f89de8'/>,
                ]}
                />
                </div>

                <div className='md:px-5 '>
                <Proj 
                title='Linear Regression Model'
                dateStarted='Coming Soon'
                points={[
                'Tensorflow, Armadillo, and Eigen to perform the linear algebra and machine learning operations.',
                ]}
                skillsEng={['C++', 'Tensorflow']}
                icon={[
                <SiCplusplus key={1} size={40} color='f89de8'/>,
                <SiTensorflow key={2} size={40} color='f89de8'/>,
                ]}
                />
                </div>
                

                
            </div>
        {/* <div className="flex flex-col items-center justify-center">
            <div className='max-w-md overflow-hidden rounded shadow-lg'>
                <MdOutlineFolderShared size={100} className='items-center p-5'/>
                <h1 className="text-center p-2 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#330677] to-[#f570f5]">Portfolio Website</h1>
                <p className='items-center mx-40 tracking-tighter text-2xl font-light text-[#919191] text-center]'>This website is built with Next.js and TailwindCSS</p>
            </div>

title,
  skillsEng,
  skillsUsed,
  dateStarted,
  points,


        </div> */}
    </div>
    );
  }
