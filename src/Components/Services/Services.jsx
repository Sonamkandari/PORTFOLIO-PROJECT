import React from 'react'
//import your services css file here in this component
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
// import the service data from assets folder
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {
  return (
    // Adding html structure for this Services component
    <div id='services' className='services'>
        <div className="services-title">
            <h1>My Services</h1>
            <img src={theme_pattern} alt=''/>
        </div>
        <div className="services-container">
          {Services_Data.map((Service,index)=>{
            // return the different services
            return <div key={index} className='services-format'> 
            <h3>{Service.s_no}</h3>
            <h2>{Service.s_name}</h2>
            <p>{Service.s_desc}</p>
            <div className="services-readmore">
              <p>Read More</p>
              {/* add images here */}
               <img src={arrow_icon}alt=''/>
            </div>
            </div>
          })}
        </div>
    </div>
  )
}

export default Services