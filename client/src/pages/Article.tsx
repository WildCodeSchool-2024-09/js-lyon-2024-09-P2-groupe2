import { useLocation } from "react-router-dom";
import "./Article.css";

interface FetchArt {
  title: string; // Titre de l'œuvre d'art.
  primaryImageSmall: string; // URL de l'image principale
  artistDisplayName: string; // Nom de l'artiste
  country: string; // Pays d'origine de l'œuvre
  artistBeginDate: string; // Année de naissance de l'artiste
  artistEndDate: string; // Année de décès de l'artiste
  medium: string; // Matériaux ou techniques utilisés pour l'œuvre
  creditLine: string; // Informations supplémentaires sur l'origine de l'œuvre
  geographyType: string; // Type géographique lié à l'œuvre
  city: string; // Ville associée à l'œuvre
}

function Article() {
  const location = useLocation();
  const artDetails = location.state as FetchArt;
  // Si les détails de l'œuvre d'art sont absents, afficher un message d'erreur.
  if (!artDetails) {
    return <div>Work not found</div>;
  }

  return (
    <div>
      {/* Conteneur pour l'image de l'œuvre d'art */}
      <section id="imageContainer">
        <img
          className="imgContainer"
          src={artDetails.primaryImageSmall}
          alt={artDetails.title}
        />
      </section>
      {/* Conteneur pour les détails textuels de l'article */}
      <section id="articleTextContainer">
        <h1>{artDetails.title}</h1>
        <h2>Artist: {artDetails.artistDisplayName}</h2>
        <h3>Description</h3>
        <p>
          {artDetails.artistDisplayName} born in {artDetails.artistBeginDate}{" "}
          and died in {artDetails.artistEndDate}. The materials used for this
          work of art are {artDetails.medium}. The place of origin is{" "}
          {artDetails.creditLine}.{artDetails.geographyType} {artDetails.city}{" "}
          {artDetails.country}{" "}
        </p>
        <p>Pays : {artDetails.country}</p>
      </section>
    </div>
  );
}

export default Article;
