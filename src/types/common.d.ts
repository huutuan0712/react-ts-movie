import { Genre, Movie } from './movie';

export type MoviePageParams = {
  page: number;
};

export interface MoviePageResponse<T> {
  page: number;
  results: T[];
  total_results: number;
  total_pages: number;
}

export type MovieGenresParams = {
  name: string;
};

export type MovieGenreResponse = {
  genres: Genre[];
};

export type MovieLatestParams = Movie;

export type MovieLatestResponse = Movie;
