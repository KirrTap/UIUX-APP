import TopBar from "./Komponenty/HlavnaStranka/TopBar";
import BottomBar from "./Komponenty/HlavnaStranka/BottomBar";
import Udaje from "./Komponenty/PlatbaStranka/Udaje";

const Platba = () => {

return (
    
    <div>
        <TopBar></TopBar>
        <p className="search-plavby">OSOBNÉ A KONTAKTNÉ ÚDAJE</p>
        <Udaje></Udaje>
        <BottomBar></BottomBar>
    </div>
)
}

export default Platba;