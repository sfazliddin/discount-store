import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { BASE_PATH } from "../assets/constants";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`${BASE_PATH}/search?q=${query}`);
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-2 max-w-md">
      <input
        type="text"
        placeholder="Search for items..."
        className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
        aria-label="Search products"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="px-6 py-2 bg-yellow-400 rounded-md hover:bg-yellow-500 transition-colors"
        aria-label="Search"
      >
        Search
      </button>
    </form>
  );
}
