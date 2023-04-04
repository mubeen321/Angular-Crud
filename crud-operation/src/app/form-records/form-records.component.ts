import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface city {
  value: string;
  label: string;
}


@Component({
  selector: 'app-form-records',
  templateUrl: './form-records.component.html',
  styleUrls: ['./form-records.component.css']
})
export class FormRecordsComponent implements OnInit {

  dataForm!: FormGroup;

  name: string;
  number: number;
  password: string;
  address: string;
  city2: string;
  age: number;

  dataSource = [];

  // data: Array<any>;

  @ViewChild('MatTable') MatTable;

  displayedColumns: string[] = ['name','age', 'address', 'number', 'password', 'city', 'action'];

  cities: city[] = [
    { value: 'Vadodara', label: 'Vadodara' },
    { value: 'Ahemdabad', label: 'Ahemdabad' },
    { value: 'Gandhinagar', label: 'Gandhinagar' }
  ];

  city = new FormControl(this.cities[0].value, [Validators.required]);

  constructor(){
    console.log('FormRecordsComponent Loaded');
  }

  ngOnInit() {
    this.dataForm = new FormGroup({
      name: new FormControl('', Validators.required),
      number: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      age: new FormControl('',Validators.required),
      city: this.city
    });
  }
  submitData() {
    // data = this.dataForm;
    this.dataSource.push(this.dataForm.value);
    console.log("data : ", this.dataSource);
    this.dataForm.reset();
    this.MatTable.renderRows();
  }

  update(i: any) {
    this.dataForm.patchValue({
      name: i.name,
      number: i.number,
      password: i.password,
      address: i.address,
      age: i.age,
      city2: i.city
    });

    this.MatTable.renderRows()
    // console.log("name : ",this.name);
  }

  ngChange(){
    this.dataForm.patchValue({
      name: this.dataForm.value.city,
    })
  }

  deletedata(i: number) {
    this.dataSource.splice(i, 1);
    console.log(this.dataSource);
    this.MatTable.renderRows();
  }

  // Search() {
  //   if (this.name == "") {
  //     this.ngOnInit();
  //   } else {
  //     this.dataSource = this.dataSource.filter(res => {
  //       return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
  //     })
  //   }
  // }

  Search(i){
    this.dataSource = this.dataSource.filter( res => {
      res.name.toLocaleLowerCase().match(i.toLocaleLowerCase());
    });
  }
}


