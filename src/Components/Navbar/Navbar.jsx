import React, { useState, useRef } from 'react'  
import './Navbar.css'
import logo from '../../assets/logo.png'
import nav_underline from '../../assets/nav_underline.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
export const Navbar = () => {  //mount this navbar component to APP.jsx
 //  Define state to track the current menu
  const [menu, setMenu] = useState('home');
  // creating a state variable

  // creating function for nav-open and for nav-close
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0"
  }
  const closeMenu = () => {
    menuRef.current.style.right = "-350px"  
  }

  return (
    <div className='navbar'>
        <img src={logo} alt=''/>
        <img src={menu_open} onClick={openMenu}  alt='' className='nav-mob-open'/>
        {/* add the menu for the navigation bar */}
        <ul ref={menuRef} className="nav-menu">
          <img src={menu_close} onClick={closeMenu} alt='' className='nav-mob-close'/>
          {/* applying on click property */}
            <li><AnchorLink className='anchor-link' href='#home'><p onClick={() => setMenu("home")}>Home</p></AnchorLink>{menu === 'home' ? <img src={nav_underline} alt='' /> : <></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setMenu("about")}>About me</p></AnchorLink>{menu === 'about' ? <img src={nav_underline} alt='' /> : <></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={() => setMenu("services")}>Services</p></AnchorLink>{menu === 'services' ? <img src={nav_underline} alt='' /> : <></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={() => setMenu("work")}>Portfolio</p></AnchorLink>{menu === 'work' ? <img src={nav_underline} alt='' /> : <></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink>{menu === 'contact' ? <img src={nav_underline} alt='' /> : <></>}</li>
        </ul>
        {/* create a contact me button */}
        <div className='nav-connect'>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With me</AnchorLink> {/* ✅ Moved text inside AnchorLink */}
        </div>
    </div>
  )
}
export default Navbar
