import "./App.css";
import { Outlet } from "react-router-dom";
import CardArt from "./components/CardArt";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <Header />
      <main>
        <SearchBar />
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
      <Footer />
    </>
  );
}

export default App;
