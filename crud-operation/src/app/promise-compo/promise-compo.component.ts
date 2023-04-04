import { Component, OnInit } from '@angular/core';
// import { relative } from 'path';
import { promise } from 'selenium-webdriver';
import { CommonService } from "src/app/common.service";

@Component({
  selector: 'app-promise-compo',
  templateUrl: './promise-compo.component.html',
  styleUrls: ['./promise-compo.component.css']
})
export class PromiseCompoComponent implements OnInit {
  
  varrr;
  constructor(private ser: CommonService) {
    console.log("PromiseCompoComponent")
    fetch('https://jsonplaceholder.typicode.com/posts').then(res => {
      console.log("Data :",res);
    })

    this.ser.promiseData().subscribe(res => {
      console.log("dha : ",res);
      this.varrr = res;
      console.log("dhaaa : ",this.varrr);
      
      
    })
   }

  phone = {
    brand: "iphone 12",
    color: "white",
    price: 60000
  }
  
  laptop = {
    brand: "hp",
    color: "black",
    price: 50000
  }

  res : Array<any> = [
    {
      brand: "iphone 12",
      color: "white",
      price: 60000
    },
    {
      brand: "hp",
      color: "black",
      price: 50000
    }
  ]
  
  

  x;
  data;
  item;
  
  phonesStatus(){
    return true;
  }
  
  iphoneStatus(){
    return false;
  }
  
  androidStatus(){
    return true;
  }
  
  androidStatusVal;
  onShowAndroid(){
    let android = new Promise((resolve,reject) => {
      if(this.phonesStatus()){
        return setTimeout(() => {
          resolve("Available");
        },2000);
      } else {
        return setTimeout(() => {
          reject("Not Available");
        },2000);
      }
    });

    android.then(res => {
      this.androidStatusVal = res;
      console.log(res);
    }).catch( res => {
      this.androidStatusVal = res;
    })
  }

  iphoneStatusVal;
  onShowIphone(){
    let iphone = new Promise((resolve,reject) => {
      if(this.iphoneStatus()) {
        return setTimeout(() => {
          resolve("Available");
        },2000);
      } else {
        return setTimeout(() => {
          reject ("Not Available");
        },2000);
      }
    });

    iphone.then( res => {
      this.iphoneStatusVal = res;
    }).catch( res => {
      this.iphoneStatusVal = res;
    })
  }

  pro = new Promise((resolve, reject) => {
    resolve(this.phone);
  })
  promiseEx(){
    console.log("Working");
    
    this.pro.then( res => {
      this.x = res;
      console.log("Data : ",this.x);
    })
  }

  pro2 = new Promise((resolve, reject) => {
    resolve(this.laptop);
  })
  async asyncEx(){
    setTimeout(async () => {
      this.data = await this.pro2;
      console.log(this.data);
    },2000)
  }

  extraEx(){
    let pro3 = new Promise(resolve => {
      return setTimeout(() => {
        resolve(this.res);
      }, 3000);
    });

    pro3.then(res => {
      // setTimeout(() => {
      // }, 3000);
      this.item = res;
      console.log(res);    
    })
    // setTimeout( async () => {
    //   this.item = await this.pro3;
    //   console.log(this.item);
    // },3000);
    
  }
  
  // api;
  // pro3 = new Promise((resolve, reject) => {
  //   this.api = fetch('https://jsonplaceholder.typicode.com/posts');
  //   // resolve("Successfully fetched");
  //   resolve(fetch('https://jsonplaceholder.typicode.com/posts'));
  // })
  ngOnInit(): void {

    let re = this.res.map(res => {
      res.ram = 6;
      res.rom =128
    })

    console.log("map : ",this.res);
    
    // this.pro3.then( res => {
    //   console.log("Pass " ,res);
    // }).catch( res => {
    //   console.log("Failed Error",res);
    // })

    // this.pro3.then( res => {
    //   console.log(res);
    // }).catch( res => {
    //   console.log("Not Fetched",res);
    // })

    
    let one = () => {
      // console.log("I am One");
      return "I am one";
    }

     let two =async () =>  {
      setTimeout(() => {
        console.log('I am twoasd')
      }, 2000);
      return 'I am two';
    }

    let three = () => {
      // console.log("I am Three");
      return "I am three";
    }

    // console.log(one(),"\n",two(),"\n",three());

    let four = async () => {
      let valOne = one();
      console.log("valOne : ", valOne);

      let valTwo =await two();
      console.log("valTwo : ", valTwo);
      // valTwo.then(res => {
      //   console.log(res);
      // })
      
      

      let valThree =  three();
      console.log("valThree : ", valThree);
    }

    console.log(four());

  }

}
