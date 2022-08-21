import { AxiosResponse } from 'axios';
import {
  GetMovieGenresParams,
  GetMovieGenresResponse,
  GetMovieLatestParams,
  GetMovieLatestResponse,
  GetMoviePopularParams,
  GetMoviePopularResponse,
  GetMovieTopRateResponse,
  GetMovieTrendingParams,
  GetMovieTrendingResponse,
} from 'features/movie/movie';
import { Movie } from 'types';
import axiosClient from './axiosClient';
import { API_ENDPOINT } from './endPoint';

type GetMoviePopular = (
  params: GetMoviePopularParams
) => Promise<AxiosResponse<GetMoviePopularResponse>>;
type GetMovieTopRate = (
  params: GetMoviePopularParams
) => Promise<GetMovieTopRateResponse>;
type GetMovieGenres = (
  params: GetMovieGenresParams
) => Promise<AxiosResponse<GetMovieGenresResponse>>;
type GetMovieTrending = (
  params: GetMovieTrendingParams
) => Promise<AxiosResponse<GetMovieTrendingResponse>>;
type GetMovieLatest = () => Promise<AxiosResponse<GetMovieLatestResponse>>;
export const getMoviePopular: GetMoviePopular = (params) =>
  axiosClient.get(API_ENDPOINT.MOVIE.POPULAR, { params });

export const getMovieTopRate: GetMovieTopRate = (params) =>
  axiosClient.get(API_ENDPOINT.MOVIE.TOP_RATE, { params });

export const getMovieGenres: GetMovieGenres = (params) =>
  axiosClient.get(API_ENDPOINT.MOVIE.GENRES, { params });
export const getMovieTrending: GetMovieTrending = (params) =>
  axiosClient.get(API_ENDPOINT.MOVIE.TRENDING, { params });

export const getMovieLatest: GetMovieLatest = () =>
  axiosClient.get(API_ENDPOINT.MOVIE.LATEST);
