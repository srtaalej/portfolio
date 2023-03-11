// import React, { JSXElementConstructor, ReactNode } from 'react';
// import { motion } from 'framer-motion';

// type Props = {};

// interface CardProps {
//   icon: React.ReactElement;
//   title: string;
//   description: string;
//   className?: string;
// }

// export default function Proj({ icon, title, description}: CardProps) {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.1 }}
      
//       className='flex flex-col items-center bg-white hover:text-transparent hover:bg-clip-text hover:from-[#561ab1] hover:to-[#561ab1] hover:via-[#f570f5] hover:bg-gradient-to-l shadow-2xl hover:shadow-[#f570f5] shadow-slate-100 rounded-xl'
//     >
//       <div className='card-icon'>{icon}</div>
//       <h1 className='p-3'>{title}</h1>
//       <p className='p-3'>{description}</p>
//     </motion.div>
//   );
// }

import React from 'react';

type Props = {};

interface ProjectProps {
  title: string;
  skillsEng: string[];
  icon: React.ReactNode[];
  dateStarted: string;
  points: string[];
  className?: string;
}

const Proj = ({
  title,
  skillsEng,
  icon,
  dateStarted,
  points,
}: ProjectProps) => {
  return (
    <article
      className='flex flex-col items-center flex-shrink-0 justify-evenly 
      font-bold
       
       w-[340px] md:w-[400px] xl:w-[450px] h-[550px]
        snap-center bg-black

        rounded-2xl shadow-lg shadow-[#f570f5]
        text-transparent bg-clip-text
        from-[#f570f5] to-[#f570f5] via-[#ffe5fa] bg-gradient-to-l
        hover:text-transparent hover:bg-clip-text 
          hover:from-[#561ab1] hover:to-[#561ab1]
          hover:via-[#fb8463] hover:bg-gradient-to-l

        hover:shadow-[#f570f5] hover:shadow-2xl
        hover:opacity-200 duration-300'
    >

      
      <div className='px-[5%] items-center text-center'>

        <h1 className='mb-6 text-4xl font-bold tracking-tight'>
          {title}
        </h1>
        <p className='mt-1 text-lg font-bold md:text-2xl'>
          {skillsEng.map((skill) => ` |  ${skill}  | `)}
        </p>
        <div className='flex justify-center my-2 space-x-2'>
          {icon.map((skill) => skill)}
        </div>
        <p className='py-5 text-gray-300 uppercase font-lightbold'>{dateStarted}</p>
        <ul
          id="skill's list"
          className='ml-5 space-y-4 text-xs font-light text-start md:text-sm '
        >
          {points.map((point, index) => (
            <li key={`${index}`}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default Proj;