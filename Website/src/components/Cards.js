import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out this epic Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src="images/img-1.jpg"
                        text="Explore the hidden beauty of NFT's picture"
                        label='The path to infinty'
                        path='explore'
                        />
                        <CardItem
                        src="images/img-3.jpg"
                        text="You are bored? Come and see adorable CryptoKitties :D"
                        label='Meow!'
                        path='explore'
                        />                    
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        src="images/img-5.jpg"
                        text="Digital art is your passion, why don't you become modern Picasso"
                        label='New Art Dimension'
                        path='explore'
                        />
                        <CardItem
                        src="images/img-3.jpg"
                        text="You have legendary skin and you need money. No problem, NFT's are here!"
                        label='Game Time'
                        path='explore'
                        />       
                         <CardItem
                        src="images/img-11.jpg"
                        text="Just ordinary guy with nice photos, let's change that!"
                        label='Local photographer'
                        path='explore'
                        />         
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards 

