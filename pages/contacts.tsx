import React from 'react'
import Navbar from '../components/nav_comp'
import Footer from '../components/footer'
import Contact from '../components/contact_comp'

type Props = {}

export default function index({}: Props) {


  return (
    <article className='h-max w-screen bg-[#1F1E1B]'> 
   {/* height of screen */}
      <Navbar/>
      <Contact/>
      <Footer/>
    </article>
  )
}