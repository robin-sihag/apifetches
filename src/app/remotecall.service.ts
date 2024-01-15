import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RemotecallService {

  constructor(private http:HttpClient) { }

  getDataFromWeb(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
}
