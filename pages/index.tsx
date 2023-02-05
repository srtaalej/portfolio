import React, {useState} from 'react'
import Navbar from '../components/nav_comp'
import Main from '../components/main'
import About from '../components/about_comp'
import Skills from '../components/skills'
import Projects from '../components/projects_comp'
import Footer from '../components/footer'

type Props = {}

export default function index({}: Props) {
  
  return (
    <article className='h-screen justify-between items-center flex flex-col bg-[#1F1E1B]'> 
   {/* height of screen */}
      <Navbar/>
      <Main/>
      <Footer/>
    </article>
  )
}

