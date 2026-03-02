import { useState } from 'react'
import './App.css'
import Navbar from './Components/NavBar'
import ImageCarousel from './Components/ImageCarousel'
import SymptomForm from './Components/SymptomForm'
import InfoCards from './Components/InfoCards'
import ContactSection from './Components/ContactSection'

function App() {

  return (
    <>
    <Navbar />
    <main className="page-content">
    <ImageCarousel />
    </main>
      <SymptomForm />
      <InfoCards /> 
      <ContactSection />
    </>
  )
}

export default App
