import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  apiUrl = '';

  constructor(private http: HttpClient) { }

  getInmuebles(){
    return new Promise(resolve => {
      this.http.get('http://127.0.0.1:8000/api/inmuebles/').subscribe(data => {
        resolve(data);
      }, err =>{
        console.log(err); 
      });
    });
  }
}
