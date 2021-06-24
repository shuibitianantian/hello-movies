export type ReduxAction = {
  type: string;
  payload: any;
};

export type TitleState = {
  pageTitle: string;
};

export type HomePageState = {
  movies: object[];
  searchKey: string | null;
  tmpSearchKey: string | null;
  results: object[] | null;
};

export type MovieDetail = {
  genres: object[];
  id: number | string;
  original_title: string;
  overview: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
  release_date: string;
  poster_path: string;
  backdrop_path: string;
};

export type SearchResult = {
  curPage: number;
  totalPage: number;
  movieDetails: MovieDetail[];
};
