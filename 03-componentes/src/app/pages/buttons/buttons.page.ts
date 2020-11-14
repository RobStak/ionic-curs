import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.page.html',
  styleUrls: ['./buttons.page.scss'],
})
export class ButtonsPage implements OnInit {

  fav: boolean ;
  constructor() { this.fav = false; }

  ngOnInit() {
  }

  onClick(): void{
    this.fav = !this.fav;
  }
}
