import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection'
import TestimonialsSection from './components/Testimonials'

import Footer from './components/Footer'
function App() {


  return (
    <>
   
  <Navbar />
  <HeroSection />
  <FeaturesSection />
     <TestimonialsSection />
     <Footer/>
  </>
  )
}

export default App
