import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Product from './components/Product'
import Steps from './components/Steps'
import Testimonials from './components/Testimonials'
import CallToAction from './components/CTA'
import FrequentlyAskedQuestions from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Header />
    <Hero />
    <div class="container max-w-screen-xl mx-auto p-4">  
      <Product />
      <Steps />
      <Testimonials />
      <CallToAction />
      <FrequentlyAskedQuestions />
    </div>
    <Footer />
    </>
  )
}

export default App
