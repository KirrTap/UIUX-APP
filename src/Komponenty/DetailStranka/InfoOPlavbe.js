import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from "react";
import "./InfoOPlavbe.css";
import Kajuta from './Kajuta';

const InfoOPlavbe = () => {
  const [selected_cena, setSelected_cena] = useState("VYBRAŤ KAJUTU");

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const destinacia = searchParams.get('destinacia');
  const lod = searchParams.get('lod');
  const osoby = searchParams.get('osoby');
  const dlzka = searchParams.get('dlzka');
  const termin = searchParams.get('termin');

  const isButtonDisabled = selected_cena === "VYBRAŤ KAJUTU";
  
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (!isButtonDisabled) {
        navigate('/platba');
    }
    return
  };

  return (
    <div className="info-container">
      <div className="info-rectangle">
        <div className="info-text-container">
          <p><strong>Destinácia: </strong>{destinacia}</p>
          <p><strong>Loď: </strong>{lod}</p>
          <p><strong>Termín: </strong>{termin}</p>
          <p><strong>Dĺžka: </strong>{dlzka}</p>
          <p><strong>Počet osôb: </strong>{osoby}</p>
        </div>
        <div className="info-text-container1">
          <Kajuta selected={selected_cena} setSelected={setSelected_cena} />
        </div>
        <div className="kajuta-button">
          <button
            className="kajuta-rectangle-button" 
            disabled={isButtonDisabled}
            onClick={handleButtonClick}
          >
            REZERVÁCIA PLAVBY
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoOPlavbe;
