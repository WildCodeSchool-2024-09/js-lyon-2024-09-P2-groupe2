import CardArt from "../components/CardArt";
import "./Favoris.css";
import { useFavorites } from "../contexts/FavoritesContext";

export default function Favoris() {
  // Accès au contexte des favoris pour récupérer la liste des œuvres favorites
  const { favorites } = useFavorites();

  return (
    <>
      <section className="mainFavoris">
        <p>Below your favorite art pieces:</p>
        <div className="cardart">
          {/* Parcourt la liste des favoris et affiche un composant CardArt pour chaque œuvre */}
          {favorites.length > 0 ? (
            favorites.map((art) => (
              <CardArt
                key={art.objectID} // Utilise un identifiant unique pour éviter les conflits (par exemple, art.title)
                id={art.objectID} // Passe l'ID pour que CardArt puisse récupérer les détails si nécessaire
                // likeCount={0} // Pas nécessaire ici, mais garde la cohérence avec HomePage
                // setLikeCount={() => {}} // Placeholder pour éviter une erreur de fonction non fournie
              />
            ))
          ) : (
            // Affiche un message si aucun favori n'est trouvé
            <p>No favorite art pieces yet!</p>
          )}
        </div>
      </section>
    </>
  );
}
