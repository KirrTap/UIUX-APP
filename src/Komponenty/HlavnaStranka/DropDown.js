import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import DestinaciaDropDown from './DropDownFile/DestinaciaDropDown';
import LodDropDown from './DropDownFile/LodDropDown';
import OsobyDropDown from './DropDownFile/OsobyDropDown';
import DlzkaPlavbyDropDown from './DropDownFile/DlzkaPlavbyDropDown';
import Termin from './DropDownFile/Termin';

import "./DropDown.css";


const DropDown = () => {
    const [selected_destinacia, setSelected_destinacia] = useState("VYBRAŤ DESTINÁCIU");
    const [selected_lode, setSelected_lode] = useState("VYBRAŤ LOD");
    const [selected_osoby, setSelected_osoby] = useState("VYBRAŤ");
    const [selected_dlzka, setSelected_dlzka] = useState("VYBRAŤ");
    const [selected_termin, setSelected_termin] = useState("VYBRAŤ TERMÍN");

    const navigate = useNavigate();

    const handleSearchClick = () => {
        const searchParams = new URLSearchParams();
        searchParams.append("destinacia", selected_destinacia);
        searchParams.append("lode", selected_lode);
        searchParams.append("osoby", selected_osoby);
        searchParams.append("dlzka", selected_dlzka);
        searchParams.append("termin", selected_termin);
        navigate(`/vyhladavanie?${searchParams.toString()}`);
      };
    

    return (
        <div>
            <div className="search-rectangle">
                <div className="dropdown-row">
                    <DestinaciaDropDown selected={selected_destinacia} setSelected={setSelected_destinacia} />
                    <LodDropDown selected={selected_lode} setSelected={setSelected_lode} />
                    <OsobyDropDown selected={selected_osoby} setSelected={setSelected_osoby} />
                </div>
                <div className="dropdown-row">
                    <DlzkaPlavbyDropDown selected={selected_dlzka} setSelected={setSelected_dlzka} />
                    <Termin selected={selected_termin} setSelected={setSelected_termin} />

                </div >
                <div className="dropdown-row">   
                    <button className="green-button" onClick={handleSearchClick}>VYHĽADAŤ</button>  
                </div>
                    
            </div>
        </div>
    );
}

export default DropDown;