import React from 'react';
import './home.scss'

const HomePage = () => (
  <div className='homepage'>
    <h1>Welcome to my Homepage</h1>
    <div className='directory-menu'>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>Phones</div>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
     
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>Pc</div>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>Accessories</div>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;