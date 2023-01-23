import React from 'react'

import { About, Footer, Header, Experience, Project } from './container';
import { Navbar } from './components';
import './App.scss'

// work Experience - within skills section
//  Testimonials - removed

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Project />
      <Experience />
      <Footer />
    </div>
  )
}

export default App