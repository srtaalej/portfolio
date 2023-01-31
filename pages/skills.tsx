import React from 'react'
import Navbar from '../components/nav_comp'
import Footer from '../components/footer'
import SkillsSection from '../components/skills'
type Props = {}

export default function index({}: Props) {
  return (
    <article className='min-h-max w-screen bg-[#1F1E1B]'> 
      <Navbar/>
      <SkillsSection />

      <Footer />
    </article>

  )
}

