import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/models/news';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {

  @Input() article: Article;
  @Input() i: number;

  constructor(private iab: InAppBrowser) { }

  ngOnInit() {}

  openArticle(): void{
    const browser = this.iab.create(this.article.url,'_system');
  }

}
