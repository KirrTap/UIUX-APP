import React from 'react';
import { Link } from 'react-router-dom';
import "./TopBar.css";
import SearchBar from "./SearchBar";
import logoImage from "../Obrazky/logo.png";

const TopBar = () => {
  return(
    <div className="topbar">
      <div></div>
      <img className= "logo" src={logoImage} alt = "Logo"></img>
      <p className= "dream-cruise">DREAM CRUISE</p>
      <Link to="/vyhladavanie" className="destinacia">
        Destinácia
      </Link>
      <Link to="/info" className="info-o-loadiach">
      Informácie o Lodiach
      </Link>
      <SearchBar> </SearchBar>
    </div> 
  )
};

export default TopBar;



