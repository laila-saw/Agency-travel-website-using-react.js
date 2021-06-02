import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/My Video.mp4' autoPlay loop muted />
      <h1>WELCOME TO OUR AGENCY SAW FOR TRAVEL</h1>
      <p>here you will find the best places to spend your holidays</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='fa fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
