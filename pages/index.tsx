import React, {useState} from 'react'
import Navbar from '../components/nav_comp'
import Main from '../components/main'
import About from '../components/about_comp'
import Skills from '../components/skills'
import Projects from '../components/projects_comp'
import Footer from '../components/footer'
import Contact from '../components/contact_comp'

type Props = {}

export default function index({}: Props) {
  
  return (
    <article className='min-h-max w-screen justify-between items-center flex flex-col bg-[#1F1E1B]'> 
   {/* height of screen */}
      <Navbar/>
      <Main/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </article>
  )
}

