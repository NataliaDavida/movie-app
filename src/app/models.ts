export interface Movie {
    id: string;
    poster_path: string;
    title: string;
    overview: string;
    release_date: number;
    genres: Array<Genre>;
    vote_average: Array<Rating>;
    vote_count: number;
    video: Array<any>;
}
  
  export interface APIResponse<T> {
      results: Array<T>;
  }
  
  interface Genre {
    name: string;
  }
  
  interface Rating {
    id: number;
    count: number;
    title: string;
  }
  
  
  
  