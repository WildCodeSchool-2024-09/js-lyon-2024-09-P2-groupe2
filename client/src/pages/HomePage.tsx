import CardArt from "../components/CardArt";
import SearchBar from "../components/SearchBar";
import "./HomePage.css";

const HomePage = () =>  {
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
      <div className="cardart">
        {oeuvres.map((number) => (
          <CardArt key={number} id={number} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
