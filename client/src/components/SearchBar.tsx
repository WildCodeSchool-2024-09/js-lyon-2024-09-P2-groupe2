import { useState } from "react";
import "./SearchBar.css";

function SearchBar() {
  // 1. Déclarer l'état pour la valeur de l'input
  const [searchText, setSearchText] = useState("");

  // 2. Fonction pour gérer les changements dans l'input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value); // Met à jour l'état avec la nouvelle valeur de l'input
  };

  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Search"
        value={searchText} // Liaison avec l'état de l'input
        onChange={handleChange} // Gère chaque changement dans l'input
      />
    </div>
  );
}

export default SearchBar;
