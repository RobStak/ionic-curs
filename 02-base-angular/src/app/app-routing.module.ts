import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';


const routes: Routes = [
  {  path: 'home',
    component: HomeComponent
  },
  {  path: 'about',
    component: AboutComponent
  },
  {  path: 'contact',
    component: ContactComponent
  },
  {  path: 'posts',
    // loadChildren: './pages/Posts/posts.module#PostsModule'
    loadChildren: () => import('./pages/Posts/posts.module').then(m => m.PostsModule)
  },
  {  path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
