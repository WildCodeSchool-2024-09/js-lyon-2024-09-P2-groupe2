import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./CardArt.css";

interface FetchArt {
  title: string;
  primaryImageSmall: string;
  artistDisplayName: string;
  country: string;
}

interface propsType {
  id: string;
  likeCount: number;
  setLikeCount: React.Dispatch<React.SetStateAction<number>>;
}

function CardArt({ id, likeCount, setLikeCount }: propsType) {
  const [fetchArt, setFetchArt] = useState<FetchArt | null>(null);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`,
    )
      .then((resultatApi) => resultatApi.json())
      .then((responseJson) => setFetchArt(responseJson));
  }, [id]);

  function toggleLike() {
    if (isLiked === false) {
      setIsLiked(true);
      setLikeCount(likeCount + 1);
    } else {
      setIsLiked(false);
      setLikeCount(likeCount - 1);
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
            {isLiked === false ? "🤍" : "❤️"}
          </button>

          {/* Transmettre fetchArt dans state */}
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
