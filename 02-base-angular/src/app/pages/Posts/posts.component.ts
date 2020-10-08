import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  // Properties
  messages: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.messages = this.dataService.getPosts();
    // this.dataService.getPosts()
    //   .subscribe((posts) => {
    //     this.messages = posts;
    //   });
  }
  postClicked(id: number): void{
    console.log(`Click en ${id}`);

  }

}
