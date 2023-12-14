import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainImg from './Komponenty/HlavnaStranka/MainImg';
import TopBar from "./Komponenty/HlavnaStranka/TopBar";
import DropDown from './Komponenty/HlavnaStranka/DropDown';
import BottomBar from './Komponenty/HlavnaStranka/BottomBar';
import Vyhladavanie from './Vyhladavanie';

const HlavnaStranka = () => {
    return (
        <Router>
            <Routes>
                <Route path="/vyhladavanie" element={<Vyhladavanie/>} />
                <Route path="/" element={<>
                    <TopBar />
                    <MainImg />
                    <DropDown/>
                    <BottomBar/>
                </>} />
                 
            </Routes>
        </Router>
    );
};

export default HlavnaStranka;

