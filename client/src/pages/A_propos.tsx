import "./A_propos.css";
import dreamTeam from "../assets/images/dreamteam.jpg";
function A_Propos() {
  return (
    <section className="mainAbout">
      <section className="dreamTeamSection">
        <img className="dreamTeam" src={dreamTeam} alt="photo-d'equipe" />
        <br />
        <h1 id="titre-a-propos">Our dream team</h1>
      </section>
      <div className="textesEtSousTitre">
        <h2 id="soustitre-apropos">Nos idées</h2>
        <p id="text">
          WeArt nait du besoin de vulgariser l'art grâce à un moyen accessible
          comme la technologie. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Nesciunt laborum amet omnis! Beatae aliquam cum
          dolores libero sed quisquam, quae aut asperiores. Ea neque a porro
          dolores repudiandae quos excepturi. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Amet iusto ipsam excepturi autem, saepe
          distinctio asperiores error doloremque maxime id. Eos porro magnam eum
          accusamus quis nostrum et maxime error.
        </p>
      </div>
    </section>
  );
}

export default A_Propos;
