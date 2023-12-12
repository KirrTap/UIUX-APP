import "./DestinaciaDropDown.css";
import { useState } from "react";

const DestinaciaDropDown = ({selected, setSelected}) => {

  const [isActive, setIsActive] = useState(false);
  const option = ["VŠETKY DESTINÁCIE", "AUSTRÁLIA", "BAHAMY", "ČÍNA", "GRÉCKO", "KARIBIK", "TALIANKO"]
  return(
    <div>
      <p className="destinacia-nadpis">DESTINÁCIA</p>
      <div className="destinacia-dropdown">
          <div className="destinacia-dropdown-btn" onClick={(e) =>setIsActive(!isActive)}>{selected}
            <span className="fas fa-caret=down"></span>
          </div>
          {isActive && (
            <div className="destinacia-dropdown-content">
              {option.map((option) => (
                <div onClick={(e) => {setSelected(option) 
                                    setIsActive(false)}
                } className="destinacia-dropdown-item">
                  {option}
                </div>
              ))}
            </div>
          )}
      </div>
    </div>
  )
    
};

export default DestinaciaDropDown;