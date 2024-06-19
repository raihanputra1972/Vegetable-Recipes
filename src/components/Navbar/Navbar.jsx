import React from 'react'
import './Navbar.css'
import logoGreen from '../../assets/Photo/Logo/Vegetable Recipes green.png'

function navbar() {
  return (
    <nav className="navbar">
      <img src={logoGreen} alt="Logo" />
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#recipes">Recipes</a></li>
        <li><a href="#About">About Us</a></li>
      </ul>
    </nav>
  )
}

export default navbar