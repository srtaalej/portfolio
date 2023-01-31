import React, { JSXElementConstructor, ReactNode } from 'react';
import { motion } from 'framer-motion';

type Props = {};

interface CardProps {
  icon: React.ReactElement;
  title: string;
}

export default function Skill({ icon, title }: CardProps) {
  return (
    <motion.article
      whileHover={{ scale: 1.1 }}
      className='md:h-36 md:w-40 h-36 w-28
      flex flex-col items-center flex-shrink-0 justify-evenly 
      p-6
      rounded-2xl shadow-lg shadow-[#f570f5]
      hover:shadow-[#f570f5] hover:shadow-2xl
      hover:opacity-200 duration-300 

      font-bold text-transparent bg-clip-text
      from-[#f570f5] to-[#f570f5] via-[#ffe5fa] bg-gradient-to-l
      bg-[#1F1E1B] md:text-lg

      hover:text-transparent hover:bg-clip-text 
      hover:from-[#561ab1] hover:to-[#561ab1]
      hover:via-[#fb8463] hover:bg-gradient-to-l'
    >
      <div className='card-icon '>{icon}</div>
      <h1 className='p-3 text-base font-bold md:text-lg w-fit'>{title}</h1>
    </motion.article>
  );
}

// rounded-2xl shadow-lg shadow-[#f570f5]

