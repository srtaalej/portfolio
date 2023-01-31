import React from 'react'

import Footer from '../components/footer';
import Navbar from '../components/nav_comp';
import About from '../components/about_comp'

type Props = {}

export default function index({}: Props) {


  return (
    <article className='min-h-max w-screen bg-[#1F1E1B]'> 
   {/* height of screen */}
      <Navbar/>
      <About/>
      <Footer />
    </article>
  )
}