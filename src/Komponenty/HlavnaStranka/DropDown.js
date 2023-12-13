import React, { useState } from 'react';
import DestinaciaDropDown from './DropDownFile/DestinaciaDropDown';
import LodDropDown from './DropDownFile/LodDropDown';
import OsobyDropDown from './DropDownFile/OsobyDropDown';
import DlzkaPlavbyDropDown from './DropDownFile/DlzkaPlavbyDropDown';

import "./DropDown.css";

const DropDown = () => {
    const [selected_destinacia, setSelected_destinacia] = useState("VYBRAŤ DESTINÁCIU");
    const [selected_lode, setSelected_lode] = useState("VYBRAŤ LOD");
    const [selected_osoby, setSelected_osoby] = useState("VYBRAŤ");
    const [selected_dlzka, setSelected_dlzka] = useState("VYBRAŤ");

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
                    <DlzkaPlavbyDropDown selected={selected_dlzka} setSelected={setSelected_dlzka} />

                </div>
            </div>
        </div>
    );
}

export default DropDown;