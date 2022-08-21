import Loader from 'components/loading/Loader';
import useGenres from 'layouts/Genres.hooks';
import React from 'react';

export default function Genres() {
  const { data, loading } = useGenres();
  if (!data) return null;
  if (loading) return <Loader />;
  return (
    <ul className="flex items-center gap-2 mt-10 flex-wrap ">
      {data?.map((it: any, idx: any) => (
        <li className="mb-3" key={idx}>
          <a
            href={`/genres/${it.id}`}
            className="text-orange-500 text-base font-semibold bg-slate-200 px-3 py-2 rounded-3xl hover:bg-orange-500 hover:text-gray-900 translate-all"
          >
            {it.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
