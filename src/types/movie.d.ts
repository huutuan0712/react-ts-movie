export interface Movie {
  adult: boolean;
  backdrop_path: any;
  belongs_to_collection: any;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: production_companies[];
  production_countries: production_countries[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: spoken_languages[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface production_companies {
  id: number;
  name: string;
  logo_path: string;
  origin_country: string;
}
export interface production_countries {
  iso_3166_1: string;
  name: string;
}
export interface spoken_languages {
  iso_639_1: string;
}
