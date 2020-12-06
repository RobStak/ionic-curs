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
      },
      {
        icon: 'card-outline',
        name: 'Cards',
        redirectTo: '/cards'
      },
      {
        icon: 'checkmark-circle-outline',
        name: 'Checks',
        redirectTo: '/check'
      },
      {
        icon: 'calendar-outline',
        name: 'Date time',
        redirectTo: '/date-time'
      },
      {
        icon: 'car-outline',
        name: 'Fab',
        redirectTo: '/fab'
      },
      {
        icon: 'grid-outline',
        name: 'Grid',
        redirectTo: '/grid'
      },
      {
        icon: 'infinite-outline',
        name: 'Infinite scroll',
        redirectTo: '/infinite'
      },
      {
        icon: 'hammer-outline',
        name: 'Input forms',
        redirectTo: '/input'
      },
      {
        icon: 'list-outline',
        name: 'List',
        redirectTo: '/list'
      }
    ];
  }

}

interface Componente{
  icon: string;
  name: string;
  redirectTo: string;
}
