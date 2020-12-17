import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-inico',
  templateUrl: './inico.page.html',
  styleUrls: ['./inico.page.scss'],
})
export class InicoPage implements OnInit {

  constructor(private menuCtrl: MenuController,
              private data: DataService) { }

  components: Observable<Componente[]>;

  ngOnInit() {
    this.components = this.data.getMenu();;
  }

  mostrarMenu(): void {
  this.menuCtrl.open('first');
  }
}


