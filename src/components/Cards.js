import React from 'react';
import '../App.css';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destination!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                    <CardItem
              src='images/img-9.jpg'
              text='The modern central core of Agadir has a few interesting monuments that make a nice diversion from sunbathing.'
              label='Agadir'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='For lovers of desert and oasis tourism, the city of Errachidia is en route to the sand dunes near the picturesque village of Merzouga'
              label='Errachidia'
              path='/services'
            />
            <CardItem
              src='images/img-3.jpg'
              text='Have you ever visited a new place and felt ‘wow’ about it? For many visitors, it happens at Ouarzazate.'
              label='Ouarzazate'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text=' The ochre city of Morocco, invites you to discover its festive Jamaa El-fena square,'
              label='Marrakech'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Is a city with a special vibes. It unique charm gives an impression of unreality.'
              label='Chefchaouen'
              path='/sign-up'
            />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
