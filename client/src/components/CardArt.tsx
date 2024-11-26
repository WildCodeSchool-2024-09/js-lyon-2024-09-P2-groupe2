import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./CardArt.css";
import { useFavorites } from "../contexts/FavoritesContext";

interface FetchArt {
  title: string;
  primaryImageSmall: string;
  artistDisplayName: string;
  country: string;
  objectID: string; // Assurez-vous que cet identifiant unique est disponible
}

interface propsType {
  id: string;
}

function CardArt({ id }: propsType) {
  const [fetchArt, setFetchArt] = useState<FetchArt | null>(null);
  const { favorites, setFavorites } = useFavorites(); // Accès au contexte des favoris

  // État local pour savoir si l'œuvre est likée
  const [isLiked, setIsLiked] = useState<boolean>(false);

  useEffect(() => {
    // Récupération des données pour cette CardArt
    fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`,
    )
      .then((result) => result.json())
      .then((data) => setFetchArt(data));
  }, [id]);

  useEffect(() => {
    // Vérifie si l'œuvre est déjà dans les favoris à chaque fois que les favoris sont modifiés
    setIsLiked(favorites.some((art) => art.objectID === id));
  }, [favorites, id]);

  // Fonction pour gérer le toggle du like
  function toggleLike() {
    if (fetchArt) {
      if (isLiked) {
        // Si déjà liké, on enlève des favoris
        setFavorites((prevFavorites) =>
          prevFavorites.filter((art) => art.objectID !== id),
        );
      } else {
        // Si pas encore liké, on l'ajoute aux favoris
        setFavorites((prevFavorites) => [...prevFavorites, fetchArt]);
      }
    }
  }

  return (
    <article className="cardArtContainer">
      {fetchArt ? (
        <>
          <img
            className="cardArtImg"
            src={fetchArt.primaryImageSmall}
            alt={fetchArt.title}
          />
          <h2 className="imgTitle">{fetchArt.title}</h2>
          <button type="button" className="likeButton" onClick={toggleLike}>
            {isLiked ? "❤️" : "🤍"}
          </button>

          <Link to={`/article/${id}`} state={fetchArt}>
            <button type="button" className="detailsButton">
              See more
            </button>
          </Link>
        </>
      ) : (
        <p id="loading">Loading...</p>
      )}
    </article>
  );
}

export default CardArt;
