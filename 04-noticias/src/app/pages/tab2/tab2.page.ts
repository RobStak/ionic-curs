import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { NewsService } from '../../services/news.service';
import { Article } from '../../models/news';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  @ViewChild(IonSegment , { static: true }) segment: IonSegment;
  categories: string[];
  category: string;

  articles: Article[];

  constructor(private news: NewsService) {
    this.categories= ['business','entertainment','general','health','science','sports','technology'];
    this.category = this.categories[0];
    this.articles = [];
  }

  ngOnInit(): void{
    this.segment.value = this.category;
    this.segment.ionChange.subscribe((event) => {this.segmentChanged(event)})  
    this.requestArticles();
  }

  segmentChanged(event){
    this.category = event.detail.value;
    this.articles = [];
    this.requestArticles();
  }

  loadData(event): void{
    this.requestArticles(event);
  }

  private requestArticles(event?): void{
    this.news.getTopHedlinesCategory(this.segment.value).subscribe((response) =>{
      this.articles.push(...response.articles);
      if(event){
        event.target.complete();
        if (response.articles.length == 0){event.target.disabled = true;}
      }
    })
  }

}
