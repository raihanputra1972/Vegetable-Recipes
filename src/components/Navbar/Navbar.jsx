import React from "react";
import "./Navbar.css";
import logoGreen from "../../assets/Photo/Logo/Vegetable Recipes green.png";

function navbar() {
  const handleNavigation = (event) => {
    const { value } = event.target;
    if (value) {
      window.location.href = value;
    }
  };

  return (
    <nav className="navbar">
      <a href="/">
        <img src={logoGreen} alt="Logo" />
      </a>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#recipes">Recipes</a>
          <select onChange={handleNavigation}>
            <option value="">Select Recipe</option>
            <option value="/StirFries">Stir-Fried Vegetables</option>
            <option value="/Salad">Salad Vegetables</option>
            <option value="/Soup">Soup Vegetables</option>
            <option value="/Grilled">Grilled Vegetables</option>
          </select>
        </li>
        <li>
          <a href="/About">About Us</a>
        </li>
      </ul>
    </nav>
  );
}

export default navbar;
