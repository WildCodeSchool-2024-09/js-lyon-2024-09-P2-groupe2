import { useEffect, useState } from "react";
import CardArt from "../components/CardArt";
import Compteur from "../components/Compteur";
import SearchBar from "../components/SearchBar";
import "./HomePage.css";
// on a du typer Artwork pour pouvoir l'utiliser dans l'état de la liste "artworks". Un cast explicite (ou assertion de type en TypeScript) est une manière de dire à TypeScript : "Je sais que cette donnée a ce type précis, même si TypeScript ne peut pas le déduire automatiquement." Cela permet de forcer TypeScript à traiter une variable comme étant d'un type spécifique. En gros, on a fait du forcing

interface Artwork {
  objectID: number;
  title: string;
  primaryImageSmall: string;
  artistDisplayName: string;
  country: string;
}

const HomePage = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [artworks, setArtworks] = useState<Artwork[]>([]); // Tableau des données récupérées
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

  useEffect(() => {
    Promise.all([
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
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
      </div>
      <Compteur likeCount={likeCount} />
      <div className="cardart">
        {filteredArtworks.length > 0 ? (
          filteredArtworks.map((artwork) => (
            <CardArt
              key={artwork.objectID} // Assure une clé unique pour chaque composant
              id={artwork.objectID.toString()}
              likeCount={likeCount}
              setLikeCount={setLikeCount}
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
