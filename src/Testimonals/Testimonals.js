import React from 'react'
import "./Testimonals.css"

const Testimonals = () => {
  return (
    <div className='TestmonalCont'>
       <div className="testDisplay">
       <h3 className="headline">What Our Users Think About Us</h3>
        <p className="smalltextcenter">"I recently downloaded your fintech app and have been using it to manage my finances. 
        I am impressed with the user-friendly interface and the variety of features it offers.."</p>
        <div>
            <div className="circle">img</div>
            <p className="client">Nneoma Chisom</p>
        </div>
       </div>
    </div>
  )
}

export default Testimonals