import React from 'react';
import "./course-card.css";
import { Rating } from '@mui/material';

function CourseCard() {
  return <>
    <div className='course-card'>
      <div className='course-image'>
        <img src="https://pbs.twimg.com/media/FGWjelYXIA4oc_E?format=jpg&name=large" alt="course-image" />
      </div>
      <div className='course-details'>
        <div className='course-title'>
          Course Name
        </div>
        <div className='extra-details institute-name'>
          institute name
        </div>
        <div className='extra-details rating'>
          4.8
          <Rating className='star-rating' size='small' name="read-only" value={3.8} precision={0.1} readOnly />
        </div>
        <div className='extra-details difficulty'>
          difficulty
        </div>
        <div className='course-tags'>
          <span className='tags'>tag1</span>
          <span className='tags'>tag1</span>
          <span className='tags'>tag1</span>
        </div>
      </div>
    </div>
    <hr className='course-card-line' />
  </>;
}

export default CourseCard;
