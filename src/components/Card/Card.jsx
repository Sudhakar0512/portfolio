import React from "react";
import "./Card.css";
import { Link } from "react-scroll";

const Card = ({emoji, heading, detail, color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <button className="c-button">
      <Link to="portfolio" spy={true} smooth={true}>
      Ctrl + O
      </Link></button>
    </div>
  );
};

export default Card;
