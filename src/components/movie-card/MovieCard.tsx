import classNames from 'classnames';
import React, { MouseEvent, useState } from 'react';
import { Movie } from 'types';

import { originalImage } from '../../utils/genresImage';
type Props = {
  movie: Movie;
  className?: string;
};
export default function MovieCard({ movie, className }: Props) {
  const [loader, setLoader] = useState(false);

  return (
    <div className="card card-compact w-full h-full transition-all hover:scale-[1.01] hover:ring-2 ring-orange-500 lg:w-48 ">
      <div className="rounded-box overflow-hidden relative p-1 ">
        <img
          src={originalImage(movie.poster_path)}
          alt=""
          className={classNames(
            'rounded-xl w-full h-full object-cover flex-shrink-0 ',
            {
              hidden: !loader,
            }
          )}
          onLoad={() => setLoader(true)}
        />
        {!loader && (
          <div className="animate-pulse">
            <div className="flex justify-center items-center w-full h-60 bg-gray-300 rounded ">
              <svg
                className="w-12 h-12 text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
              </svg>
            </div>
          </div>
        )}
        <span className="absolute top-3 right-3 text-xs font-medium p-1 rounded-lg  flex items-center bg-orange-500 ">
          {movie.vote_average}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-xs"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </span>
      </div>
      <div className="flex-1 p-2 ">
        <div className="card-body ">
          <h2 className="font-bold text-orange-500 text-base text-ellipsis truncate-two-line">
            {movie.title}
          </h2>
          <p className="text-gray-500 text-sm ">
            {movie.overview.substring(0, 26)}
            {movie.overview.length ? '...' : ''}
          </p>
        </div>
      </div>
    </div>
  );
}
