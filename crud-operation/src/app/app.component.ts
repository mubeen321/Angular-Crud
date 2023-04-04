import { Component, OnInit, ViewChild } from '@angular/core';
// import { Fo } from "@angular/forms";
import { Validators, FormControl, FormGroup } from "@angular/forms";
import { MatTable } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'crud-operation';

  
  @ViewChild('matTable') matTable;
  
  displayedColumns: string[] = ['id', 'login', 'url' ,'type','action'];
  
  empArr : any;
  
  constructor(private aRoute: ActivatedRoute){

    console.log("App Component Loader");
    // this.aRoute.data.subscribe((data:any) => {
    //   data.records.appCompoData.subscribe((appCompoData) => {
    //     console.log("App compo data : ",appCompoData);
    //     this.empArr = appCompoData;
    //     console.log("@ : ",this.empArr);
        
    //   })
    // })
    // this.aRoute.data.subscribe(data => {
    //   this.empArr = data.records;
    //   console.log("emp Arr : ",this.empArr); 
    //   if (this.matTable) {
    //     this.matTable.renderRows();
    //   }
    // })

    // this.aRoute.data.subscribe(res => {
    //   res.records.appCompoData.subscribe(data => {
    //     this.empArr = data;
    //     console.log("direct : ", this.empArr);
    //   })
    // })
    
  }

  ngOnInit(){

    console.log("App Component Loader 2");
    // this.dataForm =  new FormGroup({
    //   name: new FormControl('',Validators.required),
    //   number: new FormControl('',Validators.required),
    //   password: new FormControl('',Validators.required),
    //   address: new FormControl('',Validators.required)
    // });
  }



  // displayData(data){
  //   // data = this.dataForm;
  //   this.dataSource.push(this.dataForm.value);
  //   console.log("data : ",this.dataSource);
  //   this.dataForm.reset();
  //   this.matTable.renderRows();
  // }

  // update(i: any){
  //   this.dataForm.patchValue({
  //     name: i.name,      
  //     number: i.number,
  //     password: i.password,
  //     address: i.address
  //   });
  //   console.log("name : ",this.name);
  // }

  deleteRecord(i: number){
    this.empArr.splice(i,1);
    this.matTable.renderRows();
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }
}
