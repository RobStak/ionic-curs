import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inico',
  templateUrl: './inico.page.html',
  styleUrls: ['./inico.page.scss'],
})
export class InicoPage implements OnInit {

  constructor() { }

  components: Componente[] = [];

  ngOnInit() {
    this.components = [
      {
        icon: 'american-football-outline',
        name: 'Action sheet',
        redirectTo: '/action-sheet'
      },
      {
        icon: 'alert-circle-outline',
        name: 'alert',
        redirectTo: '/alert'
      },
      {
        icon: 'beaker-outline',
        name: 'avatar',
        redirectTo: '/avatar'
      },
      {
        icon: 'radio-button-off-outline',
        name: 'Buttons',
        redirectTo: '/buttons'
      }
    ];
  }

}

interface Componente{
  icon: string;
  name: string;
  redirectTo: string;
}
