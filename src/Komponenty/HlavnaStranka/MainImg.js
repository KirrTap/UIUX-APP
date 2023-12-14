import "./MainImg.css"

import logoImage1 from "../Obrazky/obrazok1.jpg";




const MainImg = () => {
  
  return (
    <div className="containerImg">

      <img className="hlavnyObrazok" src={logoImage1} alt="Logo" />
  
    </div>
  );
};

export default MainImg;