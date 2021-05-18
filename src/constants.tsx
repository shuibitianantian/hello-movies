const apiKey: string = "a70769ed423b6e1145c98ff67b4448b5";

export const navBarTitles: string[] = ["Home", "Movies", "Liked", "Blocked"];

export const trendings: string = `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`;

export const query: string = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&`;

export const movieDetail: string = `https://api.themoviedb.org/3/movie/$$?api_key=${apiKey}&language=en-US`;

export const movieDBImageSourceUrl: string =
  "https://image.tmdb.org/t/p/original/";
