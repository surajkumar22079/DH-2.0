import React from 'react'
import { connect } from 'react-redux'
import './For_company.css'
import Jobternship from '../../Images/Jobternship.png'

export const For_company = () => {
  return (
    <div className='form_for_company'>

      <div className="nav_form">
        <img src={Jobternship} alt="logo" />
        <h1>Jobternship</h1>
      </div>
      <form action="submit" >
        <div className="row1 row_blocks">
          <div className="form_blocks">
            <label htmlFor="comp_name">Company's Name&#42;</label>
            <input type="text" id='comp_name' required />
          </div>
          <div className="form_blocks">
            <label htmlFor="representative_name">Representative's Name&#42;</label>
            <input type="text" id='representative_name' required />
          </div>
          <div className="form_blocks">
            <label htmlFor="contact_num">Contact No.(whatsapp preferably)&#42;</label>
            <input type="text" id='contact_num' required />
          </div>
        </div>
        <div className="row2 row_blocks">
          <div className="form_blocks">
            <label htmlFor="Intern_title">Internship Title&#42;</label>
            <input type="text" id='Intern_title' placeholder='Full stack Developer, data analyst, UI/UX designer etc ' required />
          </div>
          <div className="form_blocks">
            <label htmlFor="duration_months">Duration (months)&#42;</label>
            <input type="text" id='duration_months' required />
          </div>
          <div className="form_blocks">
            <label htmlFor="start_month">Starting Month&#42;</label>
            <input type="text" id='start_month' required />
          </div>
        </div>
        <div className="row3 row_blocks">
          <div className="form_blocks">
            <label htmlFor="mandatory_skills">Mandatory skills&#42;</label>
            <input type="text" id='mandatory_skills' placeholder='Digital marketing, graphic designing etc' required />
          </div>
          <div className="form_blocks">
            <label htmlFor="stipend_amount">Stipend Amount(INR/month)&#42;</label>
            <input type="text" id='stipend_amount' required />
          </div>
        </div>
        <div className="row4 row_blocks">
          <div className="form_blocks">
            <label htmlFor="duration_months">No. of positions&#42;</label>
            <input type="text" id='duration_months' placeholder='Digital marketing, graphic designing etc' required />
          </div>
          <div className="form_blocks">
            <label htmlFor="start_month">Work Mode &#42;</label>
            <input type="text" id='start_month' placeholder='Remote, In-office, flexible' required />
          </div>
        </div>
        <div className="row5 row_blocks">
          <div className="form_blocks">
            <label htmlFor="about_intern">About Internship&#42;</label>
            <textarea name="about_intern" id="about_intern" cols="90" rows="10" className='text_area'></textarea>
          </div>
        </div>
        <div className="row5 row_blocks">
          <button type="submit" className='submit_btn'>Submit</button>
          <button type="reset" className='clear_btn'>Clear all</button>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(For_company)