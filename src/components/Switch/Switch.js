import React from 'react';
import { BsArrowRight } from 'react-icons/bs'
import { IoMdChatbubbles } from 'react-icons/io'
import './switch.css'

function Switch() {
  return (
    <div className='switch-container'>
      <div className='switch-left'>
        <span className='switch-text'>Switch to Earn</span>
        <BsArrowRight className='switch-arrow' />
      </div>
      <div className='switch-right' >
        <IoMdChatbubbles className='switch-chat'/>
      </div>
    </div>
  );
}

export default Switch;
