import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-array-obj',
  templateUrl: './array-obj.component.html',
  styleUrls: ['./array-obj.component.css'],
})
export class ArrayObjComponent implements OnInit {
  @ViewChild('btn') button: ElementRef;

  formGroup: FormGroup;

  ress;
  arrrr;
  fil;
  mapp;
  reddd;

  obj;
  objj;

  i = [];
  res;
  arr: Array<any> = [
    {
      person: 'Shery',
      age: 21,
      salary: null,
    },
    {
      person: 'haziq',
      age: 27,
      salary: 55000,
    },
    {
      person: 'Quin',
      age: 27,
      salary: 50000,
    },
    {
      person: 'Bazil',
      age: 30,
      salary: 50000,
    },
  ];

  constructor() {}

  ngOnInit() {
    //array
    this.arrrr = [1, 3, 4, 2, 4, 3, 2, 2];
    console.log('Og Array : ', this.arrrr);

    this.fil = this.arrrr.filter((el) => el % 2 === 0);
    this.mapp = this.fil.map((el) => el * el);
    this.reddd = this.mapp.reduce((a, b) => a + b);

    this.ress = this.arrrr
      .filter((el) => el % 2 === 0)
      .map((el) => el * el)
      .reduce((a, b) => a + b);
    console.log('Final Array : ', this.ress);

    //object

    this.objj = this.arr
      .filter((el) => el.salary >= 0)
      .map((el) => (el.yoe = 5));
    // this.objj = this.arr.reduce((a,b) => ({
    //   salary : a.salary+b.salary
    // }))

    console.log('1', this.objj);

    this.arr.map((el) => {
      el.yoe = 5;
    });
    console.log(this.arr);

    let mapArray = this.arr.map((items) => items.salary);
    console.log('filArray : ', mapArray);

    // Q. Find unique keys from nexted array of objects.
    console.log('*** Q. Find unique keys from nexted array of objects. ***');
    let array = [
      { ID: 1 },
      [
        { ID: 4 },
        { ID: 2 },
        { ID: 4 },
        [{ ID: 5 }, [{ ID: 7 }, { ID: 9 }, [{ ID: 10 }, { ID: 11 }]]],
      ],
    ];
    let flatArray = array.flat(10);
    console.log(flatArray);
    function onlyUnique(value, index, array) {
      return array.indexOf(value) === index;
    }
    let finalArray = flatArray.map((item) => item.ID).filter(onlyUnique);
    console.log(finalArray);
    console.log('No. of Unique Ids : ', finalArray.length);

    this.formGroup = new FormGroup({
      formCon: new FormControl('', Validators.required),
    });
  }

  click1() {
    console.log('I am Click 1');
  }

  click2() {
    this.click1();
  }

  add(data) {
    // if(data.value.length == 0){
    //   return null;
    // } else {
    //   this.res = this.i.push(data.value);
    //   console.log(this.res);
    // }

    // let len = 0;

    let pro = new Promise((resolve, reject) => {
      if (data.value.length !== 0) {
        resolve('Success');
      } else {
        reject('Error');
        // this.res = this.i.push(data.value);
        // console.log(this.i);
      }
    });

    pro
      .then(() => {
        if (data.value !== data.value) {
          this.res = this.i.push(data.value);
          console.log(this.res);
        } else if (data.value !== data.value) {
          window.alert('Already exist !!');
        }
      })
      .catch(() => {
        window.alert('Field cannot be empty !!');
      });
  }

  ngAfterViewInit(): void {
    this.onClick();
  }

  onClick() {
    let buttonSubs = fromEvent(this.button.nativeElement, 'click').subscribe(
      (res) => {
        console.log('res : ', res);
      }
    );
  }
}
