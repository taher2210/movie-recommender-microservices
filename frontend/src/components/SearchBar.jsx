import { useEffect, useState } from "react";
import { searchMovies } from "../api/metadataApi";

function SearchBar({ onSelectMovie }) {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (query.length < 2) {
      setMovies([]);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        const results = await searchMovies(query);
        setMovies(results);
      } catch (err) {
        console.log(err);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  const handleSelect = (movie) => {
    setQuery(movie.title);
    setMovies([]);
    onSelectMovie(movie.id);
  };

  return (
    <div className="w-full max-w-2xl mx-auto relative">
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-4 rounded-xl bg-zinc-900 text-white text-lg outline-none"
      />

      {movies.length > 0 && (
        <div className="absolute w-full bg-zinc-900 mt-2 rounded-xl shadow-2xl z-50 max-h-96 overflow-y-auto">
          {movies.map((movie) => (
            <div
              key={movie.id}
              onClick={() => handleSelect(movie)}
              className="flex items-center gap-4 p-4 hover:bg-zinc-800 cursor-pointer"
            >
              {movie.poster_url && (
                <img
                  src={movie.poster_url}
                  alt={movie.title}
                  className="w-12 rounded"
                />
              )}

              <div>
                <p className="text-white font-semibold">
                  {movie.title}
                </p>

                <p className="text-zinc-400 text-sm">
                  {movie.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
