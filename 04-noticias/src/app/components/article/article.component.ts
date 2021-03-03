import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/models/news';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController, Platform, ToastController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { DataService } from '../../services/data.service';
import { Button } from 'protractor';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {

  @Input() article: Article;
  @Input() i: number;
  @Input() fav: boolean;

  constructor(private iab: InAppBrowser, 
              public actionSheetCtrl: ActionSheetController,
              private socialSharing: SocialSharing,
              private data: DataService,
              private platform: Platform,

              ) { }

  ngOnInit() {}

  openArticle(): void{
    const browser = this.iab.create(this.article.url,'_system');
  }
  async loadMore(): Promise<void>{
    
     let favButton;

    if(this.fav){
      // delete fav
      favButton = {
        text: 'Borrar favorito',
        icon: 'trash',
        cssClass: 'actionDark',
        handler: () => {
          console.log('Delete Favorito clicked');
          this.data.deleteArticle(this.article);
        }
      }
    } else{
      // add favs
      favButton = {
        text: 'Favorito',
        icon: 'star',
        cssClass: 'actionDark',
        handler: () => {
          console.log('Favorito clicked');
          this.data.saveArticle(this.article);
        }
      }
    }
    const actionSheet = await this.actionSheetCtrl.create({
      

      buttons: [ {
        text: 'Compartir',
        icon: 'share',
        cssClass: 'actionDark',
        handler: () => {
          console.log('Share clicked');
          this.shareArticle();
        }
      }, favButton, 
      {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        cssClass: 'actionDark',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
          });
    await actionSheet.present();
  }

  shareArticle(): void{
    if (this.platform.is("cordova")){
      this.socialSharing.share(
        this.article.title,
        this.article.source.name,
        '',
        this.article.url
      );
    } else{
      if (navigator.share) {
        navigator.share({
          title: this.article.title,
          text: this.article.source.name,
          url: this.article.url,
        })
          .then(() => console.log('Successful share'))
          .catch((error) => console.log('Error sharing', error));
      }
    }
  }


}
