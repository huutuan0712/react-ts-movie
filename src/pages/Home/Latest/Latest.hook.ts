import { unwrapResult } from '@reduxjs/toolkit';
import { GetMovieLatestResponse } from 'features/movie/movie';
import { getMovieLatestAction } from 'features/movie/movie.thunk';
import { useAppDispatch } from 'hook/useDispatch';
import React, { useEffect, useState } from 'react';

export default function useLatest() {
  const [data, setData] = useState<GetMovieLatestResponse | undefined>(
    undefined
  );
  console.log('🚀 ~ file: Latest.hook.ts ~ line 11 ~ useLatest ~ data', data);

  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const getLatest = async () => {
    setLoading(true);
    dispatch(getMovieLatestAction())
      .then(unwrapResult)
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    getLatest();
  }, []);

  return { data, loading };
}
