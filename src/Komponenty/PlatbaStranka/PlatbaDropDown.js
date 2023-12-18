import "./PlatbaDropDown.css"

import { useState } from "react";

const PlatbaDropDown = ({selected, setSelected}) => {
    const [isActive, setIsActive] = useState(false);
    const option = ["GOOGLE PAY", "APPLE PAY", "PAYPALL", "VISA","MASTERCARD"]
    
    return(
      <div>
        <div className="platba-drop-dropdown">
            <div className="platba-drop-dropdown-btn" onClick={(e) =>setIsActive(!isActive)}>{selected}
              <span className="fas fa-caret=down"></span>
            </div>
            {isActive && (
              <div className="platba-drop-dropdown-content">
                {option.map((option) => (
                  <div onClick={(e) => {setSelected(option) 
                                      setIsActive(false)}
                  } className="platba-drop-dropdown-item">
                    {option}
                  </div>
                ))}
              </div>
            )}
        </div>
      </div>
    )

}

export default PlatbaDropDown;