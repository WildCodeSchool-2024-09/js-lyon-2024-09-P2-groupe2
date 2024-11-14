import CardArt from "../components/CardArt";
import SearchBar from "../components/SearchBar";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="sbhomepage">
      <div className="searchcarcl">
        <SearchBar />
      </div>
      <div className="cardart">
        <CardArt />
        <CardArt />
        <CardArt />
        <CardArt />
        <CardArt />
        <CardArt />
        <CardArt />
        <CardArt />
        <CardArt />
        <CardArt />
      </div>
    </div>
  );
};

export default HomePage;
