import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicoPageRoutingModule } from './inico-routing.module';

import { InicoPage } from './inico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicoPageRoutingModule
  ],
  declarations: [InicoPage]
})
export class InicoPageModule {}
