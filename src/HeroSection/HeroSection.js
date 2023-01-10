import React from 'react'
import "./HeroSection.css"
const HeroSection = () => {
  return (
    <div>
        <section className="Herosection">
            <div className="leftcont">
                <div className="boldtext">Get the credit you deserve now.</div>
                <p className="mediumtext">Access credit at an affordable rate,
                manage your credit limit and earn 20% cashback on repayment.</p>
                <div className="btngoogle"></div>
            </div>
            <div className="rightcont">
                <div className="heromockup"></div>
            </div>
        </section>
        
        <section className="CreditSection">
            <div className="Creditleftcont">
                <div className="mockupleft"></div>
                </div>
            <div className="Creditrightcont">
                <p className="smallHeadline">Instant Credit</p>
                <div className="semiboldtext">Get the credit you need within a few minutes.</div>
                <p className="semimediumtext">Get credited directly into your bank account 
                within few mintues Get credited directly 
                into your bank account within few mintues</p>
                <div className="downloadNow"><a href="">Download Now</a></div>
            </div>
        </section>

        <section className="InterestSection">
           
            <div className="InterestRightcont">
                <p className="smallHeadline">Affordable interest rate</p>
                <div className="semiboldtext">Enjoy low interest rate </div>
                <p className="semimediumtext">We offer an affordable interest rate, so you can get up to 6 months credit with as low as 5% monthly interest.
                    Apply for a loan today and start enjoying </p>
                <div className="downloadNow"><a href="">Download Now</a></div>
            </div>
            <div className="InterestLeftCont">
                <div className="mockupright"></div>
            </div>
        </section>

        <section className="CashbackSection">
            <div className="CashBackleftcont">
                <div className="mockupleft"></div>
                </div>
            <div className="CashBackrightcont">
                <p className="smallHeadline">Cash Back</p>
                <div className="semiboldtext">Win a cashback reward when you pay back.</div>
                <p className="semimediumtext">Aibanc cashback reward service provides up to 5% cashback 
                    rewards when you repay your credit on or before the due date. </p>
                <div className="downloadNow"><a href="">Download Now</a></div>
            </div>
        </section>
        
    </div>
  )
}

export default HeroSection