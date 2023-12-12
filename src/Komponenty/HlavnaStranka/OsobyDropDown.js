import "./OsobyDropDown.css";
import { useState } from "react";

const DestinaciaDropDown = ({selected, setSelected}) => {

  const [isActive, setIsActive] = useState(false);
  const option = ["1 OSOBA ", "2 OSOBY", "3 OSOBY", "4 A VIAC OSÔB"]
  return(
    <div>
      <p className="osoby-nadpis">POČET OSÔB</p>
      <div className="osoby-dropdown">
          <div className="osoby-dropdown-btn" onClick={(e) =>setIsActive(!isActive)}>{selected}
          </div>
          {isActive && (
            <div className="osoby-dropdown-content">
              {option.map((option) => (
                <div onClick={(e) => {setSelected(option) 
                                    setIsActive(false)}
                } className="osoby-dropdown-item">
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