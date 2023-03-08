import React from 'react';
import MainCard from './main_card';


type Props = {}



export default function Main({}: Props) {
  return (
    <div className='flex flex-col items-center w-screen h-full pt-10 mb-40 md:pt-20' >
      <MainCard/>
    </div>

  )
  
};
