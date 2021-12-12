import React from 'react'
import SectionHeading from '../../component/sectionHeaders'
import InfoContainer from '../../component/shortInfo'
import "./humanResources.css"
import hr1 from '../../assest/images/hr1.svg'
import hr2 from '../../assest/images/hr2.svg'
import hr3 from '../../assest/images/hr3.svg'
import dashpic from '../../assest/images/dashpic.svg'
const HumanResources = () => {
  return (
    <>
      <section className='human-resources'>
        <div className="layout">
          <div>
            <SectionHeading SecHeading={"Human Resources"} SecContent={"Onboard new employees, manage the employee lifecycle and measure employee performance."} />
          </div>
          <div>
            <InfoContainer InfoContent={"From Hiring & Onboarding to Retiring, the Resource Edge Employee Management module  eliminates all the complexities & paperwork involved in managing your team."}
              InfoHeading={"Employee Management"}
              imgSrc={hr1} />
            <InfoContainer InfoContent={"Manage and track employee performance with our easy-to-use tools for goal setting, performance agreements and performance reviews. "}
              InfoHeading={"Performance Management"}
              imgSrc={hr2} />
            <InfoContainer InfoContent={"Employees can request for paid time off, vacations, sick leaves or educational leaves and get approvals all within Resource Edge. HR managers can equally ensure compliance."}
              InfoHeading={"Paid time off"}
              imgSrc={hr3} />

          </div>
          <div>
            <img src={dashpic} />
          </div>
        </div>

      </section>
    </>
  )
}

export default HumanResources
