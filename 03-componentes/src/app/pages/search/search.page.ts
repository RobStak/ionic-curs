import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  albums: any[];
  filter: string;
  constructor(private data: DataService) {
    this.albums = [];
    this.filter = '';
   }

  ngOnInit() {
    this.data.getAlbums().subscribe((response) => {this.albums = response})
  }

  

}
