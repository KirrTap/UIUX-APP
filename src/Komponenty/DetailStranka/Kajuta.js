import "./Kajuta.css";
import { useState } from "react";
import { useLocation} from 'react-router-dom';


const Kajuta = ({selected, setSelected}) => {


const location = useLocation();
const searchParams = new URLSearchParams(location.search);

const cena = parseInt(searchParams.get('cena'), 10) || 0;

  const [isActive, setIsActive] = useState(false);
  const option = [
    `pre 1 osobu bez balkónu  ${cena}€`,
    `pre 1 osobu s balkónom   ${cena + 100}€`,
    `pre 2 osoby bez balkónu  ${cena + 200}€`,
    `pre 2 osoby s balkónom   ${cena + 300}€`,
  ];

  return(
    <div>
      <p className="kajuta-drop-nadpis">KAJUTA: </p>
      <div className="kajuta-drop-dropdown">
          <div className="kajuta-drop-dropdown-btn" onClick={(e) =>setIsActive(!isActive)}>{selected}
          </div>
          {isActive && (
            <div className="kajuta-drop-dropdown-content">
              {option.map((option) => (
                <div onClick={(e) => {setSelected(option) 
                                    setIsActive(false)}
                } className="kajuta-drop-dropdown-item">
                  {option}
                </div>
              ))}
            </div>
          )}
      </div>
    </div>
  )
    
};

export default Kajuta;