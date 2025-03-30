import React, { use, useEffect, useState } from "react";
import sticker1 from "../assets/smileysticker.png";
import sticker2 from "../assets/rainbowsticker.png";
import sticker3 from "../assets/cookiesticker.png";
import sticker4 from "../assets/bluesmileysticker.png";
import sticker5 from "../assets/murakamisticker.png";

const stickersArray = [
  sticker1,
  sticker2,
  sticker3,
  sticker4,
  sticker5
]


const Stickers = () => {

  const [stickers, setStickers] = useState([]);


  const getRandomSticker = () => {
    return stickersArray[Math.floor(Math.random() * stickersArray.length)];
  };

  useEffect(() => {
    
    const handler = (e) => {
      const id = Date.now(); // ID unique
      const randomSticker = getRandomSticker(); // Obtenir un sticker aléatoire
      setStickers((prev) => [
        ...prev,
        { id, x: e.clientX - 50, y: e.clientY - 50, sticker: randomSticker }, // Stocke aussi l'image
      ]);

      // Supprimer après 4 secondes
      setTimeout(() => {
        setStickers((prev) => prev.filter((sticker) => sticker.id !== id));
      }, 3000);

      
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []); 

  return (
    <div className="absolute z-50 top-0 inset-x-0 w-screen h-screen">
      <div className="relative">
        {stickers.map(({ id, x, y , sticker}) => (
          <div key={id} style={{ top: y, left: x }} className="absolute lg:w-50 lg:h-50 w-30 h-30">
            <img className="lg:w-50 lg:h-50 w-30 h-30" src={sticker} alt="sticker" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stickers;
