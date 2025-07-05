import React, { useState } from 'react'; 
//import css file here
import './Contact.css';
//import the pattern image here
import theme_pattern from '../../assets/theme_pattern1.svg'
// importing some icons
import location_icon from '../../assets/location_icon.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call__icon from '../../assets/call_icon.svg'

function Contact() {
  
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "2d872372-272c-4f51-9718-db8068a1f401"); // ✅ Add your real Web3Forms access key

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message || "Submission failed.");
    }
  };

  return (
    <div id='contact' className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt='' />
      </div>

      <div className="Contact-sections">
        <div className="Contact-left">
          <h1>Let's talk</h1>
          <p>I'm currently free to take on work. If you have any project or role that fits, I'd love to hear from you!</p>
          <div className="Contact-details">
            <div className="Individual-Detail">
              <img src={mail_icon} alt='' /><p>sonamkandari@gmail.com</p>
            </div>
            <div className="Individual-Detail">
              <img src={call__icon} alt='' /><p>xxxxxxxxxx</p>
            </div>
            <div className="Individual-Detail">
              <img src={location_icon} alt='' /><p>Tunuwala Bangkhala, Raipur, Dehradun</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="Contact-right">
          <label htmlFor='name'>Your Name</label>
          <input id='name' type='text' placeholder='Enter your name' name='name' required />
          <label htmlFor='email'>Your Email</label>
          <input id='email' type='email' placeholder='Enter your email' name='email' required />
          <label htmlFor='message'>Write Your Message here</label>
          <textarea id='message' name='message' rows="8" placeholder='Enter your message' required></textarea>
          <button type='submit' className='Contact-Submit'>Submit now</button>
          <p>{result}</p>
        </form>
      </div>
    </div>
  )
}

export default Contact;
