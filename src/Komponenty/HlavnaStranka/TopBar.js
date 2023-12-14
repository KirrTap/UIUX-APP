import React from 'react';
import "./TopBar.css";
import { Link, useNavigate} from 'react-router-dom';
import SearchBar from "./SearchBar";
import logoImage from "../Obrazky/logo.png";



const TopBar = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };
  return(
    <div className="topbar">
      <Link to="/">
        <img className="logo" src={logoImage} alt="Logo" onClick={handleLogoClick} />
      </Link>
      <p className= "dream-cruise">DREAM CRUISE</p>
      <p className="destinacia">Destinácia</p>
      <p className="info-o-loadiach">Informácie o Lodiach</p>
      <SearchBar> </SearchBar>
    </div> 
  )
};

export default TopBar;




