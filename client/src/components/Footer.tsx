import "./Footer.css";
import facebook from "../assets/images/facebook.svg";
import instagram from "../assets/images/instagram.svg";
import twiter from "../assets/images/twitter.svg";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-cadre">
        <h3 className="footer-titre">Disclaimer</h3>
        <p className="footer-texte">
          The works and images are presented for educational purposes. Copyright
          is held by its owners. We do not guarantee the accuracy of the
          information.
        </p>
      </div>
      <div>
        <div className="footer-logos">
          <img src={facebook} alt="logo facebook" />
          <img src={twiter} alt="logo twiter" />
          <img src={instagram} alt="logo instagram" />
        </div>
        <div className="footer-copyright">Copyright 2024</div>
      </div>
    </div>
  );
}

export default Footer;
