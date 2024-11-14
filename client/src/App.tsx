import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
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
