import React from 'react';
import './subdomains.css'
import Footer from '../Footer/Footer';
import { AiOutlineSearch } from 'react-icons/ai'
import Switch from '../Switch/Switch';
import NavBar2 from '../NavBar2/NavBar2';

function Subdomains() {

  const n = 8;
  return (
    <div className='sd-page'>
      <Footer />
      <Switch />
      <div className='sd-header'>
        <NavBar2 />
        <div className='sd-title'>Browse Opportunities in Machine Learning</div>
        <input type="text" className='sd-search' placeholder='Where do you want to earn from' name='sd' />
        <AiOutlineSearch className='sd-icon' />
      </div>
      <div className='sd-content'>
        <div className='sd-row1 sd-row'>
          {
            Array.apply(null, { length: 10 }).map((e, i) => (
              <li className="sd-topics" key={i}>
                Lorem Ipsum
              </li>

            ))
          }
        </div>
        <div className='sd-row2 sd-row'>
          {
            Array.apply(null, { length: 10 }).map((e, i) => (
              <li className="sd-topics" key={i}>
                Lorem Ipsum
              </li>

            ))
          }
        </div>
        <div className='sd-row3 sd-row'>
          {
            Array.apply(null, { length: 10 }).map((e, i) => (
              <li className="sd-topics" key={i}>
                Lorem Ipsum
              </li>

            ))
          }
        </div>
        <div className='sd-row4 sd-row'>
          {
            Array.apply(null, { length: 10 }).map((e, i) => (
              <li className="sd-topics" key={i}>
                Lorem Ipsum
              </li>

            ))
          }
        </div>

      </div>
    </div>
  );
}

export default Subdomains;
