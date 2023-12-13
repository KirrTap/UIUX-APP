import "./Drop.css";
import { useState } from "react";

const DlzkaPlavbyDropDown = ({selected, setSelected}) => {

  const [isActive, setIsActive] = useState(false);
  const option = ["1-3 NOCI", "4-7 NOCI", "8-11 NOCI", "12+ NOCI"]
  return(
    <div>
      <p className="drop-nadpis">DĹŽKA PLAVBY</p>
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
    

export default DlzkaPlavbyDropDown;