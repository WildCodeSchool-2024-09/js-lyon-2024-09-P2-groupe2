import CardArt from "../components/CardArt";
import { useFavorites } from "../contexts/FavoritesContext";
import "./Favoris.css";

export default function Favoris() {
  const { favorites } = useFavorites();

  return (
    <>
      <section className="mainFavoris">
        <p>Below your favorite art pieces :</p>
        <div className="cardart">
          {favorites.map((art) => (
            <CardArt
              key={art.objectID}
              id={art.objectID}
              // likeCount={likeCount}
              // setLikeCount={setLikeCount}
            />
          ))}
        </div>
      </section>
    </>
  );
}
