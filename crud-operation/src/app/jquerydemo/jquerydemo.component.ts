import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from "jquery";

declare var $: any;

@Component({
  selector: 'app-jquerydemo',
  templateUrl: './jquerydemo.component.html',
  styleUrls: ['./jquerydemo.component.css']
})
export class JquerydemoComponent implements OnInit {

  displayedColumns2: string[] = ['id', 'login' ,'node_id', 'url','action'];

  data = [];

  constructor(private aRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.aRoute.data.subscribe(res => {
      res.jqueryDemoData.jquerydemodata.subscribe(data => {
        this.data = data;
        console.log(data);
      })
    })
  }

  

  isShown: boolean = true ; // hidden by default


toggleShow() {

this.isShown = ! this.isShown;

}

}
