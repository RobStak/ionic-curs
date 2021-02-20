import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles/articles.component';
import { IonicModule } from '@ionic/angular';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    ArticleComponent,
    ArticlesComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FlexLayoutModule
  ], exports: [
    ArticlesComponent,
  ]
})
export class ComponentsModule { }
