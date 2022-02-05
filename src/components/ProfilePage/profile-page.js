import React from 'react';
import "./profile-page.css";
import { BiEdit } from 'react-icons/bi';

function ProfilePage() {
  return <>
    <div className='profile'>
      <div className="circle">
        ss
      </div>
      <div className="upper">
        <div className="name">shreyas shah<BiEdit className='edit-name' /></div>
      </div>
      <div className="lower">
        <div className="username">shreyaslshah<BiEdit className='edit-username' /></div>
        <div className="email">shreyaslshah@gmail.com</div>
        <div className="change-password">Change Password</div>
      </div>
    </div>
  </>;
}

export default ProfilePage;
