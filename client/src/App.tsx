import "./App.css";
import { Outlet } from "react-router-dom";
import CardArt from "./components/CardArt";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";

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
