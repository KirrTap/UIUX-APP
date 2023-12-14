import "./BottomBar.css"

import tukeLogo from "../Obrazky/tuke-logo.png"
const BottomBar = () => {
    return(
        <div className="bottomBar"> 
            <img className="tukeLogo" src={tukeLogo} alt="TukeLogo" />
            <p className= "created-by">CREATED BY PATRIK ČMIL</p>
            <p className= "datum2023">2023</p>

        </div>

    )
}

export default BottomBar;