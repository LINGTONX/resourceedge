import React from 'react'
import SectionHeading from '../../component/sectionHeaders'
import InfoContainer from '../../component/shortInfo'
import "./adminLogistics.css"
import travel from '../../assest/images/travel.svg'
import caseImg from '../../assest/images/case.svg'
import rev from '../../assest/images/rev.svg'
import payrol from '../../assest/images/payroll.svg'
import finan from '../../assest/images/finan.svg'
import tl from '../../assest/images/tl.png'
import image7 from '../../assest/images/image 7.png'
import image6 from '../../assest/images/image 6.png'
import image9 from '../../assest/images/image 9.png'
import image10 from '../../assest/images/image 10.png'
const AdminAndLogistics = () => {
  return (
    <section className='admin-logistic layout'>
      <div>
        <div>
          <SectionHeading SecHeading={"Admin & Logistics"} SecContent={"Manage and track company assets as well as logistics for travelling employees"} />
          <InfoContainer InfoHeading={"Travel & Logistics"} imgSrc={travel} InfoContent={"Make travel requests, get approvals, and have access to travel information."} />
          <InfoContainer InfoHeading={"Asset Management"} imgSrc={caseImg} InfoContent={"Manage the acquisition, assignment, and disposition of assets seamlessly."} />
        </div>
        <div>
          <img src={tl} />
        </div>
      </div>
      <div>
        <div>
          <SectionHeading SecHeading={"Finance"} SecContent={"Generate invoices, track expenditure, and manage complex payrolls for multiple teams and companies"} />
          <InfoContainer InfoHeading={"RE Vouchers"} imgSrc={rev} InfoContent={"Track and manage expenditure for multiple teams across your organisation using Resource Edge Vouchers."} />
          <InfoContainer InfoHeading={"Payroll"} imgSrc={payrol} InfoContent={"Our easy to use systems takes away the pain of managing complex payrolls for organisations of all sizes."} />
        </div>
        <div>
          <img src={finan} />
        </div>
      </div>
      <div className='clients layout'>
        <div>
          <img src={image7} />
        </div>
        <div>
          <img src={image6} />
        </div>
        <div>
          <img src={image9} />
        </div>
        <div>
          <img src={image10} />
        </div>

      </div>
    </section>
  )
}

export default AdminAndLogistics
