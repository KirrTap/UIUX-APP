import "./Mapa.css"
import { useLocation} from 'react-router-dom';
import KaribikMapa from "../Obrazky/KaribikMapa.png";
import AustraliaMapa from "../Obrazky/AustraliaMapa.png";
import BahamyMapa from "../Obrazky/BahamyMapa.png";
import IslandMapa from "../Obrazky/IslandMapa.png";
import TalianskoMapa from "../Obrazky/TalianskoMapa.png";
import IndoneziaMapa from "../Obrazky/IndoneziaMapa.png";

const Mapa = () => {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
  
    const destinacia = searchParams.get('destinacia');

    const getVyberMapy = () => {
        if (destinacia === "KARIBIK"){
            return KaribikMapa
        }
        if (destinacia === "AUSTRÁLIA"){
            return AustraliaMapa
        }
        if (destinacia === "ISLAND"){
            return IslandMapa
        }
        if (destinacia === "TALIANSKO"){
            return TalianskoMapa
        }
        if (destinacia === "INDONÉZIA"){
            return IndoneziaMapa
        }
        else{
            
            return BahamyMapa
        }
    }

    const Mapa = getVyberMapy();
    return(
        <div>
            <img className= "mapa-udaje"src={Mapa} alt="Mapa" />
        </div>

    )

}

export default Mapa;


