import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpdataService {

  constructor(private httpform:HttpClient) { }

  getData(url){
    let baseUrl = environment.apiUrl + url
    return this.httpform.get(baseUrl)
  }

  postData(url,formdata){
    let baseUrl = environment.apiUrl + url
    return this.httpform.post(baseUrl,formdata)
  }
}
