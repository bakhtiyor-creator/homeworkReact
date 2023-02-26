import React from 'react'
import './Footer.css'
import png from './screen.png'

const Footer = () => {
  return (
    <div className='all'>
      <div className="right">
        <h3>
          Join 100 Compannies who <br /> boost their business with <br /> Product
        </h3>
        <button>Get This</button>
      </div>
      <div className="left"><img src={png} alt="" /></div>
    </div>
  );
}

export default Footer