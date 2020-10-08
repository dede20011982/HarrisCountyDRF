import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
    return (
        <div className='hero-container'>            
            <h1>Harris County Deputies Relief Fund Inc.</h1>
            <p>"We take care of our own"</p>
            <div className="hero-btns">
                <Button
                    className='btns1'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    INDIVIDUAL SUPPORTERS
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                    BUSINESS SUPPORTERS
                </Button>
            </div>
        </div>
    );    
}

export default HeroSection;