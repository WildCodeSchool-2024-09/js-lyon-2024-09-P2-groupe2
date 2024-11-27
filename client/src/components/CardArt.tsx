import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./CardArt.css";
import { useFavorites } from "../contexts/FavoritesContext";

interface artType {
  objectID: string;
}

interface FetchArt {
  title: string;
  primaryImageSmall: string;
  artistDisplayName: string;
  country: string;
  objectID: string;
}

interface propsType {
  id: string;
}

function CardArt({ id }: propsType) {
  const [fetchArt, setFetchArt] = useState<FetchArt | null>(null);
  const { toggleFavorite, isArtLiked } = useFavorites();

  useEffect(() => {
    fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`,
    )
      .then((resultatApi) => resultatApi.json())
      .then((responseJson) => setFetchArt(responseJson));
  }, [id]);

  const handleLike = () => {
    if (fetchArt) {
      toggleFavorite(fetchArt as artType);
    } else {
      console.error("fetchArt is null and cannot be added to favorites.");
    }
  };

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
          <button type="button" className="likeButton" onClick={handleLike}>
            {isArtLiked(fetchArt.objectID) ? "❤️" : "🤍"}
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
