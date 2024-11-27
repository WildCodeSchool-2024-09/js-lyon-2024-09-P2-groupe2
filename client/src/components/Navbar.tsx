import "./Navbar.css"; // Importation du fichier CSS pour styliser la barre de navigation
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navigation">
      <ul>
         {/* Liste non ordonnée contenant les liens de navigation. */}
         {/* Lien vers la page d'accueil */}
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "button-54 button-54-active" : "button-54"
            }
          >
            Home
          </NavLink>
        </li>
         {/* Lien vers la page des favoris */}
        <li>
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive ? "button-54 button-54-active" : "button-54"
            }
          >
            Favourites
          </NavLink>
        </li>
         {/* Lien vers la page "À propos" */}
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "button-54 button-54-active" : "button-54"
            }
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
