import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Article } from '../../models/news';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  
  articles: Article[]
  constructor(private news: NewsService) {
    this.articles = [];
  }


  ngOnInit(): void{
    this.news.getTopHedlines().subscribe((response) =>{
      this.articles.push(...response.articles)
      
    })
  }
}
