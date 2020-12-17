import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes: string[];
  toggle: boolean;
  constructor() {
    this.personajes = ['Aquaman', 'Superman', 'Batman', 'Mujer Maravilla', 'Flash'];
    this.toggle = false;
   }

  ngOnInit() {
  }

  doReorder(event: any): void{
    const item: string = this.personajes.splice(event.detail.from, 1)[0];
    this.personajes.splice(event.detail.to, 0, item);
    event.detail.complete();
  }
}
