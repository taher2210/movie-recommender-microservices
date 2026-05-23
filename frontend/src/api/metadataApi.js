import axios from "axios";

const META_URL = "http://127.0.0.1:8002";

export const searchMovies = async (query) => {
  const response = await axios.get(
    `${META_URL}/tmdb/autocomplete`,
    {
      params: { query }
    }
  );

  return response.data;
};

export const getMovieDetails = async (movieId) => {
  const response = await axios.get(
    `${META_URL}/tmdb/movie/${movieId}`
  );

  return response.data;
};
