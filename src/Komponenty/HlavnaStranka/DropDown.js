// DropDown.js
import React, { useState } from 'react';
import DestinaciaDropDown from './DestinaciaDropDown';
import LodDropDown from './LodDropDown';
import OsobyDropDown from './OsobyDropDown';
import "./DropDown.css";


const DropDown = () => {
    const [selected_destinacia, setSelected_destinacia] = useState("VYBRAŤ DESTINÁCIU");
    const [selected_lode, setSelected_lode] = useState("VYBRAŤ LOD");
    const [selected_osoby, setSelected_osoby] = useState("VYBRAŤ");

    return (
        <div>
            <p className="search-nadpis">VYHĽADAŤ PLAVBU</p>
            <div className="search-rectangle">
                <div className="dropdown-row">
                    <DestinaciaDropDown selected={selected_destinacia} setSelected={setSelected_destinacia} />
                    <LodDropDown selected={selected_lode} setSelected={setSelected_lode} />
                    <OsobyDropDown selected={selected_osoby} setSelected={setSelected_osoby} />
                </div>
                <div className="dropdown-row">

                </div>
            </div>
        </div>
    );
}

export default DropDown;