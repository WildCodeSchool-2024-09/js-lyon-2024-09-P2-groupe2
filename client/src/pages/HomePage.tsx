import { useState } from "react";
import CardArt from "../components/CardArt";
import Compteur from "../components/Compteur";
import SearchBar from "../components/SearchBar";
import "./HomePage.css";

const HomePage = () => {
  const [likeCount, setLikeCount] = useState(0); // Compteur des likes

  const oeuvres = [
    "392000",
    "897121",
    "199313",
    "447797",
    "247009",
    "437326",
    "436535",
    "411913",
    "36548",
    "435860",
  ];

  // Mise à jour du compteur de likes
  const updateLikeCount = (increment: boolean) => {
    setLikeCount((prevCount) => (increment ? prevCount + 1 : prevCount - 1));
  };

  return (
    <div className="sbhomepage">
      <div className="searchcarcl">
        <SearchBar />
      </div>
      <Compteur likeCount={likeCount} />
      <div className="cardart">
        {oeuvres.map((number) => (
          <CardArt
            key={number}
            id={number}
            likeCount={likeCount}
            updateLikeCount={updateLikeCount} // Passer la fonction updateLikeCount pour gérer le like
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
