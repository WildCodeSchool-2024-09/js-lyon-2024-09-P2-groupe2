import basqImg from "./assets/images/basquiat.jpg";
import fridaImg from "./assets/images/frida.jpg";
import klimtImg from "./assets/images/klimt.jpg";
import munchImg from "./assets/images/lecri.jpg";
import terrasseImg from "./assets/images/terrasse.jpg";
import Navbar from "./components/Navbar";
import "./App.css";
import Logo from "./components/Logo";
import SearchBar from "./components/SearchBar";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <header>
        <Navbar />
        {/* <h1>WeArt</h1> */}
        <Logo />
        <SearchBar />
      </header>
      <main>
        <img className="basquiatImg" src={basqImg} alt="peinture de Basquiat" />
        <img className="fridaImg" src={fridaImg} alt="peinture de Frida" />
        <img className="klimtImg" src={klimtImg} alt="peinture de Klimt" />
        <img className="munchImg" src={munchImg} alt="peinture de Munch" />
        <img
          className="terrasseImg"
          src={terrasseImg}
          alt="peinture de Vangogh"
        />
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
