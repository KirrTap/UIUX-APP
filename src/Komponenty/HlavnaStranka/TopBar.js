import React from 'react';
import "./TopBar.css";
import SearchBar from "./SearchBar";
import logoImage from "../Obrazky/logo.png";

const TopBar = () => {
  return(
    <div className="topbar">
      <div></div>
      <img className= "logo" src={logoImage} alt = "Logo"></img>
      <p className= "dream-cruise">DREAM CRUISE</p>
      <p className="destinacia">Destinácia</p>
      <p className="info-o-loadiach">Informácie o Lodiach</p>
      <SearchBar> </SearchBar>
    </div> 
  )
};

export default TopBar;



