import React from 'react'
import Navbar from '../components/nav_comp'
import Footer from '../components/footer'
import SkillsSection from '../components/skills'
type Props = {}

export default function index({}: Props) {
  return (
    <article className='w-screen bg-black min-h-max'> 
      <Navbar/>
      <SkillsSection />

      <Footer />
    </article>

  )
}

