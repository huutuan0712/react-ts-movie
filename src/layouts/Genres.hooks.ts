import { unwrapResult } from '@reduxjs/toolkit';
import { GetMovieGenresResponse } from 'features/movie/movie';
import { getMovieGenresAction } from 'features/movie/movie.thunk';
import { useAppDispatch } from 'hook/useDispatch';
import React, { useEffect, useState } from 'react';

export default function useGenres() {
  const [data, setData] = useState<GetMovieGenresResponse | undefined>(
    undefined
  );

  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const getGenres = async () => {
    setLoading(true);
    dispatch(getMovieGenresAction({ name: '' }))
      .then(unwrapResult)
      .then((res: any) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    getGenres();
  }, []);

  return { data: data?.genres, loading };
}
