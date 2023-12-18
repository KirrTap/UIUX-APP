import "./Drop.css";
import { useState } from "react";

const DestinaciaDropDown = ({selected, setSelected}) => {

  const [isActive, setIsActive] = useState(false);
  const option = ["VŠETKY DESTINÁCIE", "AUSTRÁLIA", "BAHAMY", "INDONÉZIA", "ISLAND", "KARIBIK","TALIANSKO"]
  return(
    <div>
      <p className="drop-nadpis">DESTINÁCIA</p>
      <div className="drop-dropdown">
          <div className="drop-dropdown-btn" onClick={(e) =>setIsActive(!isActive)}>{selected}
            <span className="fas fa-caret=down"></span>
          </div>
          {isActive && (
            <div className="drop-dropdown-content">
              {option.map((option) => (
                <div onClick={(e) => {setSelected(option) 
                                    setIsActive(false)}
                } className="drop-dropdown-item">
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