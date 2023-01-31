import React from 'react';

import MySvgComponent from './mysvg';
type Props = {};

const MainCard = ({

}: Props) => {
  return (

    <article className='flex flex-col items-center justify-center mx-10
    w-[300px] h-[370px]
    md:w-[740px] md:h-[250px]
    md:flex-row md:items-start md:justify-start 
    lg:w-[990px] lg:h-[300px]
    xl:w-[1110px]'>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl 
            font-extrabold md:text-start text-center
            text-transparent bg-clip-text 
            from-[#f570f5] to-[#f570f5] via-[#ffe5fa]
            bg-gradient-to-l my-10
            ">Software Engineer/ Computer Science student
            </h1>
            <MySvgComponent/>
 
  </article>
   
  );
};

export default MainCard;


  
 