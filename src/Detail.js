import React from 'react';
import TopBar from './Komponenty/HlavnaStranka/TopBar';
import BottomBar from './Komponenty/HlavnaStranka/BottomBar';
import DropDown from './Komponenty/HlavnaStranka/DropDown';
import Mapa from './Komponenty/DetailStranka/Mapa';
import Info from './Komponenty/DetailStranka/InfoOPlavbe';

const Detail = () => {


  return (
    <div>
        <TopBar></TopBar>
        <DropDown></DropDown>
        <Mapa></Mapa>
        <p className="search-plavby">INFORMÁCIE O PLAVBE</p>
        <Info></Info>
        <BottomBar></BottomBar>
    </div>
  );
};

export default Detail;