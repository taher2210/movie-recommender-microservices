import { useEffect, useState } from "react";
import { getWatchlist } from "../api/userApi";
import Navbar from "../components/Navbar";

function Watchlist() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchWatchlist = async () => {
      try {
        const data = await getWatchlist();
        setMovies(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchWatchlist();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="p-10">
        <h1 className="text-4xl font-bold mb-8">
          My Watchlist
        </h1>

        <div className="grid grid-cols-4 gap-6">
          {movies.map((movie) => (
            <div key={movie.id} className="bg-zinc-900 rounded-xl overflow-hidden">
              {movie.poster_url && (
                <img
                  src={movie.poster_url}
                  alt={movie.title}
                  className="w-full h-96 object-cover"
                />
              )}

              <div className="p-4">
                <h2 className="font-semibold">
                  {movie.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Watchlist;
