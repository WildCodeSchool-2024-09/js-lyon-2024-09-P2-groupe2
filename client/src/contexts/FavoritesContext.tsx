import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface artType {
  objectID: string;
}

const FavoritesContext = createContext(null);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<artType[]>([]);

  const isArtLiked = (objectID: string) => {
    return favorites.some((artWork) => artWork.objectID === objectID);
  };

  const toggleFavorite = (art: artType) => {
    if (!art) return;

    const alreadyLiked = isArtLiked(art.objectID);

    if (alreadyLiked) {
      setFavorites((prev) =>
        prev.filter((artWork) => artWork.objectID !== art.objectID),
      );
    } else {
      setFavorites((prev) => [...prev, art]);
    }
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, setFavorites, isArtLiked, toggleFavorite }}
    >
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
