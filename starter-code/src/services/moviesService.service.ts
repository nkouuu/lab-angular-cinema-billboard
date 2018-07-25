import { movies } from "sample-movies";
import { Injectable } from "../../node_modules/@angular/core";
interface movie {
  id: number;
  title: string;
  poster: string;
  synopsis: string;
  genre: Array<string>;
  year: number;
  director: string;
  actors: Array<string>;
  hours: Array<string>;
  room: number;
}
@Injectable()
export class MoviesService {
  movies: Array<movie> = movies;
  constructor() {
    console.log(this.movies);
  }

  getMovies(): Array<movie> {
    return this.movies;
  }

  getMovie(id): movie {
    return this.movies.filter(e => e.id == id)[0];
  }
}
