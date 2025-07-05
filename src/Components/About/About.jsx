import React from 'react'
//importing about.cc file here
import './About.css'
//importing a theme pattern image
import theme_pattern from '../../assets/theme_pattern1.svg'
//importing a profile image
import profile2_img from '../../assets/profile2.png'
function About() {
  return (
    <div id='about' className='about'>
        {/*lets add the html structure for this About component */}
        <div className="about-tittle">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
         {/* creating a self section */}
         <div className="about-sections">
            <div className="about-left">
                {/* we will use a image in left*/}
                <img src={profile2_img} alt=''/>
            </div>
            <div className="right-section">
                {/* we will write some */}
                <div className="about-para">
                    <p>I have experience designing and implementing scalable solutions using Java, SQL, and advanced algorithms.</p>
                    <p>In addition, I am skilled in building responsive and user-friendly web applications using HTML, CSS, and JavaScript. I am eager to apply my skills to real-world projects and contribute to innovative and impactful solutions.</p>
                 </div>
                 <div className="about-skills">
                   <div className="about-skill"><p>Java </p><hr style={{width:"80%"}}/></div>
                   <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"60%"}}/></div>
                   <div className="about-skill"><p>Programming</p><hr style={{width:"70%"}}/></div>
                   <div className="about-skill"><p>SQL</p><hr style={{width:"50%"}}/></div>
                 </div>
            </div>
         </div>
        <div className="about-achievements">
           <div className="about-achievement">
            <h1>Internship</h1>
            <p>Salesforce Virtual Internship</p>
           </div>
            <hr/>
           <div className="about-achievement">
            <h1>Project completed</h1>
            <p>Turf Management System</p>
            <p>Bank Management System</p>
            <p>Airline  Management System</p>
           </div>
           <hr/>
           <div className="about-achievement">
            <h1>3+</h1>
            <p>Academic Tutor</p>
           </div>
        </div> 
    </div>
  )
}

export default About