import { unwrapResult } from '@reduxjs/toolkit';
import { GetMoviePopularResponse } from 'features/movie/movie';
import { getMoviePopularAction } from 'features/movie/movie.thunk';
import { useAppDispatch } from 'hook/useDispatch';

import React, { useEffect, useState } from 'react';

export default function useMoviePopular() {
  const [data, setData] = useState<GetMoviePopularResponse | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const getMoviePopular = async () => {
    setLoading(true);
    dispatch(getMoviePopularAction({ page }))
      .then(unwrapResult)
      .then((res: any) => {
        setData(res);
      })
      .catch((err: any) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  };
  const handleBack = () => {
    if (page === 1) return;
    setPage(page - 1);
  };
  const handleNext = () => {
    setPage(page + 1);
  };
  useEffect(() => {
    getMoviePopular();
  }, [page]);

  return { data: data?.results, loading, handleNext, handleBack };
}
