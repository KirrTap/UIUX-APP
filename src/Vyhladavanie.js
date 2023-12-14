import React from 'react';
import TopBar from "./Komponenty/HlavnaStranka/TopBar";
import BottomBar from './Komponenty/HlavnaStranka/BottomBar';
import DropDown from './Komponenty/HlavnaStranka/DropDown';

const Vyhladavanie = () => {
    return (
        <div>
            <TopBar />
            <DropDown/>
            <BottomBar/>
        </div>

    );
};

export default Vyhladavanie;