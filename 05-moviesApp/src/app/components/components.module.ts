import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { PipesModule } from '../pipes/pipes.module';

import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { SlideshowPairComponent } from './slideshow-pair/slideshow-pair.component';


@NgModule({
  declarations: [ SlideshowBackdropComponent, 
                  SlideshowPosterComponent, 
                  SlideshowPairComponent],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ], 
  exports:[   SlideshowBackdropComponent, 
              SlideshowPosterComponent,
              SlideshowPairComponent]
})
export class ComponentsModule { }
