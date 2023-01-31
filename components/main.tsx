import React from 'react';
import MainCard from './main_card';
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
            'a Full Stack Developer',
            'turning your ideas into reality,',
            ' one line at a time',
            
          ]}
      />
  )
}



export default function Main({}: Props) {
  return (
    <div className='flex flex-col h-full pt-10 md:pt-20' >
      <MainCard/>
      <MyTyperComponent/>
    </div>

  )
  
};
