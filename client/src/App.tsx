import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        {/* Doit afficher une navigation ou des informations dynamiques */}
        <Outlet />
      </main>
      {/* Permettre la personnalisation du Footer*/}
      <Footer />
    </>
  );
}

export default App;
