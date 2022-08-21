import React from 'react';
import useMoviePopular from './Popular.hook';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ROUTE } from 'routes/routes';
import Heading from 'components/heading/Heading';
import MovieCard from 'components/movie-card/MovieCard';
import Loader from 'components/loading/Loader';
export default function Popular() {
  const { data, loading, handleBack, handleNext } = useMoviePopular();
  if (loading) return <Loader />;
  if (!data) return null;
  return (
    <>
      <Heading onBack={handleBack} onNext={handleNext}>
        Popular
      </Heading>
      <Swiper
        className="p-2"
        slidesPerView={4}
        spaceBetween={50}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data?.map((it, idx) => (
          <SwiperSlide className="h-auto" key={idx}>
            <MovieCard movie={it} />
          </SwiperSlide>
        ))}
      </Swiper>
      ;
    </>
  );
}
