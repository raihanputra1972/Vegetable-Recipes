import React from "react";
import "./About.css";
import { aboutUs, Founder, Team, descTeam } from "./AboutData";

import Sponsors from "../../components/Sponsors/Sponsors";

function About() {
  return (
    <div className="about">
      <div className="about-row">
        <div className="about-us">
          <h1>About Us</h1>
          <p>{aboutUs.content}</p>
        </div>
        <div className="meet-founder">
          <h1>Meet The Founder</h1>
          <div className="founder">
            <img src={Founder.image} alt="" />
            <div className="name-desc">
              <h2>{Founder.name}</h2>
              <p>{Founder.desc}</p>
            </div>
          </div>
        </div>
        <div className="meet-team">
          <h1>Meet The Team</h1>
          <div className="desc-team">
            <p>{descTeam.contentTeam}</p>
            {Team.map((item, index) => {
              return (
                <div className="team" key={index}>
                  <h2>{item.name}</h2>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Sponsors />
    </div>
  );
}

export default About;
