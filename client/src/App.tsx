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
        <div className="Footer">
          <Footer />
        </div>
      </footer>
    </>
  );
}

export default App;
