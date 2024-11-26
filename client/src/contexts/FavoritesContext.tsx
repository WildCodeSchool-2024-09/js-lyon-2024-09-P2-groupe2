import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext(null);

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  //   const [isLiked, setIsLiked] = useState(false); // possible de le rajouter ici et de le retirer de CardArt

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorites = () => {
  const value = useContext(FavoritesContext);
  if (value == null) {
    throw new Error("useFavorites must be used within <FavoritesProvider>");
  }
  return value;
};

// export default FavoritesContext;
