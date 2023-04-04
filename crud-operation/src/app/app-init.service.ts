import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppInitService {

  constructor(private http: HttpClient) { }

  url = "https://api.github.com/users";
  
  init(){
    return this.http.get(this.url).toPromise();
  }

}
