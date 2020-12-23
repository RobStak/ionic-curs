import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {

  porcentage: number = 0.05

  constructor() { }

  ngOnInit() {
  }

  rangeChanged(event: any): void{
    this.porcentage = event.detail.value / 100;
  }

}
