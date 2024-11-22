import "./Compteur.css";

interface compteurType {
  likeCount: number;
}

export default function Compteur({ likeCount }: compteurType) {
  return (
    <div className="compteur">
      <h2>
        You liked {likeCount} artwork{likeCount > 1 ? "s" : ""}
      </h2>
    </div>
  );
}
