import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navigation">
      <ul>
        {/* Extraire chaque élément de navigation dans un composant pour éviter les répétitions */}
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
