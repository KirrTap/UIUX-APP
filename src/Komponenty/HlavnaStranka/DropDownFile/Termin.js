import "./Drop.css";
import { useState } from "react";

const DestinaciaDropDown = ({selected, setSelected}) => {

  const [isActive, setIsActive] = useState(false);
  const option = ["DECEMBER 2023 ", "JANUÁR 2024", "FEBRUÁR 2024", "MAREC 2024"]
  return(
    <div>
      <p className="drop-nadpis">POČET OSÔB</p>
      <div className="drop-dropdown">
          <div className="drop-dropdown-btn" onClick={(e) =>setIsActive(!isActive)}>{selected}
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