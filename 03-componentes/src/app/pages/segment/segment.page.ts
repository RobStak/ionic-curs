import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  superHeroes: Observable<any>;
  filter: string;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.superHeroes = this.data.getHeroes();
  }

  segmentChanged(event){
    switch (event.detail.value) {
      case 'todos':
        this.filter = '';
        break;
      default:
        this.filter = event.detail.value;
        break;
    }
    
  }

}
