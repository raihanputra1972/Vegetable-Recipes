import React, { useState } from "react";
import "./StirFries.css";
import { Recipe } from "./StirFriesData";

import logoTime from "../../assets/Photo/Logo/clock.png";
import logoDiff from "../../assets/Photo/Logo/cook.png";

function StirFries() {
  const [query, setQuery] = useState("");

  console.log(query);
  return (
    <div className="StirFries">
      <p>Vegetable Stir-Fries</p>
      <input
        type="text"
        placeholder="Search..."
        className="search-bar"
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="recipes">
        {Recipe.filter((item) =>
          item.Title.toLowerCase().includes(query.toLowerCase())
        ).map((item) => (
          <div className="recipe" key={item.Title}>
            <img src={item.Image} alt="" />
            <div className="title-desc">
              <h1>{item.Title}</h1>
              <h2>{item.Desc}</h2>
              <div className="detail">
                <div className="time">
                  <img src={logoTime} alt="Time" />
                  <h3>{item.Time}</h3>
                </div>
                <div className="diff">
                  <img src={logoDiff} alt="Difficulty" />
                  <h3>{item.Diff}</h3>
                </div>
                <button className="button-48" role="button">
                  <span className="text">See Recipe</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StirFries;
