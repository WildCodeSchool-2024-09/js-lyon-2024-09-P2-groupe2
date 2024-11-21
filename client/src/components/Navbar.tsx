import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navigation">
      <ul>
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

    //l'ancien code au cas où :

    // <div>
    //   <header className="color-header">
    //   <nav>
    //     <ul>
    //       <li>
    //         {" "}
    //         <button type="button" className="button-54" onClick={handleClick}>
    //           Home
    //         </button>
    //       </li>
    //       <li>
    //         {" "}
    //         <button type="button" className="button-54" onClick={handleClick}>
    //           Favourites
    //         </button>
    //       </li>
    //       <li>
    //         {" "}
    //         <button type="button" className="button-54" onClick={handleClick}>
    //           About
    //         </button>
    //       </li>
    //     </ul>
    //   </nav>
    //   </header>
    // </div>
  );
}

export default Navbar;
