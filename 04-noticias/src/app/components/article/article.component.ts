import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/models/news';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {

  @Input() article: Article;
  @Input() i: number;

  constructor(private iab: InAppBrowser, 
              public actionSheetCtrl: ActionSheetController,
              private socialSharing: SocialSharing,
              private data: DataService) { }

  ngOnInit() {}

  openArticle(): void{
    const browser = this.iab.create(this.article.url,'_system');
  }
  async loadMore(): Promise<void>{

    const actionSheet = await this.actionSheetCtrl.create({
      
      buttons: [ {
        text: 'Compartir',
        icon: 'share',
        cssClass: 'actionDark',
        handler: () => {
          console.log('Share clicked');
          this.socialSharing.share(
            this.article.title,
            this.article.source.name,
            '',
            this.article.url
          );
        }
      }, {
        text: 'Favorito',
        icon: 'star',
        cssClass: 'actionDark',
        handler: () => {
          console.log('Favorito clicked');
          debugger
          this.data.saveArticle(this.article);
        }
      }, {
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



}
