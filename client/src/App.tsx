import vangoghImg from "./assets/images/vangogh.jpg";
import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <header>
        <Navbar />
        {/* J'ai effacé toute la nav pour la mettre dans le composant Navbar.tsx*/}
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
        <div className="Footer">
          <Footer />
        </div>
      </footer>
    </>
  );
}

export default App;
