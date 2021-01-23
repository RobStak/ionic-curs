import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  @ViewChild(IonSegment , { static: true }) segment: IonSegment;
  categories: string[];
  category: string;

  constructor() {
    this.categories= ['business','entertainment','general','health','science','sports','technology'];
    this.category = this.categories[0];
  }

  ngOnInit(): void{
    this.segment.value = this.category;
  }

  segmentChanged(event){
    // switch (event.detail.value) {
    //   case 'todos':
    //     this.filter = '';
    //     break;
    //   default:
    //     this.filter = event.detail.value;
    //     break;
    // }
    this.category = event.detail.value;
  }

}
