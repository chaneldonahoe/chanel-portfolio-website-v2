import React from 'react'

import { About, Footer, Header, Skills, Testimonials, Project } from './container';
import { Navbar } from './components';
import './App.scss'

// work Experience
// projects

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Project />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App