import { unwrapResult } from '@reduxjs/toolkit';
import { GetMovieTrendingResponse } from 'features/movie/movie';
import { getMovieTrendingAction } from 'features/movie/movie.thunk';
import { useAppDispatch } from 'hook/useDispatch';
import React, { useEffect, useState } from 'react';

export default function useTrending() {
  const [data, setData] = useState<GetMovieTrendingResponse | undefined>(
    undefined
  );
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const getTrending = async () => {
    setLoading(true);
    dispatch(getMovieTrendingAction({ page }))
      .then(unwrapResult)
      .then((res: any) => {
        setData(res);
      })
      .catch((err) => {
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
    getTrending();
  }, [page]);

  return { data: data?.results, loading, handleBack, handleNext };
}
