import { useState } from "react";
import CardArt from "../components/CardArt";
import Compteur from "../components/Compteur";
import SearchBar from "../components/SearchBar";
import "./HomePage.css";

const HomePage = () => {
  const [likeCount, setLikeCount] = useState(0);

  const oeuvres = [
    "40",
    "100",
    "45",
    "70",
    "80",
    "71",
    "69",
    "2000",
    "47",
    "56",
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
