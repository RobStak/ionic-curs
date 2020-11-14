import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  dayBorn: Date = new Date();
  customPickerOptions = {
    buttons: [{
      text: 'Save',
      handler: (event) => {
        console.log('Clicked Save!');
        console.log(event);
    }
    }, {
      text: 'Log',
      handler: () => {
        console.log('Clicked Log. Do not Dismiss.');
        return false;
      }
    }]
  };

  constructor() { }

  ngOnInit() {
  }

  dayBornChanged(event: any): void{
    console.log(event.detail.value);
  }
}
