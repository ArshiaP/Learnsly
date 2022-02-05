import React from 'react';
import NavBar from '../NavBar/NavBar';
import './fp.css'

function ForgotPassword() {
  return (
    <div className='fp-page'>
      <NavBar/>
      <form className='fp-container'>
        <div className='fp-title'>Forgot Your Password?</div>
        <div className='fp-form'>
        <div className='fp-label' >Email</div>
        <input className='fp-input' type="text" name="email" />

        <div className='fp-label'>New Password</div>
        <input className='fp-input' type="password" name="newPassword"/>

        <div className='fp-label'>Confirm Password</div>
        <input className='fp-input' type="password" name="confirmPassword" />
        </div>
        <button type='submit' className='fp-button'>Reset Password</button>
      </form>
    </div>
  );
}

export default ForgotPassword;
