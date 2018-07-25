import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import {Router} from '@angular/router';
import { MoviesService } from 'services/moviesService.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movieId:number
  actualMovie:Object
  constructor(private route:ActivatedRoute,private mS:MoviesService) { }

  

  ngOnInit() {
    this.route.params
      .subscribe((params) => this.movieId = Number(params['id']));
      this.actualMovie=this.mS.getMovie(this.movieId)
  }

}
