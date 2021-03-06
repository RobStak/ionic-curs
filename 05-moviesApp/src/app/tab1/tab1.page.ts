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
  popularMovies: movie[];
  currentPopularPage: number;
  
  constructor(private service: MoviesService) {
    this.lastMovies = [];
    this.popularMovies = [];
    this.currentPopularPage = 1;
  }

  ngOnInit(){
    this.getCartellera();
    this.getPopulars();
  }

  loadMorePopular():void{
    this.currentPopularPage ++;
    this.getPopulars();
  }

  private getCartellera(): void{
    this.service.getCartellera().subscribe( (response) =>{
      if (response){
        this.lastMovies = response.results;
      }
    });
  }
  private getPopulars(): void{
    this.service.getPopulars(this.currentPopularPage).subscribe( (response) =>{
      if (response){
        const tmpPopulars = [... this.popularMovies, ...response.results]
        this.popularMovies = tmpPopulars;
        //this.popularMovies = response.results;
      }
    });
  }
}
