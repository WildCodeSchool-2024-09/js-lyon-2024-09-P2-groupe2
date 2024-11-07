import vangoghImg from "./assets/images/vangogh.jpg";
import "./App.css";
import Footer from "./components/footer";

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
        <input /> Rechercher
      </header>
      <main>
        <img className="vgImg" src={vangoghImg} alt="vangogh" />
        <img className="vgImg" src={vangoghImg} alt="vangogh" />
        <img className="vgImg" src={vangoghImg} alt="vangogh" />
        <img className="vgImg" src={vangoghImg} alt="vangogh" />
        <img className="vgImg" src={vangoghImg} alt="vangogh" />
        <img className="vgImg" src={vangoghImg} alt="vangogh" />
        <img className="vgImg" src={vangoghImg} alt="vangogh" />
        <img className="vgImg" src={vangoghImg} alt="vangogh" />
        <img className="vgImg" src={vangoghImg} alt="vangogh" />
        <img className="vgImg" src={vangoghImg} alt="vangogh" />
      </main>

      <footer>
        <div className="App">
          <Footer />
        </div>
      </footer>
    </>
  );
}

export default App;
