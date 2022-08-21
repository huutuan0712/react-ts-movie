import Heading from 'components/heading/Heading';
import Loader from 'components/loading/Loader';
import MovieCard from 'components/movie-card/MovieCard';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import useMoiveTopRate from './TopRate.hook';

export default function TopRate() {
  const { data, loading, handleBack, handleNext } = useMoiveTopRate();

  if (loading) return <Loader />;
  if (!data) return null;
  return (
    <>
      <Heading onBack={handleBack} onNext={handleNext}>
        Top Rate
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
