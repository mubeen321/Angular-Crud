import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-records',
  templateUrl: './child-records.component.html',
  styleUrls: ['./child-records.component.css']
})
export class ChildRecordsComponent {

  displayedColumns: string[] = ['name','address', 'number', 'password', 'action'];

  records = [];

  keys;

  @Input() name;
  @Input() details;
  @Input() dataSource;
 
  constructor() { }

  ngOnInit(): void {
    this.getParentData();
  }
  
  getParentData(){
    // console.log("dataForm : ",this.dataSource);   
    this.records.push(this.dataSource);
    this.keys = Object.keys(this.details);
    // console.log("records :",this.keys);
    
  }

}
