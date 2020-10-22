import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicoPage } from './inico.page';

const routes: Routes = [
  {
    path: '',
    component: InicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicoPageRoutingModule {}
