import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  usuarios: Observable<any>;

  @ViewChild( IonList ) ionList: IonList;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.usuarios = this.data.getUsuarios();
  }

  favourite(user: any): void {
    console.log('fav' , user);
    this.ionList.closeSlidingItems();
  }
  share(user: any): void{
    console.log('share' , user);
    this.ionList.closeSlidingItems();

  }
  delete(user: any): void{
    console.log('delete' , user);
    this.ionList.closeSlidingItems();

  }


}
