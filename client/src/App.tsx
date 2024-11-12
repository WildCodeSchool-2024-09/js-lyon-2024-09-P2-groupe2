import Navbar from "./components/Navbar";
import "./App.css";
import { Outlet } from "react-router-dom";
import CardArt from "./components/CardArt";
import Logo from "./components/Logo";
import SearchBar from "./components/SearchBar";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <header>
        <Navbar />
        <Logo />
        <SearchBar />
      </header>
      <main>
        <Outlet />
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
