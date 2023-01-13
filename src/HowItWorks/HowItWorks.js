import React from 'react'
import "./HowItWorks.css"

const HowItWorks = () => {
  return (
    <div className='HowItWorks'>
        <div className="Leftcont">
            <h3 className="headline">Get the credit you need in
                5 minutes
            </h3>
            <div className='progress'>
                <ul className="progressbar">
                    <li className="progresslist">
                        <p className="progressnum">1</p>
                    </li>
                    <li className="progresslist">
                        <p className="progressnum">2</p>
                    </li>
                    <li className="progresslist">
                        <p className="progressnum">3</p>
                    </li>
                   
                </ul>
                <div className="colContainer">
                <div className='col'>
                    <h6 className="subheadline">Register within minutes</h6>
                    <p className="smalltext">Tell us a few details about you to help us create your Carbon account quickly.
                    </p>
                </div>
                <div className='col'>
                    <h6 className="subheadline">Register within minutes</h6>
                    <p className="smalltext">Tell us a few details about you to help us create your Carbon account quickly.
                    </p>
                </div>
                <div className='col'>
                    <h6 className="subheadline">Register within minutes</h6>
                    <p className="smalltext">Tell us a few details about you to help us create your Carbon account quickly.
                    </p>
                </div>
                </div>
            </div>
        </div>
        <div className="rightcont"></div>
    </div>
  )
}

export default HowItWorks