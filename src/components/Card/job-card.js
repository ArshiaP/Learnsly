import React from 'react';
import './job-card.css';
import { GiMoneyStack } from 'react-icons/gi';
import { BsHourglassSplit, BsFillCalendarWeekFill } from 'react-icons/bs';

function JobCard() {
  return <>
    <div className='job-card'>
      <div className='job-image'>
        <img src="https://pbs.twimg.com/media/FGWjelYXIA4oc_E?format=jpg&name=large" alt="job-image" />
      </div>
      <div className='job-details'>
        <div className='job-title'>
          Job Title | Company Name
        </div>
        <div className='extra-details'>
          <GiMoneyStack className='icon' />
          stipend
        </div>
        <div className='extra-details'>
          <BsHourglassSplit className='icon' />
          duration
        </div>
        <div className='extra-details'>
          <BsFillCalendarWeekFill className='icon' />
          last date to apply
        </div>
        <div className='job-tags'>
          <span className='tags'>tag1</span>
          <span className='tags'>tag1</span>
          <span className='tags'>tag1</span>
        </div>
      </div>
    </div>
    <hr className='job-card-line' />
  </>;
}

export default JobCard;
