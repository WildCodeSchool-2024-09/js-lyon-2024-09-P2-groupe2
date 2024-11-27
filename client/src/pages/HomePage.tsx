import CardArt from "../components/CardArt";
import Compteur from "../components/Compteur";
import SearchBar from "../components/SearchBar";
import "./HomePage.css";

const HomePage = () => {
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
      <Compteur />
      <div className="cardart">
        {oeuvres.map((number) => (
          <CardArt key={number} id={number} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
