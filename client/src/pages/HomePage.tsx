import { useEffect, useState } from "react";
import CardArt from "../components/CardArt";
import Compteur from "../components/Compteur";
import SearchBar from "../components/SearchBar";
import "./HomePage.css";

// Interface pour définir la structure des données d'une œuvre d'art.

interface ArtworkType {
  title: string; // Titre de l'œuvre d'art
}
const HomePage = () => {
  // État pour suivre le nombre total de "likes" sur la page.
  const [likeCount, setLikeCount] = useState(0);
  // État pour stocker les détails des œuvres récupérées depuis l'API.
  const [artworks, setArtworks] = useState<ArtworkType[]>([]);
  // Liste des IDs des œuvres à afficher
  const oeuvres = [
    "392000",
    "897121",
    "199313",
    "447797",
    "247009",
    "437326",
    "436535",
    "411913",
    "36548",
    "435860",
  ];
  // écupérer les détails des œuvres à partir de l'API
  useEffect(() => {
    Promise.all([
      //à creuser pour la journée de refacto => optimiser
      // Chaque requête récupère les données d'une œuvre spécifique via son ID
      fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${oeuvres[0]}`,
      ),
      fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${oeuvres[1]}`,
      ),
      fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${oeuvres[2]}`,
      ),
      fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${oeuvres[3]}`,
      ),
      fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${oeuvres[4]}`,
      ),
      fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${oeuvres[5]}`,
      ),
      fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${oeuvres[6]}`,
      ),
      fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${oeuvres[7]}`,
      ),
      fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${oeuvres[8]}`,
      ),
      fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${oeuvres[9]}`,
      ),
    ])
      .then((responses) =>
        // Une fois toutes les requêtes terminées, transforme chaque réponse en JSON
        Promise.all<ArtworkType>(
          responses.map((responses) => responses.json()),
        ).then((artworksJson) => {
          artworksJson.map((artworkApi) => {
            const tmp: ArtworkType[] = artworks;
            tmp.push(artworkApi);
            setArtworks(tmp);
          });
        }),
      )
      .then(() => console.log(artworks)) // vérifie les données récupérées
      .catch((err) => console.log(err)); // Gestion des erreurs dans la récupération des données
  }, [artworks]);

  return (
    <div className="sbhomepage">
      <div className="searchcarcl">
        {/* Extraire ce composant et sa gestion dans une zone dédiée */}
        <SearchBar />
      </div>
      <Compteur likeCount={likeCount} />
      <div className="cardart">
        {/* Gérer le rendu des cartes via un composant intermédiaire */}
        {oeuvres.map((number) => (
          <CardArt
            key={number} // Clé unique pour chaque composant
            id={number} // ID de l'œuvre transmis au composant enfant
            likeCount={likeCount} // Nombre total de "likes"
            setLikeCount={setLikeCount} // Fonction pour mettre à jour le compteur de "likes"
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
