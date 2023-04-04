import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { rejects } from 'assert';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonService } from '../common.service';


interface city {
  value: string;
  label: string;
}


@Component({
  selector: 'app-validators',
  templateUrl: './validators.component.html',
  styleUrls: ['./validators.component.css']
})
export class ValidatorsComponent implements OnInit {

  cities: city[] = [
    { value: 'Vadodara', label: 'Vadodara' },
    { value: 'Ahemdabad', label: 'Ahemdabad' },
    { value: 'Gandhinagar', label: 'Gandhinagar' }
  ];

  city = new FormControl(this.cities[0].value, [Validators.required]);

  hide = true;

  data = [];

  passwordShown: boolean = false; 

  dataForm: FormGroup;

  public emailForm: FormGroup;

  regex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";

  //  NoEmail = (http: HttpClient) => (emails: FormControl) => {
  //   if(!emails || String(emails.value).length === 0) {
  //     return of(null);
  //   }
  
  //   return http.get('https://retoolapi.dev/lrWhgk/data' + String(emails.value))
  //   .pipe(
  //     map((mails: any[]) => {
  //       return mails.length === 1 
  //         ? null : { emails: true };
  //   }),);
  // };
  

  // public emails = new FormControl('',null,[this.NoEmail(this.http)]);

  constructor(private cs : CommonService) { }

  d : any = []; 
  ngOnInit(): void {
    this.dataForm = new FormGroup ({
      name: new FormControl('',Validators.required),
      number: new FormControl([Validators.required,Validators.minLength(10)]),
      address: new FormControl('',[Validators.required, Validators.minLength(5),Validators.maxLength(20)]),
      age: new FormControl(Validators.nullValidator),
      password: new FormControl('',[Validators.required, Validators.email,Validators.pattern('[a-zA-Z0-9]{5,10}')]),
      email: new FormControl('',[Validators.required,Validators.pattern(this.regex)]),
      dob: new FormControl(),
      gender: new FormControl('',Validators.required),
      city: this.city
    });

    this.emailForm = new FormGroup ({
    emails: new FormControl('',[Validators.pattern(this.regex)],[this.NoEmail])
    })

    this.getEmail() ;
  }
  
  NoEmail(control: FormControl) : Promise<any> | Observable<any>{
    // let res2;
    // getEmail(){
      
      // this.getEmail();
      const res = new Promise(() => {
        this.cs.getEmailData().subscribe(res => {
          this.d = res;    
          console.log(Object.keys(res[0]));         
          
          this.d.map( emails => {
            emails = emails.Name;
            console.log((emails));        
          })
          console.log("this.d : ",this.d.Name);       
          const res2 = new Promise((resolve,reject) => {   
             
            // console.log("this.d : ",this.d.Name);
            if(control.value === this.d){
              resolve ({'emailNotAllowed': true});
            } else {
              reject ({'emailAllowed': true});
            }
            return res2.then(res => {
              console.log("then : ",res);      
            }).catch(err => {
              console.log("error : ",err);
              
            })
          })
        })

      })

      return res;
      
    }
    
      getEmail(){
        this.cs.getEmailData().subscribe(res => {
          this.d = res;    
          console.log(Object.keys(res[0]));         
          
          this.d.map( emails => {
            emails = emails.Name;
            console.log((emails));        
          })
          console.log("this.d : ",this.d.Name);       
        })
      }
    
  get password(){
    return this.dataForm.get('password');
  }
  get number(){
    return this.dataForm.get('number');
  }
  get address(){
    return this.dataForm.get('address');
  }
  get email(){
    return this.dataForm.get('email');
  }


  submitData(){
    this.data = this.dataForm.value;
    console.log(this.data);   
    
    this.data = this.emailForm.value;
    console.log(this.data);    
  }

  // togglePassword(){
  //   if(this.passwordShown == false) {
  //     this.passwordShown = false;
  //     this.dataForm.controls.password = toString(); 
  //   }
  // }

}
