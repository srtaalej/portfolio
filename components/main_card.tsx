import React from 'react';

import { GiOrbital } from "react-icons/gi";
import {Typer} from 'react-easy-animations';


type Props = {}
const MyTyperComponent = () => {
  
  return (
      <Typer className='text-center md:text-start text-2xl md:text-3xl 
      text-transparent bg-clip-text bg-gradient-to-r 
      from-[#f570f5] to-[#fb8463] 
      mx-9 w-[300px] md:w-[480px] pt-10 md:pt-20'
          dataText={[
            'Hi! I am Maria,',
            'a passionate developer,',
            'turning ideas into reality,',
            ' one line at a time',
            
          ]}
      />
  )
}

const MainCard = ({

}: Props) => {
  return (

    <div className=''>
            <div className='flex flex-col items-center mx-10
    w-[300px] h-[370px]
    md:w-[740px] md:h-[250px]
    md:flex-row 
    lg:w-[990px] lg:h-[300px]
    xl:w-[1110px]'>
                <h1 className="hidden md:flex md:pb-0 text-6xl lg:text-7xl
                font-extrabold md:text-start
                text-transparent bg-clip-text 
                from-[#f570f5] to-[#f570f5] via-[#ffe5fa]
                bg-gradient-to-l
                ">Computer Science student/ Full-Stack Developer
                </h1>
                <h1 className="md:hidden text-6xl pb-10 
                font-extrabold text-center
                text-transparent bg-clip-text
                from-[#f570f5] to-[#f570f5] via-[#ffe5fa]
                bg-gradient-to-l">CS Student/ Developer</h1>
                <GiOrbital size={500} color="f570f5"/>
            </div>
          <MyTyperComponent/>

  </div>
   
  );
};

export default MainCard;


  
 