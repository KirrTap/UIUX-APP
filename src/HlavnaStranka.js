import React from 'react';
import MainImg from './Komponenty/HlavnaStranka/MainImg';
import TopBar from "./Komponenty/HlavnaStranka/TopBar";
import DropDown from './Komponenty/HlavnaStranka/DropDown';
import BottomBar from './Komponenty/HlavnaStranka/BottomBar';
const HlavnaStranka = () => {
    return (
            <div>
                <TopBar />
                <MainImg />
                <DropDown/>
                <BottomBar/>
            </div>


    );
};

export default HlavnaStranka;

