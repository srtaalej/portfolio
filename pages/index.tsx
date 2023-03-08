import React, {useState} from 'react'
import Navbar from '../components/nav_comp'
import Main from '../components/main'
import About from '../components/about_comp'
import SkillsSection from '../components/skills'
import Projects from '../components/projects_comp'
import Footer from '../components/footer'
import Contact from '../components/contact_comp'

type Props = {}

export default function index({}: Props) {
  
  return (
    <article className='w-screen bg-black min-h-max'> 
   {/* height of screen */}
      <Navbar/>
      <Main/>
      <About/>
      <SkillsSection/>
      <Projects/>
      <Contact/>
      <Footer/>
    </article>
  )
}

