import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { Article } from '../models/news';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  articles: Article[]

  constructor(private storage: Storage, public toastCtrl: ToastController) { 
    this.articles = [];
    this.loadArticle();
  }

  saveArticle(article: Article): void{
    const exist = this.articles.find(a => a.title == article.title);
    if (!exist) {
      this.articles.unshift(article);
      this.storage.set('favoritos',this.articles);
      this.presentToast("S'ha guradat correctament a preferits", 2000);
    }
  }
  deleteArticle(article: Article): void{
    const index = this.articles.findIndex(a => a.title == article.title);
    if (index >= 0) {
       this.articles.splice(index,1);
      this.storage.set('favoritos',this.articles);
      this.presentToast("S'ha eliminat correctament a preferits", 2000);
    }
  }

  async loadArticle():Promise<void>{

   const favoritos = await this.storage.get('favoritos');
   if (favoritos){
     this.articles = favoritos;
   }
  }
  async presentToast(message: string, duration: number) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: duration
    });
    toast.present();
  }
}
