import { useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import { getMovieDetails } from "../api/metadataApi";

function Home() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieSelect = async (movieId) => {
    const details = await getMovieDetails(movieId);
    setSelectedMovie(details);
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold text-center mb-10">
        Movie Recommender
      </h1>

      <SearchBar onSelectMovie={handleMovieSelect} />

      <MovieCard movie={selectedMovie} />
    </div>
  );
}

export default Home;
