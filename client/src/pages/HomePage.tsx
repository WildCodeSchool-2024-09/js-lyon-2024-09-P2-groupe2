import { useEffect, useState } from "react";
import CardArt from "../components/CardArt";
import Compteur from "../components/Compteur";
import SearchBar from "../components/SearchBar";
import "./HomePage.css";

interface ArtworkType {
  title: string;
}
const HomePage = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [artworks, setArtworks] = useState<ArtworkType[]>([]); // État pour stocker les données des œuvres
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
      //à creuser pour la journée de refacto => optimiser
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
      .then(() => console.log(artworks))
      .catch((err) => console.log(err));
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
            key={number}
            id={number}
            likeCount={likeCount}
            setLikeCount={setLikeCount}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
