import React from 'react';
import { useLocation} from 'react-router-dom';
import TopBar from './Komponenty/HlavnaStranka/TopBar';
import BottomBar from './Komponenty/HlavnaStranka/BottomBar';


const Detail = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
  
    const destinacia = searchParams.get('destinacia');
    const lode = searchParams.get('lod');
    const osoby = searchParams.get('osoby');
    const dlzka = searchParams.get('dlzka');
    const termin = searchParams.get('termin');
    const cena = searchParams.get('cena');

  return (
    <div>
        <TopBar></TopBar>
        <p>{destinacia}</p>
        <p>{lode}</p>
        <p>{osoby}</p>
        <p>{dlzka}</p>
        <p>{termin}</p>
        <p>{cena}€</p>
        <BottomBar></BottomBar>
    </div>
  );
};

export default Detail;