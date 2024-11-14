import CardArt from "../components/CardArt";
import "./Favoris.css";

export default function Favoris() {
  const oeuvres = ["40", "100", "45"];

  return (
    <>
      <section className="mainFavoris">
        <p>Ci-dessous vos pièces d'arts préférées :</p>
        <div className="cardart">
          {oeuvres.map((number) => (
            <CardArt key={number} id={number} />
          ))}
        </div>
      </section>
    </>
  );
}
