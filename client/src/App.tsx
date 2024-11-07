import "./App.css";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>Home</li>
            <li>Favoris</li>
            <li>À propos</li>
          </ul>
        </nav>
        <h1>WeArt</h1>
        <SearchBar />
      </header>
      <main>
        {/* <img className="vgImg" src={vangoghImg} alt="vangogh" />
        <img className="vgImg" src={vangoghImg} alt="vangogh" />
        <img className="vgImg" src={vangoghImg} alt="vangogh" />
        <img className="vgImg" src={vangoghImg} alt="vangogh" />
        <img className="vgImg" src={vangoghImg} alt="vangogh" />
        <img className="vgImg" src={vangoghImg} alt="vangogh" />
        <img className="vgImg" src={vangoghImg} alt="vangogh" />
        <img className="vgImg" src={vangoghImg} alt="vangogh" />
        <img className="vgImg" src={vangoghImg} alt="vangogh" />
        <img className="vgImg" src={vangoghImg} alt="vangogh" /> */}
      </main>

      <footer>
        <p>
          Disclaimer : <br /> Les œuvres et images sont présentées à des fins
          éducatives. Les droits d'auteur appartiennent à leurs détenteurs. Nous
          ne garantissons pas l'exactitude des informations.
        </p>
        <p>Copyright 2024 ©</p>
      </footer>
    </>
  );
}

export default App;
