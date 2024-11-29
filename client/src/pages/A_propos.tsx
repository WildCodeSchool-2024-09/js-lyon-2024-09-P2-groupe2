import "./A_propos.css";
import dreamTeam from "../assets/images/dreamteam.png";
function A_Propos() {
  return (
    <section className="mainAbout">
      <section className="dreamTeamSection">
        <img className="dreamTeamImage" src={dreamTeam} alt="photo-d'equipe" />
        <br />
        <h1 id="titre-a-propos">Our dream team</h1>
      </section>
      <div className="textesEtSousTitre">
        <h2 id="soustitre-apropos">Our ideas</h2>
        <p id="text">
          WeArt is a platform dedicated to celebrating art in all its forms.
          <br />
          <br />
          Inspired by our passion for beauty and contemplation, we have created
          a space where everyone can explore, discover, and marvel at the
          artistic treasures of the Metropolitan Museum of New York. <br />
          <br /> Our mission is simple: to make the incredible richness of this
          iconic museum's free database accessible to all. <br />
          <br />
          By bringing artworks from different eras and cultures to your
          fingertips, WeArt invites art enthusiasts, the curious, and newcomers
          to dive into a world of creativity and cultural heritage. <br />
          <br />
          Join us to discover, share, and celebrate the infinite richness of
          humanity through its artistic expressions.
        </p>
      </div>
    </section>
  );
}

export default A_Propos;
