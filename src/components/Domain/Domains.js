import { React, useState, useEffect } from 'react'
import './domains.css'
import {Carousel} from '../Carousel/Carousel';
import './carouselStyle.css'
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Switch from '../Switch/Switch';


function Domains() {
  let slides = [
    <img  src="https://picsum.photos/800/300/?random" alt="1" />,
    <img  src="https://picsum.photos/800/301/?random" alt="2" />  ,
    <img  src="https://picsum.photos/800/302/?random" alt="3" />  ,
    <img  src="https://picsum.photos/800/303/?random" alt="4" />  ,
    <img src="https://picsum.photos/800/304/?random" alt="5" />   ];

    return (
    <div className="page">
      <Footer/>
      <NavBar/>
      <Switch/>
      <div className="title">
        Domains To Earn From
      </div>
      <div className="content">
        <Carousel slides={slides}/>
      </div>
      
    </div>
      
  )
}

export default Domains
