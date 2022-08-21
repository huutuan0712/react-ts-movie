import Heading from 'components/heading/Heading';
import Loader from 'components/loading/Loader';
import Card from 'components/movie-card/Card';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import useTrending from './useTrending.hook';

export default function Trending() {
  const { data, loading, handleBack, handleNext } = useTrending();
  if (loading) return <Loader />;
  if (!data) return null;
  return (
    <>
      <Heading onBack={handleBack} onNext={handleNext}>
        Trending
      </Heading>
      {/* <Card movie={data[1]} /> */}
      <Swiper className="p-2" slidesPerView={1} spaceBetween={20}>
        {data?.map((it, idx) => (
          <SwiperSlide className="h-auto" key={idx}>
            <Card movie={it} />
          </SwiperSlide>
        ))}
      </Swiper>
      ;
    </>
  );
}
