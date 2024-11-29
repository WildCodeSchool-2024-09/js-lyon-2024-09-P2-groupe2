import "./SearchBar.css";

interface SearchBarProps {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

function SearchBar({ searchText, setSearchText }: SearchBarProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value); // Met à jour l'état avec la nouvelle valeur de l'input
  };

  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Search an artwork"
        value={searchText}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
