import React from 'react'
import content from './data'
import './domains.css'

const DomainContent = ({id,title,description,xIndex,index})=>{
  let position='nextSlide';
  if(xIndex===index){
    position='activeSlide'
  }
  if(xIndex === index - 1 || (index === 0 && xIndex === content.length - 1)){
    position = 'lastSlide'
   }
   return(
    <article className={position} key={id}>
      <h4 className='domainName'>{title}</h4>
      <p className='domainDescription'>{description}</p>
  </article>
   );
}
export default DomainContent;