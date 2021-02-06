import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { Article } from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  articles: Article[]

  constructor(private storage: Storage) { 
    this.articles = [];
    this.loadArticle();
  }

  saveArticle(article: Article): void{
    const exist = this.articles.find(a => a.title == article.title);
    if (!exist) {
      this.articles.unshift(article);
      this.storage.set('favoritos',this.articles);
    }
  }

  async loadArticle():Promise<void>{

   const favoritos = await this.storage.get('favoritos')
   this.articles = favoritos;
  }
}
