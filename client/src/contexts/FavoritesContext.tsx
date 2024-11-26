// Importation des hooks nécessaires pour créer un contexte et gérer l'état
import { createContext, useContext, useState } from "react";

// Création d'un contexte vide pour les favoris. Ce contexte sera utilisé pour partager l'état des favoris dans toute l'application.
const FavoritesContext = createContext(null);

// Définition d'un composant fournisseur de contexte pour fournir l'état des favoris à toute la partie enfant de l'application.
export function FavoritesProvider({ children }) {
  // Déclaration d'un état `favorites` qui contient la liste des œuvres favorites, et une fonction `setFavorites` pour mettre à jour cette liste.
  const [favorites, setFavorites] = useState([]); // Liste des favoris

  // Retourne le provider du contexte, qui enveloppe les composants enfants. Les enfants peuvent accéder aux favoris via ce provider.
  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children} {/* Le reste de l'application qui peut utiliser ce contexte */}
    </FavoritesContext.Provider>
  );
}

// Définition d'un hook personnalisé `useFavorites` qui permet à d'autres composants de consommer facilement le contexte des favoris.
// Il s'agit d'une abstraction qui simplifie l'accès au contexte à l'intérieur des composants.
export const useFavorites = () => {
  // Récupération de la valeur du contexte avec `useContext`, ce qui permet d'accéder à `favorites` et `setFavorites`.
  const value = useContext(FavoritesContext);

  // Si le contexte est null, cela signifie que le composant essaie d'utiliser `useFavorites` en dehors du `FavoritesProvider`.
  // Dans ce cas, une erreur est lancée.
  if (value == null) {
    throw new Error("useFavorites must be used within <FavoritesProvider>");
  }

  // Retourne la valeur du contexte, qui contient `favorites` et `setFavorites`.
  return value;
};

// Export du contexte par défaut pour une utilisation éventuelle dans d'autres parties de l'application.
export default FavoritesContext;
