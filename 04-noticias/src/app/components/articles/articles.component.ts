import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/models/news';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  
  @Input() fav: boolean = false
  @Input() articles: Article[];
  
  constructor() { }

  ngOnInit() {}

}
