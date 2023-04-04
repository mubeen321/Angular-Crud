import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CommonService } from "src/app/common.service";
import { FormComponent } from '../form/form.component';
import { ValidatorsComponent } from '../validators/validators.component';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {
  
  @ViewChild('MatTable') MatTable;

  @Input ('dataa') dataa : ValidatorsComponent;
  displayedColumns: string[] = ['srNo', 'name', 'address', 'number','password','action'];

  message : any;

  name: Array<any>;
  address: Array<any>;
  number: Array<number>;
  password: Array<any>;

  recordsPerPage: number = 10;
  currentPage = 1;
  
  dataSource = [];

  data = [];
  constructor(private ser: CommonService) {
    console.log("RecordsComponent Loaded\n");
    console.log("dataaa : ",this.dataa);
    
   }

  ngOnInit(): void {
    this.message = this.ser.getTheData();
    console.log("Message : ",this.message);
    // console.log("form data : ", FormComponent.records);
    // this.dataSource.push(FormComponent.records);
    console.log(">>>> : ", this.dataSource)
    // this.dataSource = FormComponent.records;
  }

  Search(i){
    this.dataSource = this.dataSource.filter( res => {
      return res.title.toLocaleLowerCase().match(i.toLocaleLowerCase());
    })
  }

  deletedata(i: number){
    this.dataSource.splice(i,1);
  }

}