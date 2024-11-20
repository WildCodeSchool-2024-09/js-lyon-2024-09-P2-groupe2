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
              Favourites
            </button>
          </li>
          <li>
            {/* {" "} */}
            <button type="button" className="button-54" onClick={handleClick}>
              About
            </button>
          </li>
        </ul>
      </nav>
      {/* </header> */}
    </div>
  );
}

export default Navbar;
