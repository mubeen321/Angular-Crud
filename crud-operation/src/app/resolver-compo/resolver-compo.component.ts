import { Component, customMethod, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { car } from '../data';
import { HttpClient } from '@angular/common/http'
import { ResolverService } from '../resolver-service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-resolver-compo',
  templateUrl: './resolver-compo.component.html',
  styleUrls: ['./resolver-compo.component.css']
})
export class ResolverCompoComponent implements OnInit, customMethod {

  @ViewChild('matTable') matTable;
  @ViewChild('tableData') tableData;
  
  displayedColumns: string[] = ['id', 'postId' ,'name', 'email','action'];
  displayedColumns2: string[] = ['id', 'login' ,'node_id', 'url','action'];

  // datas : data[]; //for data interface
  cars: car[]; //for car interface
  users = []; //for api data using common service
  empArr = []; //for api data
  data : any; //direct api call
  itemsss: any;

  formGroup! : FormGroup;
  
  constructor(private aRoute: ActivatedRoute, private http: HttpClient) {
    
    console.log("ResolverComponent Loaded");

    // this.aRoute.data.subscribe(data => {
      
    // })
    
    this.aRoute.data.subscribe((data:  any ) => {

      console.log("1 : ",data);
      
      data.dataRecords.dataaaaa.subscribe(items => {
        console.log("itemsssssssss : ",items);        
      })

      //static data used .then() because it's type is Promise
      data.dataRecords.carData.then((response) => {
        console.log("carData : ", response);
        this.cars = response;
      });

      //dynamic data used .subscribe() because it's type is Observable
      data.dataRecords.userData.subscribe((userDetails) => {
        console.log("userDetails : ", userDetails);
        this.users = userDetails;
      });

      data.dataRecords.githubData.subscribe((githubData) => {
        console.log("githubData : ", githubData);
        this.empArr = githubData;
      });

      // this.users = data.dataRecords;
      // this.users = [];
      // console.log('Api data : ',this.users)

    })

    aRoute.data.subscribe(() => {
      this.http.get('https://api.github.com/users').subscribe(res => {
        this.data = res;
        console.log("direct call data : ", this.data);
      });
    })

    // aRoute.data.subscribe(data => {
    //   data.dataRecords.items.subscribe((items:any) => {
    //     this.itemsss = items;
    //     console.log("itemssss : ",items);
        
    //   })
    // })
    //github Api data
  //   aRoute.data.subscribe(data => {
  //     this.empArr = data.dataRecords;
  //     console.log("Github data : ",this.empArr);
  // })

  }
  ngcustomMethod(): void {
    console.log("this is custom method");
  }

  name: string;
  email: string
  
  ngOnInit(): void {

    console.log("this is ngoninit method");
    this.formGroup = new FormGroup({
      name: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required)
    })

    console.log("emp array : ",this.empArr);
    
    // this.cars = this.route.snapshot.data['dataRecords'];
    // console.log("Cars Data : ",this.cars);
    // this.datas = this.route.snapshot.data['dataRecords'];
    // console.log("Data : ",this.datas);
  }

  ngChange(){
    this.formGroup.patchValue({
      email: this.formGroup.value.name
    })
  }

  editRecord(data: any){
    console.log("data : ",data);

    this.formGroup.patchValue({
      name: data.name,
      email: data.email
    })
    
  }

  deleteRecord(i : number){
    // console.log("Data data data : ",this.data);
    this.empArr.splice(i,1);
    this.matTable.renderRows();


    this.users.splice(i,1);
    this.tableData.renderRows();
  }

  namee: any

  ngOnChanges(namee: any){
    namee = this.name
    console.log(namee);
    
  }
}

