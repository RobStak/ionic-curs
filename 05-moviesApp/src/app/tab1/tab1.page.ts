import { Component, OnInit } from '@angular/core';
import { movie } from '../models/movies';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  lastMovies: movie[];
  
  constructor(private service: MoviesService) {}

  ngOnInit(){
    this.service.getCartellera().subscribe( (response) =>{
      if (response){
        this.lastMovies = response.results;
      }
      console.log(response)
    }
      );
    
  }
}
