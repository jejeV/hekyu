import React from 'react'

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
        <div className="about__box">
            <i className="about__icon icon-game-controller"></i>

            <div>
                <h3 className="about__title">5</h3>
                <span className="about__subtitle">UI design</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-fire"></i>

            <div>
                <h3 className="about__title">10</h3>
                <span className="about__subtitle">Projects completed</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-cup"></i>

            <div>
                <h3 className="about__title">101</h3>
                <span className="about__subtitle">Cup of coffee</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-puzzle"></i>

            <div>
                <h3 className="about__title">111</h3>
                <span className="about__subtitle">Problem solved</span>
            </div>
        </div>
    </div>
  )
}

export default AboutBox