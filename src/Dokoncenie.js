import React from 'react';
import TopBar from './Komponenty/HlavnaStranka/TopBar';
import BottomBar from './Komponenty/HlavnaStranka/BottomBar';
import {useNavigate} from 'react-router-dom';

const Dokoncenie = () => {

    const navigate = useNavigate();

    const handleSearchClick = () => {

        navigate(`/`);
      };

  return (
    <div>
      <TopBar></TopBar>
      <div className="empty-rectangle">
        <p className='dokoncenie-zelena'>ÚSPEŠNÉ DOKONČENIE OBJEDNÁVKY</p>
        <p className='dokoncenie-modra' onClick={handleSearchClick}>späť na hlavnú stránku</p>
      </div>
      <BottomBar></BottomBar>
    </div>
  );
};

export default Dokoncenie;