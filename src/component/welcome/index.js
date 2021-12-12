import React from 'react'
import "./welcome.css"
const Welcome = () => {
  return (
    <section className='welcome layout'>
      {/* <div>
        <div>
          <span>Throw paperwork into the trash where it belongs.</span>
          <span>Eliminate all the hassle involved in managing people operations by automating it.</span>

        </div>
        <div >
          <img src='images/relax.svg' />
        </div>

      </div> */}

      <div className="welcome-side-1 side padd-1rem">
            <h3>Throw paperwork  into the trash where it belongs.</h3>
            <span>Eliminate all the hassle involved in managing  people operations by automating it.</span>
        </div>
        <div className="welcome-side-2 side">
             <img src='images/relax.svg'/>
        </div>

    </section>
  )
}

export default Welcome
