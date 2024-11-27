import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./CardArt.css";

interface FetchArt {
  title: string; // Titre de l'œuvre
  primaryImageSmall: string; // URL de l'image principale de l'œuvre
  artistDisplayName: string; // Nom de l'artiste
  country: string; // Pays d'origine de l'œuvre
}

interface propsType {
  id: string; // ID unique pour identifier l'œuvre
  likeCount: number; // Nombre actuel de likes
  setLikeCount: React.Dispatch<React.SetStateAction<number>>; // Fonction pour mettre à jour le nombre de likes
}

function CardArt({ id, likeCount, setLikeCount }: propsType) {
  const [fetchArt, setFetchArt] = useState<FetchArt | null>(null); // État pour stocker les données de l'œuvre récupérées
  const [isLiked, setIsLiked] = useState(false); // État pour gérer si l'œuvre est "aimée" ou non
  // Extraire cette logique dans une fonction utilitaire ou un hook personnalisé
  useEffect(() => {
    fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`,
    )
      .then((resultatApi) => resultatApi.json()) // Conversion de la réponse en JSON
      .then((responseJson) => setFetchArt(responseJson)); // Mise à jour de l'état avec les données récupérées
  }, [id]);

  //Fonction pour gérer les "likes"

  function toggleLike() {
    if (isLiked === false) {
      setIsLiked(true); // L'œuvre est maintenant aimée
      setLikeCount(likeCount + 1); // Augmente le compteur de likes
    } else {
      setIsLiked(false); // L'œuvre n'est plus aimée
      setLikeCount(likeCount - 1); // Diminue le compteur de likes
    }
  }

  return (
    <article className="cardArtContainer">
      {fetchArt ? (
        <>
          {/* Vérifie si les données de l'œuvre ont été chargées */}
          <img
            className="cardArtImg"
            src={fetchArt.primaryImageSmall}
            alt={fetchArt.title}
          />
          <h2 className="imgTitle">{fetchArt.title}</h2>
          {/* Bouton pour gérer les "likes" */}
          <button type="button" className="likeButton" onClick={toggleLike}>
            {isLiked === false ? "🤍" : "❤️"}
            {/* Change l'icône selon l'état de "like" */}
          </button>

          {/* Bouton pour afficher plus de détails */}
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
