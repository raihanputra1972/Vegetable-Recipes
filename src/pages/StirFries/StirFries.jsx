import React, { useState } from "react";
import "./StirFries.css";
import { Recipe } from "./StirFriesData";

import logoTime from "../../assets/Photo/Logo/clock.png";
import logoDiff from "../../assets/Photo/Logo/cook.png";

function StirFries() {
  const [query, setQuery] = useState("");
  const [activeRecipe, setActiveRecipe] = useState(null);

  const closePopup = () => {
    setActiveRecipe(null);
  };

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
        ).map((item, key) => (
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
                <div>
                  <button
                    className="button-48"
                    role="button"
                    onClick={() => {
                      setActiveRecipe(activeRecipe === key ? null : key);
                    }}
                  >
                    <span className="text">See Recipe</span>
                  </button>
                </div>
              </div>
              <div className={`pop-up ${activeRecipe === key ? "active" : ""}`}>
                {activeRecipe === key && (
                  <div>
                    <button className="close-btn" onClick={closePopup}>
                      &times;
                    </button>
                    <div>{item.Recipe}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {activeRecipe !== null && (
        <div className="overlay active" onClick={closePopup}></div>
      )}
    </div>
  );
}

export default StirFries;
