import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Product from './components/Product'
import Steps from './components/Steps'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <>
    <div class="container max-w-screen-xl mx-auto p-4">  
      <Header />
      <Hero />
      <Product />
      <Steps />
      <Testimonials />
    </div>
    </>
  )
}

export default App
