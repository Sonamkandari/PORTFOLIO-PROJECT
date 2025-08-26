import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/myWork'
import Contact from './Components/Contact_Section/Contact'
import Footer from './Components/Footer-Section/Footer'
import SocialMedia from './Components/Social_Links/SocialMedia'

function App() {
  return (
    <div>
      {/* Mount the Navbar component in this App .jsx file*/}
      <Navbar />
      {/* mount the hero component in this App.jsx file */}
      <Hero />
      {/* mount the about component in this App.jsx file*/}
      <About />
       {/* mount the MyWork component in this App.jsx file */}
      <MyWork />
      {/* mount the Services component in this App.jsx file */}
      <Services />
     
      {/* mount the socialLinks component here */}
      <SocialMedia/>
      {/* mount the Contact component here */}
      <Contact />
      {/* mount the footer component here */}
      <Footer/>
      
    </div>

  )
}

export default App