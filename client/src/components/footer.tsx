import "./Footer.css";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-cadre">
        <h3 className="footer-titre">Disclaimer</h3>
        <p className="footer-texte">
          Les œuvres et images sont présentées à des fins éducatives. Les droits
          d'auteur appartiennent à leurs détenteurs. Nous ne garantissons pas
          l'exactitude des informations.
        </p>
      </div>
      <div className="footer-copyright">Copyright 2024</div>
    </div>
  );
}

export default Footer;
