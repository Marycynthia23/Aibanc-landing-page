import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../Images/logo.png"
import googleplay from "../Images/googleplay.png"

const Navbar = (isOpen) => {
  const[openNav,setOpenNav] = useState(false);
  // const[closeNav, setCloseNav] = useState(false);

const handleToggleClick =()=>{
  setOpenNav(!openNav)
}

  return (
    <div className='NavContainer'>
         <div className="logo"><img src={logo} alt="logo" /></div>
         <nav onClick={handleToggleClick}>
        <div className="main-nav"  isOpen={openNav}>
            <div className="line burger1"></div>
            <div className="line burger2"></div>
            <div className="line burger3"></div>
        </div>
        <ul class="nav-links">
        <li><a href="">Our Company</a></li>
                <li><a href="">Contact us</a></li>
                <li><a href="">FAQs</a></li>
                <li className='googleLink'>
                  <div className='googleBg'>
                    <img src={googleplay}/>
                    <div className='textgoogle'>
                      <p className='googleSm'>GET IT ON</p>
                      <p className='googleLg'>Google Play</p>
                    </div>
                  </div>
                  </li>
        </ul>
    </nav>
    {/* <style jsx>{`
    .burger1{
      transform:${isOpen ? 'rotate(45deg)' : 'rotate(0)'};

    }
    .burger2{
      transform: ${isOpen ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${isOpen ? 0 : 1};

    }
    .burger3{
      transform:${isOpen ? 'rotate(-45deg)' : 'rotate(0)'};

    }
    `}
    </style> */}
             {/* <ul className="navmenu">
                <li><a href="">Our Company</a></li>
                <li><a href="">Contact us</a></li>
                <li><a href="">FAQs</a></li>
                <li className='googleLink'>
                  <div className='googleBg'>
                    <img src={googleplay}/>
                    <div className='textgoogle'>
                      <p className='googleSm'>GET IT ON</p>
                      <p className='googleLg'>Google Play</p>
                    </div>
                  </div>
                  </li>
         </ul> */}
    </div>
    
  )
}

export default Navbar