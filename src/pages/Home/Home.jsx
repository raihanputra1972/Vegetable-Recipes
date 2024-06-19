import React from 'react'
import './Home.css'
import mainSaladImage from '../../assets/Photo/mainSalad.png'
import cardImage1 from '../../assets/Photo/Cards/Vegetable Stir-Fries1.png'
import cardImage2 from '../../assets/Photo/Cards/salads1.png'
import cardImage3 from '../../assets/Photo/Cards/Soups1.png'
import cardImage4 from '../../assets/Photo/Cards/Grilled Vegetables1.png'
import Sponsors from '../../components/Sponsors/Sponsors'

function Home() {
    return (
    <div className='home'>
        <div className="hero">
            <div className='hero-image'>
                <div className='hero-rectangle'></div>
                <img src={mainSaladImage} alt="Main Salad" />
            </div>
            <div className="title">
                <h1>Vegetable Recipes</h1>
                <h2>For Your Health</h2>
                <h3>Vegetarian food is a type of food made from plant-based sources without the inclusion of meat, fish, or other animal products.</h3>
            </div>
        </div>
        <div className="recipe-categories">
            <div className='recipe-categories-title'>
                <h1>Recipe by Categories</h1>
                <h2>You can choose recipes based on your preferences more easily with categories</h2>
            </div>
            <div className='cards'>
                <div className='card' style={{backgroundColor: '#FADE9F'}}>
                    <p>Vegetable Stir-fries</p>
                    <img src={cardImage1} alt="Vegetable Stir-Fries" />
                </div>
                <div className='card' style={{backgroundColor: '#E9EED6'}}>
                    <p>Salad Vegatables</p>
                    <img src={cardImage2} alt="Vegetable Stir-Fries" />
                </div>
                <div className='card' style={{backgroundColor: '#EDAD7B'}}>
                    <p>Soup Vegatables</p>
                    <img src={cardImage3} alt="Vegetable Stir-Fries" />
                </div>
                <div className='card'style={{backgroundColor: '#B1A079'}}>
                    <p>Grilled Vegatables</p>
                    <img src={cardImage4} alt="Vegetable Stir-Fries" />
                </div>
            </div>
        </div>
        <Sponsors/>
    </div>
    )
}

export default Home