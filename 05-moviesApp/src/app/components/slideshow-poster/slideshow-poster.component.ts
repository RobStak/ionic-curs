import { Component, Input, OnInit } from '@angular/core';
import { movie } from 'src/app/models/movies';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {

  @Input() movies: movie[] = [];

  moviesSlide = {
    slidesPerView: 3.3,
    freeMode: true
  }
  constructor() { }

  ngOnInit() {}

}
