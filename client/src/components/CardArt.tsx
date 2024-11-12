import basqImg from "../assets/images/basquiat.jpg";
import "./CardArt.css";
function CardArt() {
  return (
    <img className="basquiatImg" src={basqImg} alt="peinture de Basquiat" />
  );
}

export default CardArt;
