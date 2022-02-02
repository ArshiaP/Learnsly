import React from 'react'
import { AiFillInstagram, AiOutlineTwitter, AiFillLinkedin,AiFillTrademarkCircle } from 'react-icons/ai'
import './footer.css'
import { IoMdMail } from 'react-icons/io'


function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-left'>
        <span className='foot-contact'>Contact us here</span>
        <div className='foot-social'>
          <AiFillInstagram className='foot-icons-left'/>
          <AiOutlineTwitter className='foot-icons-left'/>
          <IoMdMail className='foot-icons-left'/>
          <AiFillLinkedin className='foot-icons-left'/>
        </div>
      </div>
      <div className='footer-right'>
        <span className='foot-right-text'>Copyright Learnsly</span>
        <AiFillTrademarkCircle className='foot-icons-right'/>
        <div className='footer-line'></div>
        <span className='foot-right-text'>Privacy Policy</span>
        <div className='footer-line'></div>
        <span className='foot-right-text'>Terms and Conditions</span>

      </div>

    </div>

  )
}

export default Footer
