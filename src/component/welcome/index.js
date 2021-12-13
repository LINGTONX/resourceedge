import React from 'react'
import "./welcome.css"
import relax from "../../assest/images/relax.svg"
const Welcome = () => {
  return (
    <section className='welcome layout'>
      <div className="welcome-side-1 side padd-1rem">
        <h3>Bastard.</h3>
        <span>Eliminate all the hassle involved in managing  people operations by automating it.</span>
      </div>
      <div className="welcome-side-2 side">
        <img src={relax} />
      </div>

    </section>
  )
}

export default Welcome
