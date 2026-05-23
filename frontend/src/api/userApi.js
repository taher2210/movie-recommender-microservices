import axios from "axios";

const USER_URL = "http://127.0.0.1:8001";

const getHeaders = () => ({
  Authorization: `Bearer ${localStorage.getItem("access_token")}`,
});

export const addToWatchlist = async (movie) => {
  const response = await axios.post(
    `${USER_URL}/user/watchlist`,
    {
      movie_id: movie.id,
      title: movie.title,
      poster_url: movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : null,
    },
    {
      headers: getHeaders(),
    }
  );

  return response.data;
};

export const getWatchlist = async () => {
  const response = await axios.get(
    `${USER_URL}/user/watchlist`,
    {
      headers: getHeaders(),
    }
  );

  return response.data;
};
