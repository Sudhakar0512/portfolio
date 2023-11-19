import React, { useContext } from "react";
import "./Portfolio.css";
import Sidebar from "../../img/eventplanner_pic.png";
import Ecommerce from "../../img/sriMurugan.png";
import GG from "../../img/GroveGood.png";
import TH from "../../img/TradeHarbour.png";
import NE from "../../img/NE.png";
import FoodApp from "../../img/foodApp.png";
import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span>Recent Projects</span>
      <span>Web Development</span>

      {/* grid */}
      <div className="portfolio-grid">
        <img src={TH} alt="" />
        <img src={Ecommerce} alt="" />
        <img src={GG} alt="" />
        <img src={FoodApp} alt="" />
        <img src={Sidebar} alt="" />
        <img src={NE} alt="" />

        {/* <img src={MusicApp} alt="" />
        <img src={HOC} alt="" />
        <img src={Sidebar} alt="" /> */}
      </div>
    </div>
  );
};

export default Portfolio;
