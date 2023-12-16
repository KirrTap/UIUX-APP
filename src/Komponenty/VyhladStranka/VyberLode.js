import "./VyberLode.css";
import React from 'react';
import { useLocation, useNavigate} from 'react-router-dom';

import symphonyLod from "../Obrazky/symphonyLod.png";
import oasisLod from "../Obrazky/oasisLod.png";
import jewelLod from "../Obrazky/jewelLod.png";

import LupaObrazok from "../Obrazky/lupa.png";

const VyberLode = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
  
    const destinacia = searchParams.get('destinacia');
    const lode = searchParams.get('lode');
    const osoby = searchParams.get('osoby');
    const dlzka = searchParams.get('dlzka');
    const termin = searchParams.get('termin');

    const navigate = useNavigate();

    const randomLod = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    };
    const randomIndexDestinacia = randomLod(0, 6);
    const randomIndexLod = randomLod(0, 3);
    const randomIndexOsoby = randomLod(0, 3);
    const randomIndexDlzka = randomLod(0, 3);
    const randomIndexTermin = randomLod(0, 3);
    const randomIndexCena = randomLod(650, 1320);


    const getLodObrazok = () => {
        if (lode === "SYMPHONY") {
            return symphonyLod;
        } 
        else if (lode === "OASIS") {
            return oasisLod;
        }
        else if (lode === "JEWEL") {
            return jewelLod;
        }
        else{
            if (randomIndexLod === 0) {
                return symphonyLod;
            }
            else if (randomIndexLod === 1) {
                return oasisLod;
            }
            else if (randomIndexLod === 2) {
                return jewelLod;
            }
        }
    };

    const getLodNapis = () => {
        if (lode === "SYMPHONY") {
            return "SYMPHONY OF THE SEAS";
        } 
        else if (lode === "OASIS") {
            return "OAIS OF THE SEAS";
        }
        else if (lode === "JEWEL") {
            return "JEWEL OF THE SEAS";
        }
        else{
            if (randomIndexLod === 0) {
                return "SYMPHONY OF THE SEAS";
            }
            else if (randomIndexLod === 1) {
                return "OAIS OF THE SEAS";
            }
            else if (randomIndexLod === 2) {
                return "JEVEL OF THE SEAS";
            }
        }
    };

    const getLodDestinacia = () => {
        if(destinacia === "AUSTRÁLIA"){
            return destinacia;
        }
        else if(destinacia === "BAHAMY"){
            return destinacia;
        }
        else if(destinacia === "ČÍNA"){
            return destinacia;
        }
        else if(destinacia === "GRÉCKO"){
            return destinacia;
        }
        else if(destinacia === "KARIBIK"){
            return destinacia;
        }
        else if(destinacia === "TALIANSKO"){
            return destinacia;

        }
        else{
            if (randomIndexDestinacia === 0) {
                return "AUSTRÁLIA";
            }
            else if (randomIndexDestinacia === 1) {
                return "BAHAMY";
            }
            else if (randomIndexDestinacia === 2) {
                return "ČÍNA";
            }
            else if (randomIndexDestinacia === 3) {
                return "GRÉCKO";
            }
            else if (randomIndexDestinacia === 4) {
                return "KARIBIK";
            }
            else if (randomIndexDestinacia === 5) {
                return "TALIANSKO";
            }
        }
    };

    const getLodOsoby = () => {
        if (osoby === "1 OSOBA") {
            return osoby;
        } 
        else if (osoby === "2 OSOBY") {
            return osoby;
        }
        else if (osoby === "3 OSOBY") {
            return osoby;
        }
        else if (osoby === "4 A VIAC OSÔB") {
            return osoby;
        }
        else{
            if (randomIndexOsoby === 0) {
                return "1 OSOBA";
            }
            else if (randomIndexOsoby === 1) {
                return "2 OSOBY";
            }
            else if (randomIndexOsoby === 2) {
                return "3 OSOBY";
            }
            else if (randomIndexOsoby === 3) {
                return "4 A VIAC OSÔB";
            }
        }
    };

    const getLodDlzka = () => {
        if (dlzka === "1-3 NOCI") {
            return dlzka;
        } 
        else if (dlzka === "4-7 NOCI") {
            return dlzka;
        }
        else if (dlzka === "8-11 NOCI") {
            return dlzka;
        }
        else if (dlzka === "12+ NOCI") {
            return dlzka;
        }
        else{
            if (randomIndexDlzka === 0) {
                return "1-3 NOCI";
            }
            else if (randomIndexDlzka === 1) {
                return "4-7 NOCI";
            }
            else if (randomIndexDlzka === 2) {
                return "8-11 NOCI";
            }
            else if (randomIndexDlzka === 3) {
                return "12+ NOCI";
            }
        }
    };

    const getLodTermin = () => {
        if (termin === "DECEMBER 2023") { 
            return termin;
        } 
        else if (termin === "JANUÁR 2024") {
            return termin;
        }
        else if (termin === "FEBRUÁR 2024") {
            return termin;
        }
        else if (termin === "MAREC 2024") {
            return termin;
        }
        else{
            if (randomIndexTermin === 0) {
                return "DECEMBER 2023";
            }
            else if (randomIndexTermin === 1) {
                return "JANUÁR 2024";
            }
            else if (randomIndexTermin === 2) {
                return "FEBRUÁR 2024";
            }
            else if (randomIndexTermin === 3) {
                return "MAREC 2024";
            }
        }
    };

    const udajeOLodi = () => {
        const searchParams = new URLSearchParams();
        searchParams.append("destinacia", LodDestinacia);
        searchParams.append("lod", LodNapis);
        searchParams.append("osoby", LodOsoby);
        searchParams.append("dlzka", LodDlzka);
        searchParams.append("termin", LodTermin);
        searchParams.append("cena", randomIndexCena);
        navigate(`/detail?${searchParams.toString()}`);
    }
    
    const LodNapis = getLodNapis();
    const LodObrazok = getLodObrazok(randomIndexLod);
    const LodDestinacia = getLodDestinacia(randomIndexDestinacia);
    const LodOsoby = getLodOsoby(randomIndexOsoby);
    const LodDlzka = getLodDlzka(randomIndexDlzka);
    const LodTermin = getLodTermin(randomIndexTermin);
    return (
        <div>
          <div className="vyber-lode-rectangle-container">
            <div className="vyber-lode-rectangle-content">
              <img className="vyber-lode-obrazok" src={LodObrazok} alt="LodObrazok" />
              <div className="vyber-lode-text-container">
                <p className="vyber-lode-lod">{LodNapis}</p>
                <p className="vyber-lode-destinacia">DESTINÁCIA: {LodDestinacia}</p>
                <p className="vyber-lode-termin">TERMÍN: {LodTermin}</p>
                <p className="vyber-lode-cena">CENA OD: {randomIndexCena}€</p>
              </div>
                <button className="vyber-lode-button" onClick={udajeOLodi}>
                    <img src={LupaObrazok} alt="Lupa" />
                 DETAIL
                </button>
            </div>
          </div>
        </div>
      );

}

export default VyberLode;
