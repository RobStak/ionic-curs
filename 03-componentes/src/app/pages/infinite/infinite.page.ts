import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {

  data: any [] = Array(20);
  constructor() { }

  @ViewChild( IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  ngOnInit() {
  }

  loadData(): void {

    setTimeout(() => {
      const moreItems = Array(10);
      this.data.push(...moreItems);
      this.infiniteScroll.complete();

      if (this.data. length > 50 ){
        this.infiniteScroll.disabled = true;
      }
    }, 1500);
  }

}
