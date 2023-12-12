import "./LodDropDown.css";
import { useState } from "react";

const DestinaciaDropDown = ({selected, setSelected}) => {

  const [isActive, setIsActive] = useState(false);
  const option = ["VŠETKY LODE", "OASIS", "JEWEL", "SYMPHONY"]
  return(
    <div>
      <p className="lod-nadpis">LODE</p>
      <div className="lod-dropdown">
          <div className="lod-dropdown-btn" onClick={(e) =>setIsActive(!isActive)}>{selected}
          </div>
          {isActive && (
            <div className="lod-dropdown-content">
              {option.map((option) => (
                <div onClick={(e) => {setSelected(option) 
                                    setIsActive(false)}
                } className="lod-dropdown-item">
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