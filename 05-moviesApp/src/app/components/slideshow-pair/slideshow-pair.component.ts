import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { movie } from 'src/app/models/movies';

@Component({
  selector: 'app-slideshow-pair',
  templateUrl: './slideshow-pair.component.html',
  styleUrls: ['./slideshow-pair.component.scss'],
})
export class SlideshowPairComponent implements OnInit {

  @Input() movies: movie[] = [];
  @Output() onLoadMore = new EventEmitter();

  moviesSlide = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -10
  }
  constructor() { }

  ngOnInit() {}

  loadMore(): void{
    this.onLoadMore.emit();
  }

}
