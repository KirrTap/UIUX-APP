import "./MainImg.css"

import logoImage1 from "../Obrazky/obrazok1.jpg";
import logoImage2 from "../Obrazky/obrazok2.jpg";
import logoImage3 from "../Obrazky/obrazok3.jpg";



import { useState } from "react";

const MainImg = () => {
  const [Image, setImage] = useState(logoImage1);

  const changeImageRight = () => {
    setImage((prevImage) => {
      if (prevImage === logoImage1) return logoImage2;
      if (prevImage === logoImage2) return logoImage3;
      return logoImage1;
    });
  };

  const changeImageLeft = () => {
    setImage((prevImage) => {
      if (prevImage === logoImage1) return logoImage3;
      if (prevImage === logoImage3) return logoImage2;
      return logoImage1;
    });
  };

  return (
    <div className="containerImg">
      {/* <button className="leftArrow" onClick={changeImageLeft}> &lt; {} </button> */}

      <img className="hlavnyObrazok" src={Image} alt="Logo" />

      {/* <button className="rightArrow" onClick={changeImageRight}> &gt; {} </button> */}
    
    </div>
  );
};

export default MainImg;