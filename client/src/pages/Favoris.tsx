import CardArt from "../components/CardArt";
import "./Favoris.css";

export default function Favoris() {
  return (
    <>
      <section className="mainFavoris">
        <p>Ci-dessous vos pièces d'arts préférées :</p>
        <div className="CardArtFavorites">
          <CardArt />
          <CardArt />
          <CardArt />
        </div>
      </section>
    </>
  );
}
