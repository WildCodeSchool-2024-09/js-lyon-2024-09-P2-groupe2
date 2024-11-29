import "./Compteur.css";
import { useFavorites } from "../contexts/FavoritesContext";

export default function Compteur() {
  const { favorites } = useFavorites();

  return (
    <div className="compteur">
      <h2>
        You liked {favorites.length} artwork{favorites.length > 1 ? "s" : ""}
      </h2>
    </div>
  );
}
