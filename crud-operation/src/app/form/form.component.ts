import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from "src/app/common.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  name = "Child Compo";

  dataSource = [];

  dataForm!: FormGroup;

  // static records: Array<any> = [];

  constructor(private ser : CommonService, private router: Router) {
    // console.log("Dataform : ",this.dataForm.value);
    // this.ser.getTheData();
    // console.log("FormComponent Loaded\n");
  }
  
  ngOnInit(){
    this.dataForm =  new FormGroup({
      name: new FormControl('',Validators.required),
      number: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      address: new FormControl('',Validators.required)
    });
  }

  details;
  submitData(){
    console.log("Form details : ",this.dataForm.value)

    const { name, number, password, address } = this.dataForm.getRawValue();

    this.details = {
      name: "",
      number: 0,
      password: "",
      address: ""
    }

    this.dataSource.push(this.details);
    console.log("bjkbdssv : ",this.dataSource);
    

    // this.details = this.dataForm.getRawValue();

    console.log("data form : ",this.dataForm.getRawValue());

    console.log("keys",Object.keys(this.details));
    
    // console.log("records : ",this.details);
    // FormComponent.records = this.dataForm.value;

    // this.router.navigate(["/records"])
    // this.ser.setTheData(this.dataForm.value);
    // console.log("FormComponent Loaded\n");

    // console.log(
    // "form values  \nname : ",data.value.name,
    // "\nnumber : ", data.value.number,
    // "\npassword : ",data.value.password,
    // "\naddress : ",data.value.address
    // );
  }

}
