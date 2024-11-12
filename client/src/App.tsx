import "./App.css";
import CardArt from "./components/CardArt";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <SearchBar />
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
