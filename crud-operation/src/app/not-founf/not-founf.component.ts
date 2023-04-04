import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-founf',
  templateUrl: './not-founf.component.html',
  styleUrls: ['./not-founf.component.css']
})
export class NotFounfComponent implements OnInit {

  title = "Page Not Found";

  constructor() {
    console.log('NotFounfComponent Loaded');
   }

  ngOnInit(): void {
  }

}
