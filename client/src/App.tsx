import vangoghImg from "./assets/images/vangogh.jpg";
import Navbar from "./components/Navbar";
import "./App.css";

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
