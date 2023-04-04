import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { CommonService } from "./common.service";

@Injectable({
    providedIn: 'root'
})

export class ResolverService implements Resolve<any> {

    constructor(private data: CommonService, private http: HttpClient) { }

    resolve() {

        // console.log("data : ", this.http.get('https://api.github.com/users'));
        let items = {
        }

        let data = {
            dataaaaa: this.http.get('https://api.github.com/users'),
            carData: this.data.getCarData(),
            userData: this.data.getUsersData(),
            githubData: this.http.get('https://api.github.com/users'),
            jquerydemodata: this.http.get('https://api.github.com/users'),
            excelData: this.http.get('https://api.github.com/users'),
            excelData2: this.http.get('https://retoolapi.dev/1dl4z9/data')
        }
        // return items;
        return data;
    }

}