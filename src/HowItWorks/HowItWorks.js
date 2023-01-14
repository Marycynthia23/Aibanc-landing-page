import * as React from 'react';
import mockup0 from "../Images/Rectangle.svg"
import "./HowItWorks.css"

const HowItWorks = () => {
      
  return (
    <div className='HowItWorks'>
        <div className="Leftcont">
            <h3 className="headline">Get the credit you need in
                5 minutes
            </h3>
            <div class="step">
   <div>
      <div class="circle">01</div>
   </div>
   <div>
      <div class="title">Register within minutes</div>
      <div class="caption">Tell us a few details about you to help us create your Carbon account quickly</div>
   </div>
</div>
<div class="step step-active">
   <div>
      <div class="circle">02</div>
   </div>
   <div>
      <div class="title">Activate credit limit</div>
      <div class="caption">Tell us a few details about you to help us create your Carbon account quickly.</div>
   </div>
</div>
<div class="step">
   <div className="circleCont">
      <div class="circle">03</div>
   </div>
   <div>
      <div class="title">Withdraw credit</div>
      <div class="caption">Tell us a few details about you to help us create your Carbon account quickly. </div>
   </div>
</div>

      
        </div>
        <div className="HowItWorksrightcont">
            <img src={mockup0} alt="" />
        </div>
    </div>
  )
}

export default HowItWorks