import React from 'react'
// import the css file in this Hero component
import'./Hero.css'
import profile_img from '../../assets/profile.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
function Hero() {
  return (
    <div id='home'className='hero'>
        {/* add profile image here */}
        <img src={profile_img} alt=''/>
        <h1><span>I'm Sonam Kandari,</span> Software Engineer based in India</h1>
        <p>I am a Computer Science undergraduate with a strong focus on web development, Java programming, and problem-solving.</p>
        <div className="hero-action">
            {/* here we will create two action buttons */}
            <div className="hero-connect"><AnchorLink className='anchor-link'offset={50}href='#contact'>Connect with me</AnchorLink></div>
             <a 
  className="hero-resume" 
  href="/Resume.pdf" 
  download
>
  Download my resume
</a>

        </div>
    </div>
  )
}

export default Hero