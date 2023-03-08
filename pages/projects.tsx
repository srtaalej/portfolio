import React from 'react'
import Navbar from '../components/nav_comp'
import Footer from '../components/footer'
import Projects from '../components/projects_comp'

type Props = {}

export default function index({}: Props) {


  return (
    <article className='w-screen bg-black min-h-max'> 
   {/* height of screen */}
      <Navbar/>
      <Projects/>
      <Footer />
    </article>
  )
}