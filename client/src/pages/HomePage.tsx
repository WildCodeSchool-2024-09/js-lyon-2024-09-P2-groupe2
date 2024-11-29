import { useEffect, useState } from "react";
import CardArt from "../components/CardArt";
import Compteur from "../components/Compteur";
import SearchBar from "../components/SearchBar";
import "./HomePage.css";
// on a du typer Artwork pour pouvoir l'utiliser dans l'état de la liste "artworks". Un cast explicite (ou assertion de type en TypeScript) est une manière de dire à TypeScript : "Je sais que cette donnée a ce type précis, même si TypeScript ne peut pas le déduire automatiquement." Cela permet de forcer TypeScript à traiter une variable comme étant d'un type spécifique. En gros, on a fait du forcing

interface ArtworkType {
  objectID: number;
  title: string;
  primaryImageSmall: string;
  artistDisplayName: string;
  country: string;
}

const HomePage = () => {
  const [artworks, setArtworks] = useState<ArtworkType[]>([]); // État pour stocker les détails des œuvres récupérées depuis l'API.
  const [searchText, setSearchText] = useState(""); // État pour la barre de recherche

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
        Promise.all(responses.map((response) => response.json())),
      )
      .then((artworksJson) => {
        setArtworks(artworksJson); // Met à jour l'état artworks avec les données récupérées
      })
      .catch((err) =>
        console.log("Erreur lors de la récupération des données :", err),
      );
  }, []);

  // Filtrer les œuvres en fonction du titre et de l'artiste
  const filteredArtworks = artworks.filter(
    (artwork) =>
      // on utilise un boléen pour inclure le titre et l'artiste dans la recherche "||"
      // toLowerCase va mettre tout en minuscules même si l'utilisateur tape en mayuscules.
      artwork.title?.toLowerCase().includes(searchText.toLowerCase()) ||
      artwork.artistDisplayName
        ?.toLowerCase()
        .includes(searchText.toLowerCase()),
  );

  return (
    <div className="sbhomepage">
      <div className="searchcarcl">
        {/* Extraire ce composant et sa gestion dans une zone dédiée */}
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
      </div>
      <div className="compteur">
        <Compteur />
      </div>
      <div className="cardart">
        {filteredArtworks.length > 0 ? (
          filteredArtworks.map((artwork) => (
            // Gérer le rendu des cartes via un composant intermédiaire */
            <CardArt
              key={artwork.objectID} // Assure une clé unique pour chaque composant
              id={artwork.objectID.toString()} // ID de l'œuvre transmis au composant enfant
            />
          ))
        ) : searchText ? (
          <p>No results for "{searchText}"</p>
        ) : (
          <p>Loading artworks...</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
