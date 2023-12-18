import TopBar from "./Komponenty/HlavnaStranka/TopBar";
import BottomBar from "./Komponenty/HlavnaStranka/BottomBar";
import Udaje from "./Komponenty/PlatbaStranka/Udaje";
import PlatbaDropDown from "./Komponenty/PlatbaStranka/PlatbaDropDown";
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

const Platba = () => {
    
    const [selected_platbu, setSelected_platbu] = useState("SPÔSOB PLATBY");

    const navigate = useNavigate();

    const handleSearchClick = () => {

        navigate(`/dokoncenie`);
      };
    return (
    
    
    <div>
        <TopBar></TopBar>
        <p className="search-plavby1">OSOBNÉ A KONTAKTNÉ ÚDAJE</p>
        <Udaje></Udaje>
        <p className="search-plavby1">PLATOBNÉ ÚDAJE</p>
        <PlatbaDropDown selected={selected_platbu} setSelected={setSelected_platbu} />
        <button className="platba-green-button" onClick={handleSearchClick}>DOKONČIŤ</button>  
        <BottomBar></BottomBar>
    </div>
)
}

export default Platba;