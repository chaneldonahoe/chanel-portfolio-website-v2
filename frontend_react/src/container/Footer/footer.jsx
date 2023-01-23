import React, { useState, useEffect } from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import { images } from '../../constants';
import './footer.scss';

const Footer = () => {
  return (
    <>
      <h2 className="head-text">Lets have a chat!</h2>


      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:cdonahoe05#gmail.com" className='p-text'>cdonahoe05@gmail.com</a>
          <a href="https://www.linkedin.com/in/chanel-donahoe/">Message me on linkedin</a>
        </div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app-whitebg'
)