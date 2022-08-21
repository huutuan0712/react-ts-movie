import { unwrapResult } from '@reduxjs/toolkit';
import { GetMovieTopRateResponse } from 'features/movie/movie';
import { getMovieTopRateAction } from 'features/movie/movie.thunk';
import { useAppDispatch } from 'hook/useDispatch';
import React, { useEffect, useState } from 'react';

export default function useMoiveTopRate() {
  const [data, setData] = useState<GetMovieTopRateResponse | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();

  const getMovieTopRate = async () => {
    setLoading(true);
    dispatch(getMovieTopRateAction({ page }))
      .then(unwrapResult)
      .then((res: any) => {
        setData(res);
      })
      .catch((err: any) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const handleBack = () => {
    if (page === 1) return;
    setPage(page - 1);
  };
  const handleNext = () => {
    setPage(page + 1);
  };
  useEffect(() => {
    getMovieTopRate();
  }, [page]);
  return { data: data?.results, loading, handleBack, handleNext };
}
