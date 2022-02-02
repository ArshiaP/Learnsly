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
          <AiFillInstagram color='white' size='20px' style={{
      margin:'0px 0.69vw',
    }}/>
          <AiOutlineTwitter color='white' size='20px' style={{
      margin:'0px 0.69vw',
    }} />
          <IoMdMail color='white' size='20px' style={{
      margin:'0px 0.69vw',
    }} />
          <AiFillLinkedin color='white' size='20px' style={{
      margin:'0px 0.69vw',
    }}/>
        </div>
      </div>
      <div className='footer-right'>
        <span className='foot-right-text'>Copyright Learnsly</span>
        <AiFillTrademarkCircle color='white' size='20px' style={{
      margin:'0.2vw 0.69vw',
    }}/>
        <div className='footer-line'></div>
        <span className='foot-right-text'>Privacy Policy</span>
        <div className='footer-line'></div>
        <span className='foot-right-text'>Terms and Conditions</span>

      </div>

    </div>

  )
}

export default Footer
