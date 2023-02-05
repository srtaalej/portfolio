import { motion } from 'framer-motion';
import React from 'react';

type Props = {};



const AboutCard = ({

}: Props) => {
  return (
    
    // <motion.div
    // initial={{ opacity: 0, scale: 0.5 }}
    // animate={{ opacity: 1, scale: 1 }}
    // transition={{
    //     duration: 1.5,
    //   }}
    // >
    
    <article
      className='flex flex-col items-center md:mx-20
        w-[330px] md:w-[600px] lg:w-[800px] xl:w-[1000px] 
        h-full md:h-fit lg:h-[420px] xl:h-[370px] 
        snap-center bg-[#1F1E1B]
        shadow-lg shadow-[#f570f5] rounded-xl
        text-[#ffe5fa]
        hover:text-transparent hover:bg-clip-text 
        hover:from-[#f570f5] hover:to-[#f570f5]
        hover:via-[#fb8463] hover:bg-gradient-to-l 

        hover:shadow-[#f570f5] hover:shadow-2xl
        hover:opacity-200 duration-300
        '
    >
        <p className='items-center m-10 text-2xl font-light tracking-tighter text-center '>
            Welcome to my portfolio website!
            My name is Maria and I&apos;m a 
            computer science student at CUNY Hunter College and a soon-to-be Software Engineer. 
            I&apos;ve been programming for a year now, 
            with my primary languages being C++ and Python. 
            With extensive experience in both languages, 
            I have been able to tackle a wide range of 
            projects and deliver high-quality, efficient code. 
            <br></br> 
            I&apos;ve become particularly interested in machine learning and AI because, 
            let&apos;s face it, robots are going to take over the world 
            and I want to be on their good side. 
            So, if you&apos;re looking for a developer who can not only code, 
            but also make you laugh, then you&apos;ve come to the right place. 
            Let&apos;s get started on this journey together, and who knows, 
            maybe I&apos;ll even teach my computer to tell jokes too...
        </p>
     
    </article>
  
    // </motion.div>
  );
};

export default AboutCard;