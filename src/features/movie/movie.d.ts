import {
  Genre,
  Movie,
  MovieGenreResponse,
  MovieLatestResponse,
  MoviePageParams,
  MoviePageResponse,
} from 'types';

export type GetMoviePopularParams = MoviePageParams;
export type GetMoviePopularResponse = MoviePageResponse<Movie>;

export type GetMovieTopRateParams = MoviePageParams;
export type GetMovieTopRateResponse = MoviePageResponse<Movie>;

export type GetMovieGenresParams = MovieGenresParams;
export type GetMovieGenresResponse = MovieGenreResponse<Genre>;

export type GetMovieTrendingParams = MoviePageParams;
export type GetMovieTrendingResponse = MoviePageResponse<Movie<Genre>>;

export type GetMovieLatestParams = MovieLatestParams;
export type GetMovieLatestResponse = MovieLatestResponse;
