import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePipe } from './image.pipe';
import { MoviesPairPipe } from './movies-pair.pipe';



@NgModule({
  declarations: [ImagePipe, MoviesPairPipe],
  imports: [
    CommonModule
  ],
  exports:[ImagePipe, MoviesPairPipe]
})
export class PipesModule { }
