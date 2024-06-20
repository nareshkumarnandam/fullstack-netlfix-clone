export const API_END_POINT = "http://localhost:8000/api/v1/user";

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzk4ZjlmNTRhODZkN2I0MTczZWFjNTA4ZTU4YzFkMSIsInN1YiI6IjY2MGE2ODQ4NWFhZGM0MDE3YzYzMDQ1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.voAUBLBvVmEz_6GRyAGFKsUiZCnNGaH9YwsCBTP6oHE",
  },
};
export const Now_Playing_Movie = "https://api.themoviedb.org/3/movie/now_playing";
export const Popular_Movie = "https://api.themoviedb.org/3/movie/popular";
export const Top_Rated_Movies = "https://api.themoviedb.org/3/movie/top_rated";
export const Upcoming_Movies = "https://api.themoviedb.org/3/movie/upcoming";

export const  SEARCH_MOVIE_URL="https://api.themoviedb.org/3/search/movie?query=";

export const TMDB_IMG_URL = "https://image.tmdb.org/t/p/w500";