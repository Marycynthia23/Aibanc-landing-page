import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='NavContainer'>
         <div className="logo"><img/></div>
         <ul className="navmenu">
                <li><a href="">Our Company</a></li>
                <li><a href="">Contact us</a></li>
                <li><a href="">FAQs</a></li>
                <li><a href=""><img/>Google</a></li>
         </ul>
    </div>
    
  )
}

export default Navbar