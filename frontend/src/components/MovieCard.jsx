import { addToWatchlist } from "../api/userApi";
import Navbar from "./Navbar";

function MovieCard({ movie }) {
  if (!movie) return null;

  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null;

  const handleWatchlist = async () => {
    try {
      await addToWatchlist(movie);
      alert("Added to watchlist");
    } catch (err) {
      console.log(err);
      alert("Failed");
    }
  };

  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto mt-10 bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl flex">
        {poster && (
          <img
            src={poster}
            alt={movie.title}
            className="w-80 object-cover"
          />
        )}

        <div className="p-8 flex-1">
          <h2 className="text-4xl font-bold mb-2">
            {movie.title}
          </h2>

          <p className="text-zinc-400 mb-4">
            {movie.release_date} • ⭐ {movie.vote_average}
          </p>

          <p className="text-zinc-200 leading-relaxed mb-6">
            {movie.overview}
          </p>

          <div className="flex gap-4">
            <button
              onClick={handleWatchlist}
              className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl font-semibold"
            >
              Add to Watchlist
            </button>

            <a
              href={`https://www.themoviedb.org/movie/${movie.id}`}
              target="_blank"
              rel="noreferrer"
              className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-semibold"
            >
              View Details
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
