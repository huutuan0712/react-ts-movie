import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getMovieGenres,
  getMovieLatest,
  getMoviePopular,
  getMovieTopRate,
  getMovieTrending,
} from 'api/movie';

import {
  GetMovieGenresParams,
  GetMovieLatestParams,
  GetMoviePopularParams,
  GetMovieTopRateParams,
  GetMovieTrendingParams,
} from './movie';

export const getMoviePopularAction = createAsyncThunk(
  'movie/getMoviePopularAction',
  async (params: GetMoviePopularParams, { rejectWithValue }) => {
    try {
      const res = await getMoviePopular(params);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const getMovieTopRateAction = createAsyncThunk(
  'movie/getMovieTopRateAction',
  async (params: GetMovieTopRateParams, { rejectWithValue }) => {
    try {
      const res = await getMovieTopRate(params);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const getMovieGenresAction = createAsyncThunk(
  'movie/getMovieGenresAction',
  async (params: GetMovieGenresParams, { rejectWithValue }) => {
    try {
      const res = await getMovieGenres(params);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const getMovieTrendingAction = createAsyncThunk(
  'movie/getMovieTrendingAction',
  async (params: GetMovieTrendingParams, { rejectWithValue }) => {
    try {
      const res = await getMovieTrending(params);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const getMovieLatestAction = createAsyncThunk(
  'movie/getMovieLatestAction',
  async (params = undefined, { rejectWithValue }) => {
    try {
      const res = await getMovieLatest();
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
