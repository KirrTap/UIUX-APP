import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainImg from './Komponenty/HlavnaStranka/MainImg';
import TopBar from "./Komponenty/HlavnaStranka/TopBar";
import DropDown from './Komponenty/HlavnaStranka/DropDown';

const HlavnaStranka = () => {
    return (
        <Router>
            <Routes>
                <Route path="/vyhladavanie" element={<MainImg />} />
                <Route path="/info" element={<TopBar />} />
                <Route path="/" element={<>
                    <TopBar />
                    <MainImg />
                    <DropDown/>
                </>} />
                 
            </Routes>
        </Router>
    );
};

export default HlavnaStranka;

