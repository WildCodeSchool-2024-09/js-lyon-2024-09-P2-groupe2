import { useEffect, useState } from "react";
import "./CardArt.css";

interface FetchArt {
  title: string;
  primaryImageSmall: string;
  artistDisplayName: string;
  country: string;
}

interface propsType {
  id: string;
}

function CardArt({ id }: propsType) {
  const [fetchArt, setFetchArt] = useState<FetchArt | null>(null);
  useEffect(() => {
    fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`,
    )
      .then((resultatApi) => {
        return resultatApi.json();
      })
      .then((responseJson) => {
        setFetchArt(responseJson);
      });
  }, [id]);

  return (
    <div>
      {fetchArt ? (
        <>
          <img src={fetchArt.primaryImageSmall} alt={fetchArt.title} />
          <h2>{fetchArt.title}</h2>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default CardArt;
