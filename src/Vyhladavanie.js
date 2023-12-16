// Vyhladavanie.js
import React from 'react';
import TopBar from './Komponenty/HlavnaStranka/TopBar';
import BottomBar from './Komponenty/HlavnaStranka/BottomBar';
import VyberLode from './Komponenty/VyhladStranka/VyberLode';
import DropDown from './Komponenty/HlavnaStranka/DropDown';

const Vyhladavanie = () => {

  return (
    <div>
        <TopBar></TopBar>
        <DropDown></DropDown>
        <VyberLode></VyberLode>
        <VyberLode></VyberLode>
        <VyberLode></VyberLode>
        <BottomBar></BottomBar>
    </div>
  );
};

export default Vyhladavanie;

