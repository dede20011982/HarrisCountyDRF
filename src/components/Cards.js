import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Our Purpose</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="assets/deputies.jpg"
                        text="blah blah blah"                       
                        />
                        <CardItem 
                        src="assets/bg-masthead.jpg"
                        text="blah blah blah"                        
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src="assets/disaster.jpg"
                        text="Disater Support"                       
                        />
                        <CardItem 
                        src="assets/injury.png"
                        text="Injury Support"                        
                        />
                         <CardItem 
                        src="assets/family.jpg"
                        text="Family Support"                        
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;