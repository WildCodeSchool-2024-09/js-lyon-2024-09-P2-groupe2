import "./Navbar.css";

function Navbar() {
  const handleClick = (): void => {};

  return (
    <div>
      {/* <header className="color-header"> */}
      <nav>
        <ul>
          <li>
            {/* {" "} */}
            <button type="button" className="button-54" onClick={handleClick}>
              Home
            </button>
          </li>
          <li>
            {/* {" "} */}
            <button type="button" className="button-54" onClick={handleClick}>
              Favoris
            </button>
          </li>
          <li>
            {/* {" "} */}
            <button type="button" className="button-54" onClick={handleClick}>
              À propos
            </button>
          </li>
        </ul>
      </nav>
      {/* </header> */}
    </div>
  );
}

export default Navbar;
