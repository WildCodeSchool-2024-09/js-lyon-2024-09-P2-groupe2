import { useState } from "react";
import CardArt from "../components/CardArt";
import Compteur from "../components/Compteur";
import SearchBar from "../components/SearchBar";
import "./HomePage.css";

const HomePage = () => {
  const [likeCount, setLikeCount] = useState(0);

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
            setLikeCount={setLikeCount}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
