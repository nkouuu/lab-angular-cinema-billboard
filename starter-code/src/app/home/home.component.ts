import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'services/moviesService.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public mS:MoviesService) {}

  ngOnInit() {
  }

}
