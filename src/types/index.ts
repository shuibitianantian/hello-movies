type ReduxAction = {
  type: string;
  payload: any;
};

type TitleState = {
  pageTitle: string;
};

type HomePageState = {
  movies: object[];
  searchKey: string | null;
  results: object[] | null;
};

export type { ReduxAction, TitleState, HomePageState };
